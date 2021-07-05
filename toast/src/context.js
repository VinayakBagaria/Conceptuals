import { createContext, useState } from 'react';

export const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  // {id: 1, text: "body"}
  const [toasts, setToasts] = useState([]);

  const addToast = (newToastText) => {
    const newId = new Date() * 1000;
    setToasts((x) => [
      ...x,
      {
        id: newId,
        text: newToastText,
      },
    ]);

    setTimeout(() => {
      // removeToast();
    }, 2000);
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
    <ToastContext.Provider value={addToast}>
      <div className="toast-provider">
        {toasts.map((eachT) => (
          <p key={eachT.id}>{eachT.text}</p>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
