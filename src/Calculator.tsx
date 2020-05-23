import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { store } from './store';

export const Calculator = () => {
  const mounthlyPayment = useObserver(() => store.mounthlyPayment);
  const creditSum = useObserver(() => store.creditSum);
  const creditPercent = useObserver(() => store.creditPercent);
  const creditPeriod = useObserver(() => store.creditPeriod);

  const handleCreditSum = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      store.creditSum = event.target.value;
    },
    []
  );

  const handlecreditPercent = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      store.creditPercent = event.target.value;
    },
    []
  );

  const handleCreditPeriod = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      store.creditPeriod = event.target.value;
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
            className="field credit-sum"
            id="credit-sum"
            value={creditSum}
            type="number"
            onChange={handleCreditSum}
          />
        </label>
        <label className="input-label" htmlFor="credit-percent">
          <span>Credit Percent (per month) </span>
          <input
            className="field credit-percent"
            id="credit-percent"
            value={creditPercent}
            type="number"
            onChange={handlecreditPercent}
          />
        </label>
        <label className="input-label" htmlFor="credit-period">
          <span>Credit Period</span>
          <input
            className="field credit-period"
            id="credit-period"
            value={creditPeriod}
            type="number"
            onChange={handleCreditPeriod}
          />
        </label>
        <div className="mounthly-payment">
          <span>Mounthly Payment</span>
          <span>{mounthlyPayment || '0.00'}</span>
        </div>
      </div>
    </div>
  );
};
