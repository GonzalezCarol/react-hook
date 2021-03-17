import React, { useState, useCallback } from "react";
import PageTitle from "../../components/layout/PageTitle";
import useCallBackButtons from "./useCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    function inc(delta) {
      //!passando uma funçao callback para o setCount eu não dependo mais do count e ai não vai renderizar de novo o component
      setCount((current) => current + delta); //! current é o ultimo valor do estado (count)
    },
    [setCount] //! setCount vai ser criado apenas uma única vez entao vai renderizar só uma vez
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <useCallBackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
