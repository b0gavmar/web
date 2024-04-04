function squareUp(n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    for (var j = n; j > 0; j--) {
      arr.push(j <= i ? j : 0);
    }
  }
  return arr;
}