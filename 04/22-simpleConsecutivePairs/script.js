function pairs(ar){
    let c = 0;
    for(let i = 1; i < ar.length; i += 2){
      if(Math.abs(ar[i-1]-ar[i]) == 1){
        c++;
      }
    }
    return c;
  };