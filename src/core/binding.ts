import { PhotoCollectionUseCase } from '@/core/use-cases/photo-collection/PhotoCollectionUseCase';
import { Container } from 'inversify';

export const bindCoreDependencies = (container: Container) => {
  container.bind(PhotoCollectionUseCase).toSelf().inSingletonScope();
};
