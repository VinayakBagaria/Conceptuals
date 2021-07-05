import { useContext } from 'react';
import { ToastContext } from './context';
import { genQuotesInArray } from './utils';

const Foo = () => {
  const ctx = useContext(ToastContext);

  const handleClick = () => {
    const quote = genQuotesInArray();
    ctx(quote);
  };

  return <button onClick={handleClick}>Add Toast</button>;
};

export default Foo;
