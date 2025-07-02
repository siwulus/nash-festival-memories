import { z } from 'zod';
import { AccessToken } from '../../core/boundary/auth';
import {
  CreateFileRequestArgs,
  FileMetadata,
  FileRequest,
  UpdateFileRequestArgs,
  UploadDataArgs,
} from '../../core/boundary/storage';

class Dropbox {
  constructor(
    private readonly refreshToken: string,
    private readonly clientId: string,
    private readonly clientSecret: string
  ) {}
  private readonly apiBaseUrl = 'https://api.dropboxapi.com';
  private readonly contentApiBaseUrl = 'https://content.dropboxapi.com';

  async getAccessToken(): Promise<AccessToken> {
    const response = await fetch(`${this.apiBaseUrl}/oauth2/token`, {
      method: 'POST',
      body: new URLSearchParams({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken,
      }),
    });
    const data = await response.json();
    return AccessToken.parse(data);
  }

  async createFileRequest(
    accessToken: AccessToken,
    body: CreateFileRequestArgs
  ): Promise<FileRequest> {
    const response = await fetch(`${this.apiBaseUrl}/2/file_requests/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return FileRequest.parse(data);
  }

  async listFileRequests(accessToken: AccessToken): Promise<FileRequest[]> {
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
    const data = await response.json();
    return z
      .object({
        file_requests: z.array(FileRequest),
      })
      .parse(data).file_requests;
  }

  async updateFileRequest(
    accessToken: AccessToken,
    args: UpdateFileRequestArgs
  ): Promise<FileRequest> {
    const response = await fetch(`${this.apiBaseUrl}/2/file_requests/update`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    });
    const data = await response.json();
    return FileRequest.parse(data);
  }

  async uploadData(
    accessToken: AccessToken,
    args: UploadDataArgs,
    content: Buffer
  ): Promise<FileMetadata> {
    const response = await fetch(`${this.contentApiBaseUrl}/2/files/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify(args),
      },
      body: content,
    });
    const data = await response.json();
    return FileMetadata.parse(data);
  }
}
