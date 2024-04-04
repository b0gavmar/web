function mineLocation(field){
  console.log(field[0][0]);
  let t;
  for(let i=0;i<field.length;i++){
      for(let j=0;j<field[0].length;j++){
         if(field[i][j] == 1){
           t =[i,j];
         }
      }
  }
  return t;
}