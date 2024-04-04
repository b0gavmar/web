var ownedCatAndDog = function(catYears, dogYears) {
  let catYearsHuman = 0;
  let dogYearsHuman = 0;
  
  function YearCount(x,y1,y2,y3){
    let a = 0;
    if(x >= y1){
        a+=1;
        x-=y1;
      }
    if(x>=y2 && a==1){
        a+=1;
        x-=y2;
        while(x>=y3){
          a+=1;
          x-=y3;
        }
    }
    return a;
  }
  
  return [YearCount(catYears,15,9,4),YearCount(dogYears,15,9,5)];
}
