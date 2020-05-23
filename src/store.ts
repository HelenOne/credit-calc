import { observable } from 'mobx';

export const store = observable({
  creditSum: '',
  creditPercent: '',
  creditPeriod: '',
  get mounthlyPayment() {
    const percent = parseInt(this.creditPercent, 10) / (100 * 12);
    const period = parseInt(this.creditPeriod, 10);
    const annuityRateValue = percent + percent / ((1 + percent) ** period - 1);

    const mounthlyPaymentValue =
      annuityRateValue * parseInt(this.creditSum, 10);

    return !Number.isNaN(mounthlyPaymentValue)
      ? mounthlyPaymentValue.toFixed(2)
      : '';
  }
});
