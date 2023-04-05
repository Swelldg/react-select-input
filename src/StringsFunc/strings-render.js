import React from "react";

const stringsRender = (srcstr,arr,len) => {
    let res;
    res = <span>{srcstr.slice(0,arr[0])}</span>;
    for(let i=0;i<arr.length;i++){
        let temp = srcstr.slice(arr[i],arr[i]+len);
        res =  [res,<span style={{background:'#FDF7D2'}}>{temp}</span>];
        res = [res,<span>{(i === arr.length-1 ? srcstr.slice(arr[i]+len,srcstr.length) :srcstr.slice(arr[i]+len,arr[i+1]))}</span>];
    }
    return res;
}

export default stringsRender;