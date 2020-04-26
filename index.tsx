// Сделать кредитный калькулятор:
// 3 инпута - сумма, ставка, срок, по ним рассчитывается ежемесяный аннуитетный платеж.
// Меняешь какой-то параметр сразу все пересчитывается и показыватся результат.
// По технологиям  - React, ts, сборщик любой. Eslint должен быть настроент в проекте.

import * as React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  const [creditSum, setCreditSum] = React.useState(0);
  const [creditProcent, setCreditProcent] = React.useState(0);
  const [creditPeriod, setCreditPeriod] = React.useState(0);
  const [mounthlyPayment, setMounthlyPayment] = React.useState(0);
  return (
    <div>
      <label className="input-label" htmlFor="credit-sum">
        <span>Credit Sum</span>
        <input
          className="credit-sum"
          id="credit-sum"
          value={creditSum}
          type="number"
          onChange={event => setCreditSum(parseInt(event.target.value, 10))}
        />
      </label>
      <label className="input-label" htmlFor="credit-procent">
        <span>Credit Procent</span>
        <input
          className="credit-procent"
          id="credit-procent"
          value={creditProcent}
          type="number"
          onChange={event => setCreditProcent(parseInt(event.target.value, 10))}
        />
      </label>
      <label className="input-label" htmlFor="credit-period">
        <span>Credit Period</span>
        <input
          className="credit-period"
          id="credit-period"
          value={creditPeriod}
          type="number"
          onChange={event => setCreditPeriod(parseInt(event.target.value, 10))}
        />
      </label>
      <label className="input-label" htmlFor="mounthly-payment">
        <span>Mounthly Payment</span>
        <input
          className="mounthly-payment"
          id="mounthly-payment"
          value={mounthlyPayment}
          type="number"
          onChange={event =>
            setMounthlyPayment(parseInt(event.target.value, 10))
          }
        />
      </label>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
