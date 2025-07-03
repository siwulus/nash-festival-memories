import { CreatePhotoCollectionRequestArgs } from '@/core/boundary/photo-collection';
import type { FileStorage } from '@/core/boundary/storage';
import { FileRequest } from '@/core/boundary/storage';
import { PhotoCollectionUploadMetadata } from '@/core/model/photo-collection';
import { inject, injectable } from 'inversify';

@injectable()
export class PhotoCollectionUseCase {
  constructor(
    @inject('FileStorage')
    private readonly fileStorage: FileStorage
  ) {}

  async createPhotoCollectionRequest(
    args: CreatePhotoCollectionRequestArgs
  ): Promise<PhotoCollectionUploadMetadata> {
    const fileRequest: FileRequest = await this.fileStorage.createFileRequest({
      title: `Upload zdjęć od: ${args.name} ${args.surname}`,
      open: true,
      destination: `/${args.name}-${args.surname}-${this.formatDateForPath()}`,
    });
    await this.fileStorage.uploadData(
      {
        path: `${fileRequest.destination}/description.txt`,
        mode: 'overwrite',
        autorename: true,
        mute: true,
      },
      Buffer.from(this.buildFileRequestDescription(args))
    );
    return PhotoCollectionUploadMetadata.parse({
      ...args,
      uploadUrl: fileRequest.url,
    });
  }

  private buildFileRequestDescription(args: CreatePhotoCollectionRequestArgs) {
    return `
Imię: ${args.name}
Nazwisko: ${args.surname}
Email: ${args.email}
Opis: ${args.description}
`;
  }

  private formatDateForPath(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  }
}
