import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencyRow from './Components/CurrencyRow/CurrencyRow'

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
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

function handleFromAmountChange(e) {
  setAmount(e.target.value)
  setAmountOfOriginalCurrency(true)
} 

function handleToAmountChange(e) {
  setAmount(e.target.value)
  setAmountOfOriginalCurrency(false)
} 

let money = Number.parseFloat(toAmount).toPrecision(3)

const onButtonSubmit = () => {
  setText(`Your ${fromAmount}${fromCurrency} is equall to ${money}${toCurrency} as of ${Date()}`)
}
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
        {/* to
        <CurrencySelector 
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        /> */}
        </div>
  
        
        <div className="row">
          <p>To</p>
        <CurrencyRow 
        currencies={currencies}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount = {handleFromAmountChange}/>
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
}

export default App;