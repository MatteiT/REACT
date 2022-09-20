import React, { useState, createContext } from 'react';
const Context = createContext();

const ContextApi = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Context.Provider
      value={{
        showSidebar,
        showModal,
        setShowModal,
        setShowSidebar,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextApi, Context };
