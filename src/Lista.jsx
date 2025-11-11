import React from "react";

function reduces(state, action) {
  switch (action.type) {
    case "MUDAR_INPUT":
      return { ...state, inputValue: action.content };
    case "ADICIONAR": {
      const value = (action.content ?? state.inputValue).trim();
      if (!value) return state;
      return { ...state, items: [...state.items, value], inputValue: "" };
    }
    case "RETIRAR": {
      const value = (action.content ?? state.inputValue).trim();
      if (!value) return state;
      return {
        ...state,
        items: state.items.filter((i) => i !== value),
        inputValue: "",
      };
    }
    default:
      return state;
  }
}

const Lista = () => {
  const initialState = { items: ["banana", "maçã", "laranja"], inputValue: "" };
  const [state, dispatch] = React.useReducer(reduces, initialState);

  return (
    <div>
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) =>
          dispatch({ type: "MUDAR_INPUT", content: e.target.value })
        }
        placeholder="Digite algo..."
      />
      <button onClick={() => dispatch({ type: "ADICIONAR" })}>Adicionar</button>
      <button onClick={() => dispatch({ type: "RETIRAR" })}>Retirar</button>
      <br />
      <br />

      <p>Lista:</p>
      <ul>
        {state.items.map((item) => (
          <li style={{ marginLeft: "5px" }} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
