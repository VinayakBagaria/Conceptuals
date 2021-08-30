import { Editor } from './editor';

const editor = new Editor();

editor.type('1st Line');
editor.type('\n2nd Line');

const saved = editor.save();

editor.type('\n3rd Line');

console.log(editor.getContent());

console.log('----- Restoring -----');
editor.restore(saved);

console.log(editor.getContent());
