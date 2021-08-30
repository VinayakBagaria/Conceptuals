import { ChatRoom, User } from './chatRoom';

const mediator = new ChatRoom();

const john = new User('John Doe', mediator);
const jane = new User('Jane Doe', mediator);

john.send('Hi');
jane.send('Hola');
