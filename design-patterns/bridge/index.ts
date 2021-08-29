import { Theme, DarkTheme } from './theme';
import { WebPage, Careers } from './webpage';

const careers: WebPage = new Careers(new DarkTheme());
console.log(careers.getContent());
