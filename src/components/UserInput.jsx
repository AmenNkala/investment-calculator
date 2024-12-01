import { useState } from "react";

export default function UserInput({ inputLabel, inputValue, onChangeValue }) {
  return (
    <p id='user-input'>
      <label htmlFor={inputLabel}>{inputLabel}</label>
      <input
        type='number'
        name={inputLabel}
        value={inputValue}
        onChange={($event) => {
          onChangeValue(inputLabel, $event.target.value);
        }}
        required
        min={1}
      />
    </p>
  );
}
