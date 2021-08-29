import { Employee, Developer, Designer } from './employee';
import { Organization } from './organization';

const john: Employee = new Developer('John Doe', 12000);
const jane: Employee = new Designer('Jane Doe', 15000);

const org: Organization = new Organization();
org.addEmployee(john);
org.addEmployee(jane);
console.log(org.getNetSalaries());
