function getAverage(marks){
    let osszeg = 0;
    for(let i = 0;i<marks.length;i++){
      osszeg += marks[i];
    }
    return Math.floor(osszeg/marks.length);
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);