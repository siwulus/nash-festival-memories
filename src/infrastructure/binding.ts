import { bindDropboxDependencies } from '@/infrastructure/dropbox/binding';
import { Container } from 'inversify';

export const bindInfrastructureDependencies = (container: Container) => {
  bindDropboxDependencies(container);
};
