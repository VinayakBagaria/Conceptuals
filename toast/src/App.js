import Foo from './Foo';
import ToastContextProvider from './context';
import './App.css';

function App() {
  return (
    <ToastContextProvider>
      <Foo />
    </ToastContextProvider>
  );
}

export default App;
