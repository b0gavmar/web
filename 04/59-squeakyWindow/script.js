function sliding(nums, k) {
  var arr=[];
  if (k<0)
    return arr;
  for (var i=0; i<=nums.length-k; ++i)
  {
    var max=-Infinity;
    for (var j=i; j<i+k; ++j)
      if (nums[j]>max)
        max=nums[j];
    arr.push(max);
  }
  return arr;
}