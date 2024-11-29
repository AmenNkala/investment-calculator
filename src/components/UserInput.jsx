import { useState } from "react";

export default function UserInput({ inputLabel, onChangeValue }) {
  const [inputValue, setInputValue] = useState(0);
  function handleChange($event) {
    setInputValue($event.target.value);
    onChangeValue(inputLabel, $event.target.value);
  }
  return (
    <p id='user-input'>
      <label htmlFor={inputLabel}>{inputLabel}</label>
      <input
        type='number'
        name={inputLabel}
        value={inputValue}
        onChange={handleChange}
      />
    </p>
  );
}
