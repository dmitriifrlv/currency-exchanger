import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencyRow from './Components/CurrencyRow/CurrencyRow';
import Link from './Components/CurrencyRow/Link'

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(0);
  const [amount, setAmount] = useState(1)
  const [amountOfOriginalCurrency, setAmountOfOriginalCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState()
  const [text, setText] = useState('');
 

  let toAmount, fromAmount
    if (amountOfOriginalCurrency) {
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else {
      toAmount = amount;
      fromAmount = amount / exchangeRate;
    }

  useEffect(()=>{
    fetch ('https://api.exchangeratesapi.io/latest')
    .then(response=>response.json())
    .then(data=>{
      const firstCurrency = Object.keys(data.rates)[0]
      console.log(data)
      setCurrencies([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
}, [])

useEffect(() => {
  if (fromCurrency && toCurrency) {
    fetch(`${'https://api.exchangeratesapi.io/latest'}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(res=>res.json())
    .then(data=>setExchangeRate(Number.parseFloat((data.rates[toCurrency])).toPrecision(3)))
  }
}, [fromCurrency, toCurrency])

// useEffect(() => {
//   setText(`${fromAmount}${fromCurrency} equals to ${toAmount}${toCurrency} as of ${Date()} according to the rate published by the`)
// }, [fromAmount, toAmount, fromCurrency, toCurrency])

function handleFromAmountChange(e) {
  setAmount(e.target.value)
  setAmountOfOriginalCurrency(true)
} 

function handleToAmountChange(e) {
  setAmount(e.target.value)
  setAmountOfOriginalCurrency(false)
} 

const a = document.querySelector('#text')
// const onButtonSubmit = () => {
//   setText(`${fromAmount}${fromCurrency} equals to ${toAmount}${toCurrency} as of ${Date()} according to the rate published by the`)
// }

const onButtonSubmit = () => {
  a.style.display = "block";
}

useEffect(() => {
  setText(`${fromAmount}${fromCurrency} equals to ${toAmount}${toCurrency} as of ${Date()} according to the rate published by the`)
}, [fromAmount, toAmount, fromCurrency, toCurrency])


if (Object.values({text}).toString()==="") {
  return (
    <div className="Card">
      <h1>Currency Converter</h1>
        <div className="row">
          <p className="label">Convert</p>
          <CurrencyRow 
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            amount={fromAmount}
            onChangeAmount = {handleFromAmountChange}
            className="CurrencyRow"/>
        </div>

        <div className="row">
          <p>To</p>
        <CurrencyRow 
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount = {handleToAmountChange}/>
        </div>
        <div className="sec-row">
        </div>

        <div className="row">
        <p id="exch">
          Exchange Rate:
        </p>
         <div>
          <input 
            type="number" 
            id="exchange-rate"
            value={exchangeRate}
          ></input>
         </div>
        </div>

      <button
      type="submit"
      onClick={onButtonSubmit}
      >Exchange</button>

      <p id="text">
        {text}
      </p>
    </div>
  );  
} else {
  return (
    <div className="Card">
      <h1>Currency Converter</h1>
        <div className="row">
          <p className="label">Convert</p>
          <CurrencyRow 
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            amount={fromAmount}
            onChangeAmount = {handleFromAmountChange}
            className="CurrencyRow"/>
        </div>

        <div className="row">
          <p>To</p>
        <CurrencyRow 
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount = {handleToAmountChange}/>
        </div>
        <div className="sec-row">
        </div>

        <div className="row">
        <p id="exch">
          Exchange Rate:
        </p>
         <div>
          <input 
            type="number" 
            id="exchange-rate"
            value={exchangeRate}
          ></input>
         </div>
        </div>

      <button
      type="submit"
      onClick={onButtonSubmit}
      >Exchange</button>

      <p id="text">
        {text} <Link/>.
      </p>
    </div>
  );
}
  
}

export default App;