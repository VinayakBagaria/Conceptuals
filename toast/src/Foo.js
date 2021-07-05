import { useContext } from 'react';
import { ToastContext } from './context';
import { genQuotesInArray } from './utils';

const Foo = () => {
  const ctx = useContext(ToastContext);

  const handleClick = () => {
    const quote = genQuotesInArray();
    ctx.addToast(quote);
  };

  return (
    <>
      <button onClick={handleClick}>Add Toast</button>
      <button onClick={ctx.removeAll}>Remove All</button>
    </>
  );
};

export default Foo;
