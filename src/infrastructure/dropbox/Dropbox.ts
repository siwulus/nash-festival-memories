import {
  CreateFileRequestArgs,
  FileMetadata,
  FileRequest,
  UpdateFileRequestArgs,
  UploadDataArgs,
} from '@/core/boundary/storage';
import { handleFetchResponse } from '@/core/utils/fetch';
import { DropboxAuth } from '@/infrastructure/dropbox/DropboxAuth';
import { inject, injectable } from 'inversify';
import { z } from 'zod';

@injectable()
export class Dropbox {
  constructor(
    @inject('DropboxApiBaseUrl')
    private readonly apiBaseUrl: string,
    @inject('DropboxContentApiBaseUrl')
    private readonly contentApiBaseUrl: string,
    @inject(DropboxAuth)
    private readonly auth: DropboxAuth
  ) {}

  async createFileRequest(body: CreateFileRequestArgs): Promise<FileRequest> {
    const accessToken = await this.auth.getAccessToken();
    const response = await fetch(`${this.apiBaseUrl}/2/file_requests/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return handleFetchResponse(response, FileRequest);
  }

  async listFileRequests(): Promise<FileRequest[]> {
    const accessToken = await this.auth.getAccessToken();
    const response = await fetch(`${this.apiBaseUrl}/2/file_requests/list`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        limit: 1000,
      }),
    });
    return (
      await handleFetchResponse(
        response,
        z.object({
          file_requests: z.array(FileRequest),
        })
      )
    ).file_requests;
  }

  async updateFileRequest(args: UpdateFileRequestArgs): Promise<FileRequest> {
    const accessToken = await this.auth.getAccessToken();
    const response = await fetch(`${this.apiBaseUrl}/2/file_requests/update`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });
    return handleFetchResponse(response, FileRequest);
  }

  async uploadData(
    args: UploadDataArgs,
    content: Buffer
  ): Promise<FileMetadata> {
    const accessToken = await this.auth.getAccessToken();
    const response = await fetch(`${this.contentApiBaseUrl}/2/files/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify(args),
      },
      body: content,
    });
    return handleFetchResponse(response, FileMetadata);
  }
}
