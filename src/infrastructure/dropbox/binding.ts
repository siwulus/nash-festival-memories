import { FileStorage } from '@/core/boundary/storage';
import { Dropbox } from '@/infrastructure/dropbox/Dropbox';
import { DropboxAuth } from '@/infrastructure/dropbox/DropboxAuth';
import { Container } from 'inversify';

export const bindDropboxDependencies = (container: Container) => {
  container
    .bind<string>('DropboxRefreshToken')
    .toConstantValue(process.env.DROPBOX_REFRESH_TOKEN!);
  container
    .bind<string>('DropboxClientId')
    .toConstantValue(process.env.DROPBOX_CLIENT_ID!);
  container
    .bind<string>('DropboxClientSecret')
    .toConstantValue(process.env.DROPBOX_CLIENT_SECRET!);
  container
    .bind<string>('DropboxApiBaseUrl')
    .toConstantValue('https://api.dropboxapi.com');
  container
    .bind<string>('DropboxContentApiBaseUrl')
    .toConstantValue('https://content.dropboxapi.com');
  container.bind(DropboxAuth).toSelf();
  container.bind<FileStorage>('FileStorage').to(Dropbox).inSingletonScope();
};
