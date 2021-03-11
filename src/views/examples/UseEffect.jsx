import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calculateFatorial(num) {
  const number = parseInt(num);
  if (number < 0) return -1;
  if (number === 0) return 1;
  return calculateFatorial(number - 1) * number;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [oddOrEvenNumber, setOddOrEvenNumber] = useState(1);
  const [oddOrEvenStatus, setOddOrEvenStatus] = useState("");

  useEffect(
    function () {
      setFatorial(calculateFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 10000) {
        document.title = "eita!";
      }
    },
    [fatorial]
  );

  useEffect(function () {
    setOddOrEvenStatus(oddOrEvenNumber % 2 === 0 ? "Par" : "Impar")
    
  }, [oddOrEvenNumber]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />

      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "não existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">
          Qual o tipo?
          
        </span>
        <span className="text read">{oddOrEvenStatus}</span>
        <input
          type="number"
          className="input"
          onChange={(event) => setOddOrEvenNumber(event.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
