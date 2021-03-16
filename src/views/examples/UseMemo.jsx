import React, { useState, useMemo } from "react";
import PageTitle from "../../components/layout/PageTitle";

function sum(a, b) {
  const future = Date.now() + 2000;
  while (Date.now() < future) {
    //! espera ... 2s
  }
  return a + b;
}
const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  //* retorna o valor calculado pela funçao e so chama de novo caso o valor de n1 mude ou de n2 mude
  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(event) => setN1(parseInt(event.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(event) => setN2(parseInt(event.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(event) => setN3(parseInt(event.target.value))}
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
