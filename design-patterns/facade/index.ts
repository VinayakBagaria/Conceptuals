import { Computer } from './computer';
import { ComputerFacade } from './computerFacade';

const cf = new ComputerFacade(new Computer());
cf.turnOn();
