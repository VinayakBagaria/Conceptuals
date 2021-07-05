import { useState, useContext } from 'react';
import { ToastContext } from './context';
import { generateUEID } from './utils';

const Foo = () => {
  const [i, setI] = useState(1);
  const c = useContext(ToastContext);

  const handleClick = () => {
    c(generateUEID());
    setI(i + 1);
  };

  return <button onClick={handleClick}>Add Toast</button>;
};

export default Foo;
