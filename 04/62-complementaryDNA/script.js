function dnaStrand(dna){
  let ans = "";
  let t = dna.split("");
  t.forEach(x => {
    if(x=="A"){
      ans+="T";
    }
    else if(x=="T"){
      ans+="A";
    }
    else if(x=="C"){
      ans+="G";
    }
    else{
      ans+="C";
    }
  });
  return ans;
}