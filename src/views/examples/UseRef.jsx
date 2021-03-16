import React, { useRef, useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = function (s1, s2) {
  return [...s1].map((value, i) => `${value}${s2[i] || ""}`).join("");
};

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [value1]
  );
  useEffect(
    function () {
      count.current++;
      myInput1.current.focus();
    },
    [value2]
  );
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio #01"> </SectionTitle>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          ref={myInput1}
          onChange={(event) => setValue1(event.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio #02"> </SectionTitle>
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          ref={myInput2}
          onChange={(event) => setValue2(event.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
