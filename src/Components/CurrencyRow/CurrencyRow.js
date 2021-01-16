import React from 'react'

export default function currencyRow(props) {
    const { currencies, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props;
    return (
        <div>
          <input 
          type="number" 
          value ={amount}
          onChange={onChangeAmount}/>
          <select 
          value={selectedCurrency}
          onChange={onChangeCurrency}>
              {currencies.map(option => (
                  <option key={option} value={option}>{option}</option>
              ))}   
          </select>
        </div>
    )
}
