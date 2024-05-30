function eachCons(array, n) {
  let t = [];
  for(let i=0;i<array.length-(n-1);i++){
    t.push(array.slice(i,i+n));
  }
	return t;
}