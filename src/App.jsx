import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

const INPUT_VALUES = {
  "initial investment": 0,
  "annual investment": 0,
  "expected return": 0,
  duration: 0,
};

const INPUT_LABELS = {
  initialInvestment: "initial investment",
  annualInvestment: "annual investment",
  expectedReturn: "expected return",
  duration: "duration",
};

function App() {
  const [inputValues, setInputValues] = useState(INPUT_VALUES);

  function handleUserInputValue(input, value) {
    setInputValues({ ...inputValues, [input]: value });
  }
  return (
    <>
      <Header />
      <div id='user-input'>
        <div className='input-group'>
          <UserInput
            inputLabel={INPUT_LABELS.initialInvestment}
            onChangeValue={handleUserInputValue}
          />
          <UserInput
            inputLabel={INPUT_LABELS.annualInvestment}
            onChangeValue={handleUserInputValue}
          />
        </div>
        <div className='input-group'>
          <UserInput
            inputLabel={INPUT_LABELS.expectedReturn}
            onChangeValue={handleUserInputValue}
          />
          <UserInput
            inputLabel={INPUT_LABELS.duration}
            onChangeValue={handleUserInputValue}
          />
        </div>
      </div>
    </>
  );
}

export default App;
