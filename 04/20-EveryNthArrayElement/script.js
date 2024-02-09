function every(arr, interval, start){
    let t = [];
    
    for(let i = start || 0; i < arr.length; i += interval || 1){
      t.push(arr[i]);
    }
    
    return t;
}