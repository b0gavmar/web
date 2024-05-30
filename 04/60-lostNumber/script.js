function findDeletedNumber(arr, mixArr) {
  mixArr.forEach(num => {
    arr.splice(arr.indexOf(num),1);
  });
  return arr[0]==undefined ? 0 : arr[0];
}