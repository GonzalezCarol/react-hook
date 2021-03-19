import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  user: null,
  products: [],
  other: "...",
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberMult7":
      return { ...state, number: state.number * 7 };
    case "numberDiv25":
      return { ...state, number: state.number / 25 };
    case "numberInt":
      return { ...state, number: parseInt(state.number)};
    case "numberAddN":
      return { ...state, number: state.number + action.payLoad};
    case "login":
      return { ...state, user: { name: action.name } };
    default:
      return state;
  }
}


const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">"Sem usuário"</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={()=> dispatch({ type: "login", name:'marina' })}> Login </button>
          <button className="btn" onClick={()=> dispatch({ type: "numberMult7"})}> * 7 </button>
          <button className="btn" onClick={()=> dispatch({ type: "numberDiv25"})}> / 25 </button>
          <button className="btn" onClick={()=> dispatch({ type: "numberInt"})}> Int </button>
          <button className="btn" onClick={()=> dispatch({ type: "numberAddN", payLoad: -9})}> - 9 </button>
          <button className="btn" onClick={()=> dispatch({ type: "numberAddN", payLoad: +9})}> + 9 </button>
          <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}> +2 </button>  {/* dentro do dispatch o objeto é uma ação, entao eu passo o type que é o numberAdd2*/}
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
