function middleMe(N, X, Y){
  if(N%2!=0){
    return X; 
  }
  else{
    let ans = "";
    for(let i=0;i<(N/2);i++){
      ans+=Y;
    }
    ans+=X;
    for(let i=0;i<(N/2);i++){
      ans+=Y;
    }
    return ans;
  }
}