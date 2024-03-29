var func = function(item){
    return item%2==0 ? true : false;
}

function map(arr, somefunction){
    if(typeof somefunction != 'function'){
      return 'given argument is not a function';
    }
    else if(arr.some((a) => isNaN(a))){
      return 'array should contain only numbers';
    }
    else{
      let arr2 = [];
      arr.forEach((elem) => arr2.push(somefunction(elem)));
      return arr2;     
    }
}