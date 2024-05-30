function convertHashToArray(hash){
  let keys = Object.keys(hash).sort();
  return keys.map(e => [e,hash[e]]);
}
