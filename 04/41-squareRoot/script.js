function squareOrSquareRoot(array) {
  let t = [];
  array.forEach(x => Math.sqrt(x,2)%1 == 0 ? t.push(Math.sqrt(x,2)) : t.push(Math.pow(x,2)));
  return t;
}