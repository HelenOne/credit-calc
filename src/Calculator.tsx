import * as React from "react";

export const Calculator = () => {
  const [creditSum, setCreditSum] = React.useState("");
  const [creditProcent, setCreditProcent] = React.useState("");
  const [creditPeriod, setCreditPeriod] = React.useState("");
  const [mounthlyPayment, setMounthlyPayment] = React.useState("");

  const [annuityRate, setAnnuityRate] = React.useState(0);

  const handleChange = React.useCallback(
    (
      inputName:
        | "creditSum"
        | "creditProcent"
        | "creditPeriod"
        | "mounthlyPayment"
    ) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (inputName === "creditSum") {
        setCreditSum(event.target.value);
        setMounthlyPayment(
          (annuityRate * parseInt(event.target.value, 10)).toFixed(2)
        );
      } else if (inputName === "creditProcent") {
        setCreditProcent(event.target.value);
        const procent = parseInt(event.target.value, 10);
        const period = parseInt(creditPeriod, 10);
        const annuityRateValue =
          ((procent / 100) * (1 + procent / 100) ** period) /
          ((1 + procent / 100) ** period - 1);
        setAnnuityRate(annuityRateValue);
        setMounthlyPayment(
          (annuityRateValue * parseInt(creditSum, 10)).toFixed(2)
        );
      } else if (inputName === "creditPeriod") {
        setCreditPeriod(event.target.value);
        const procent = parseInt(creditProcent, 10);
        const period = parseInt(event.target.value, 10);
        const annuityRateValue =
          ((procent / 100) * (1 + procent / 100) ** period) /
          ((1 + procent / 100) ** period - 1);
        setAnnuityRate(annuityRateValue);
        setMounthlyPayment(
          (annuityRateValue * parseInt(creditSum, 10)).toFixed(2)
        );
      }
    },
    [annuityRate, creditPeriod, creditProcent, creditSum]
  );

  return (
    <div className="calcWrapper">
      <span className="calc-title">Credit calculator</span>
      <div className="calc-body">
        <label className="input-label" htmlFor="credit-sum">
          <span>Credit Sum</span>
          <input
            className="credit-sum"
            id="credit-sum"
            value={creditSum}
            type="number"
            onChange={handleChange("creditSum")}
          />
        </label>
        <label className="input-label" htmlFor="credit-procent">
          <span>Credit Procent (per month) </span>
          <input
            className="credit-procent"
            id="credit-procent"
            value={creditProcent}
            type="number"
            onChange={handleChange("creditProcent")}
          />
        </label>
        <label className="input-label" htmlFor="credit-period">
          <span>Credit Period</span>
          <input
            className="credit-period"
            id="credit-period"
            value={creditPeriod}
            type="number"
            onChange={handleChange("creditPeriod")}
          />
        </label>
        <label className="input-label" htmlFor="mounthly-payment">
          <span>Mounthly Payment</span>
          <input
            className="mounthly-payment"
            id="mounthly-payment"
            value={mounthlyPayment}
            type="number"
            onChange={() => {}}
          />
        </label>
      </div>
    </div>
  );
};
