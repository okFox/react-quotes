import React from 'react';
import QuoteFetcher from '../containers/QuoteFetcher';
import { QuoteAppFn } from './QuoteApp';

export default function App() {

  return (
    <>
      <QuoteFetcher />
      <QuoteAppFn />
    </>
  );
}
