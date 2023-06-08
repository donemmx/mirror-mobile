/* tslint:disable */
/* eslint-disable */
export interface PricePlan {
  currency: 'NGN' | 'EUR' | 'USD' | 'GBP' | 'JPY' | 'ZAR' | 'CNY';
  discount: number;
  exchangeRate?: number;
  planName: string;
  planType: 'free' | 'one time payment';
  price: number;
  tax: number;
}
