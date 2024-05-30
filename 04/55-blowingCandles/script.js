function blowCandles(str) {
  let blows = 0
  const arr = [...str]
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= 0) continue
    
    blows += 1
    
    arr[i] -= 1
    if (arr[i + 1]) arr[i + 1] -= 1
    if (arr[i + 2]) arr[i + 2] -= 1
    
    i -= 1
  }
  
  return blows  
}