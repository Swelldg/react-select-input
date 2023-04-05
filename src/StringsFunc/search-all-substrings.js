const searchAllSub = (srcstr,substr) => {
    let p=0,res=[];
    for(let i = 0;i < srcstr.length;i++){
        if(srcstr[i] === substr[p]){
            if(p === substr.length-1){
                res.push(i-p);
                p=0;
            }else{
                p++;
            }
        }else{
            if(p!==0)i--;
            p=0;
        }
    }
    return res;
}

export default searchAllSub;