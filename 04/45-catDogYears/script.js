var humanYearsCatYearsDogYears = function(humanYears) {
  let dogYrs = 0;
  let catYrs =0;
  for(let i = 1; i <= humanYears; i++){
    if(i==1){
      dogYrs += 15; 
      catYrs += 15;
    }
    else if(i==2){
      dogYrs += 9;
      catYrs += 9;
    }
    else{
      dogYrs += 5;
      catYrs += 4;
    }
  }
  
  return [humanYears,catYrs,dogYrs];
}
