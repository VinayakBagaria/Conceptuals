import { useEffect, useRef } from 'react';

function Timer(callback, delay) {
  let timerId;
  let start = delay;
  let remaining = delay;

  this.clear = function () {
    clearTimeout(timerId);
  };

  this.pause = function () {
    clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    start = Date.now();
    clearTimeout(timerId);
    timerId = setTimeout(callback, remaining);
  };

  this.resume();
}

const Toast = ({ children, onDismissCallback, delay }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = new Timer(onDismissCallback, delay);
    return () => {
      timerRef.current.clear();
    };
  }, []);

  const onMouseEnter = () => {
    timerRef.current.pause();
  };

  const onMouseLeave = () => {
    timerRef.current.resume();
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="each-toast-wrapper"
    >
      {children}
    </div>
  );
};

export default Toast;
