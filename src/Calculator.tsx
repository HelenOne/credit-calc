import * as React from "react";

export const Calculator = () => {
  const [creditSum, setCreditSum] = React.useState("");
  const [creditpercent, setCreditPercent] = React.useState("");
  const [creditPeriod, setCreditPeriod] = React.useState("");
  const [mounthlyPayment, setMounthlyPayment] = React.useState("");

  const [annuityRate, setAnnuityRate] = React.useState(0);

  const handleCreditSumChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreditSum(event.target.value);
      setMounthlyPayment(
        !Number.isNaN(annuityRate)
          ? (annuityRate * parseInt(event.target.value, 10)).toFixed(2)
          : ""
      );
    },
    [annuityRate]
  );

  const handleCreditPercent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreditPercent(event.target.value);
      const percent = parseInt(event.target.value, 10);
      const period = parseInt(creditPeriod, 10);
      const annuityRateValue =
        ((percent / 100) * (1 + percent / 100) ** period) /
        ((1 + percent / 100) ** period - 1);
      setAnnuityRate(annuityRateValue);
      const mounthlyPaymentValue = annuityRateValue * parseInt(creditSum, 10);

      setMounthlyPayment(
        !Number.isNaN(mounthlyPaymentValue)
          ? mounthlyPaymentValue.toFixed(2)
          : ""
      );
    },
    [creditPeriod, creditSum]
  );

  const handleCreditPeriod = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreditPeriod(event.target.value);
      const percent = parseInt(creditpercent, 10);
      const period = parseInt(event.target.value, 10);
      const annuityRateValue =
        ((percent / 100) * (1 + percent / 100) ** period) /
        ((1 + percent / 100) ** period - 1);
      setAnnuityRate(annuityRateValue);
      const mounthlyPaymentValue = annuityRateValue * parseInt(creditSum, 10);

      setMounthlyPayment(
        !Number.isNaN(mounthlyPaymentValue)
          ? mounthlyPaymentValue.toFixed(2)
          : ""
      );
    },
    [creditSum, creditpercent]
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
            onChange={handleCreditSumChange}
          />
        </label>
        <label className="input-label" htmlFor="credit-percent">
          <span>Credit Percent (per month) </span>
          <input
            className="credit-percent"
            id="credit-percent"
            value={creditpercent}
            type="number"
            onChange={handleCreditPercent}
          />
        </label>
        <label className="input-label" htmlFor="credit-period">
          <span>Credit Period</span>
          <input
            className="credit-period"
            id="credit-period"
            value={creditPeriod}
            type="number"
            onChange={handleCreditPeriod}
          />
        </label>
        <div className="mounthly-payment">
          <span>Mounthly Payment</span>
          <span>{mounthlyPayment || "0.00"}</span>
        </div>
      </div>
    </div>
  );
};
