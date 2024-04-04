/*var calc = function(a) {
  let sum = 0;
  
  for(let i = 0; i < a.length; i++){
    if(a[i] > 0){
      a[i] = Math.pow(a[i],2);
      console.log(a[i]);
    }
    if(i+1%3 == 0){
      a[i] = a[i]*3;
      console.log(a[i]);
    }
    if(i+1%5 == 0){
      a[i] = a[i]*-1;
      console.log(a[i]);
    }
    sum+=a[i];
  }
  
  console.log(a);
  return sum;
}*/

function calc(a) {
  return a.reduce((a, b, i) => {
      if (b > 0) b *= b;
      if ((i + 1) % 3 === 0) b *= 3;
      if ((i + 1) % 5 === 0) b *= -1;
      return a + b;
    }, 0);
}
