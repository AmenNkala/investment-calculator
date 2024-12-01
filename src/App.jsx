import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

import { calculateInvestmentResults, formatter } from "./util/investment";

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
  const [tableData, setTableData] = useState([]);

  function handleUserInputValue(input, value) {
    const newInputValues = { ...inputValues, [input]: value };
    setInputValues(newInputValues);
    updateTableData(newInputValues);
  }

  function updateTableData(newValues) {
    const result = Object.entries(INPUT_LABELS).reduce((acc, [key, value]) => {
      acc[key] = Number(newValues[value]);
      return acc;
    }, {});
    const investmentResults = calculateInvestmentResults(result).map(
      (investment) => {
        return {
          year: investment.year,
          interest: formatter.format(investment.interest),
          valueEndOfYear: formatter.format(investment.valueEndOfYear),
          annualInvestment: formatter.format(investment.annualInvestment),
        };
      }
    );

    setTableData(investmentResults);
  }

  const isDurationValid = tableData.length > 0 && inputValues.duration > 0;

  return (
    <>
      <Header />
      <div id='user-input'>
        <div className='input-group'>
          <UserInput
            inputLabel={INPUT_LABELS.initialInvestment}
            inputValue={inputValues["initial investment"]}
            onChangeValue={handleUserInputValue}
          />
          <UserInput
            inputLabel={INPUT_LABELS.annualInvestment}
            inputValue={inputValues["annual investment"]}
            onChangeValue={handleUserInputValue}
          />
        </div>
        <div className='input-group'>
          <UserInput
            inputLabel={INPUT_LABELS.expectedReturn}
            inputValue={inputValues["expected return"]}
            onChangeValue={handleUserInputValue}
          />
          <UserInput
            inputLabel={INPUT_LABELS.duration}
            inputValue={inputValues.duration}
            onChangeValue={handleUserInputValue}
          />
        </div>
      </div>
      {!isDurationValid && (
        <p className='center'>
          No data available. Please fill out the inputs.{" "}
          <strong>Duration should be valid!</strong>
        </p>
      )}
      {isDurationValid && <Table data={tableData} />}
    </>
  );
}

export default App;
