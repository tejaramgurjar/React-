import { useEffect, useState } from "react";

// costom hook me bhi hm useState or useeffect,usestate  agera ko kaam le skte 

function useCurrencyInfo(currency) {

const [data,setData]=useState({})
//usesate me hm ek eamty object daal dete thaki kooi fetch call na bhi aaye toh bhi km se km ek eamty object hai jis par loop bhi lgayenge toh crash toh nhi hoga


    // useEffect(setup(callback), dependencies?)

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //then me call back aayega or call back me ek response aaya h or usko hm json me convert krenge
        .then((res)=>res.json())
//ab hmrara response then me json me convert hokar aaya hai or hm es data ko hold krenge lekin ek regular variable me nhi wrna UI me koi upadate nhi hoga toh uske liye ham ek useState bna lenge
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])

    //naa toh data return kr paa rhe na setdata or set data return krnge toh data ka access nhi rhega toh ab [data.setData] dono ko bhi ek sath return kar skte hai lekin phir currency ka mtlb nhi rhega 

    // console.log(data)
    return data  //mtbl kabhi deta ko set hee nhi kar payenge na kabhi data ko currence kr payenge lekin eassa nhi hoga eske liye hm ek functionlity use krte hai or es ke wjh se hee hm ese custom hooks khte hai '
}

export default useCurrencyInfo