function diff(a,b) {
  a = new Set(a);
  b = new Set(b);
  a.forEach( v => b.delete(v) && a.delete(v) );
  b.forEach( v => a.delete(v) && b.delete(v) );
  return [...a,...b].sort();
}