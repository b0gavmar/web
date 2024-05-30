function deEmojify(emojiString) {
  console.log(emojiString)
  if(!emojiString){return ''}
  let val =[':)',':D','>(','>:C',':/',':|',':O',';)','^.^',':(']
  return emojiString.split("  ").map(e=>e.split(" ")
  .map(e=>String(val.indexOf(e))).join(""))
  .map(e=>String.fromCharCode(+e))
  .join("")
}