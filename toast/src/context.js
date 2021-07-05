import { createContext, useState } from 'react';
import Toast from './Toast';

export const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  // {id: 1, text: "body"}
  const [toasts, setToasts] = useState([]);

  const addToast = (newToastText, options = {}) => {
    const newId = new Date() * 1000;
    const newToastObject = {
      id: newId,
      text: newToastText,
      delay: options.delay ?? 2000,
      ...options,
    };
    setToasts((oldToast) => [...oldToast, newToastObject]);
  };

  const removeToast = (toastId) => {
    setToasts((allToasts) =>
      allToasts.filter((eachToast) => eachToast.id !== toastId)
    );
  };

  const removeAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeAll }}>
      <div className="toast-provider">
        {toasts.map((eachToast) => (
          <Toast
            key={eachToast.id}
            onDismissCallback={() => removeToast(eachToast.id)}
            delay={eachToast.delay ?? 0}
          >
            {eachToast.text}
          </Toast>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
