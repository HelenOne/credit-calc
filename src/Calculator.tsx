import * as React from "react";

export const Calculator = () => {
  const [creditSum, setCreditSum] = React.useState("");
  const [creditPercent, setcreditPercent] = React.useState("");
  const [creditPeriod, setCreditPeriod] = React.useState("");
  // const [mounthlyPayment, setMounthlyPayment] = React.useState("");

  const mounthlyPayment = React.useMemo(() => {
    const percent = parseInt(creditPercent, 10) / (100 * 12);
    const period = parseInt(creditPeriod, 10);
    const annuityRateValue = percent + percent / ((1 + percent) ** period - 1);

    const mounthlyPaymentValue = annuityRateValue * parseInt(creditSum, 10);
    return !Number.isNaN(mounthlyPaymentValue)
      ? mounthlyPaymentValue.toFixed(2)
      : "";
  }, [creditPercent, creditPeriod, creditSum]);

  const handleCreditSum = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreditSum(event.target.value);
    },
    []
  );

  const handlecreditPercent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setcreditPercent(event.target.value);
    },
    []
  );

  const handleCreditPeriod = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCreditPeriod(event.target.value);
    },
    []
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
            onChange={handleCreditSum}
          />
        </label>
        <label className="input-label" htmlFor="credit-percent">
          <span>Credit Percent (per month) </span>
          <input
            className="credit-percent"
            id="credit-percent"
            value={creditPercent}
            type="number"
            onChange={handlecreditPercent}
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
