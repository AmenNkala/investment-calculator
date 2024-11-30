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
      <Table data={tableData} />
    </>
  );
}

export default App;
