function repeats(arr) {
  let t = [];
  arr.forEach(x => t.includes(x) ? t.splice(t.indexOf(x),1) : t.push(x))
  return t.reduce((sum,num) => sum+num, 0)
}