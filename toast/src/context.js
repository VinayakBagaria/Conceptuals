import { createContext, useState } from 'react';

export const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
  // {id: 1, text: "body"}
  const [t, setT] = useState([]);

  const addToast = (newToastText) => {
    const newId = new Date() * 1000;
    setT((x) => [
      ...x,
      {
        id: newId,
        text: newToastText,
      },
    ]);

    setTimeout(() => {
      setT((x) => x.filter((y) => y.id !== newId));
    }, 2000);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {t.map((eachT) => (
        <p key={eachT.id}>{eachT.text}</p>
      ))}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
