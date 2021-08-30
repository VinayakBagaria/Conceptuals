import { Editor } from './editor';
import { DefaultState, LowerState, UpperState } from './writer';

const editor = new Editor(new DefaultState());
editor.type('Default State');

editor.setState(new UpperState());
editor.type('Upper State');

editor.setState(new LowerState());
editor.type('Lower State');
