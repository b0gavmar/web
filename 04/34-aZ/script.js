function gimmeTheLetters(sp) {
  let a = ""
  for(let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) a += String.fromCharCode(i)
  return a
}