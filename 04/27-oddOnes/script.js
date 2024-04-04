function oddOnesOut(nums) {
  var t3=[];

  for (var i=0; i<nums.length; ++i){
    var a=0;

    for (var j=0; j<nums.length; ++j){
      if (nums[i]==nums[j]){
        a++;
      }
    }

    if (a%2==0){
      t3.push(nums[i]);
    }
      
  }

  return t3;
}