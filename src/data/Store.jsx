import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: "Context Api + hooks",
};

export const AppContext = React.createContext(initialState);

const Store = (props) => {
  const [state, setState] = useState(initialState);

  //* replica o estado anterior e altera apenas uma chave especifica
  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
      //* contexto/estado da nossa aplicação
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState("number", n),
        setText: (t) => updateState("text", t),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
