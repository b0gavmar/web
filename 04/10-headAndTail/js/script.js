function swapHeadAndTail(arr) {
    let ht = Math.floor(arr.length/2);
    let head = arr.splice(0,ht);
    //console.log(head);
    let tail = arr.splice(arr.length-ht,ht);
    arr.unshift(...tail);
    arr.push(...head);
    /*console.log(...arr);
    console.log("-------");*/
    return arr;
}


console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ] ), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
