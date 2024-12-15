import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    //amount change hone ke liye onchange liye or ab es onchange ko kese use kru kee mere components se sbko  ptta chal jaye toh eske liye ek event fire kr ke ek mathod ko call kr skte hai 
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            // value baar baar reapeat hoti hai toh performence react me bohat heat hoti hai ,khi wo dom baar baar toh nhi bnmaya ja rha esliye esko rokne ke liye key ka use krte hai (jab bhi hmloop lgayenge jsx me q kee jsm se hee hmare dom elements bn rhe hai )
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                        {/* performence lani hai loop ke andar toh key ka use krna hee pdega */}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;