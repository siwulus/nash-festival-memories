import { bindCoreDependencies } from '@/core/binding';
import { bindInfrastructureDependencies } from '@/infrastructure/binding';
import { Container } from 'inversify';

const container = new Container();
bindInfrastructureDependencies(container);
bindCoreDependencies(container);

export default container;
