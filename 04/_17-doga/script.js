//AllOrNothing
function possiblyPerfect(key,answers) {
    let bad = 0;
    let good = 0;
    for(let i = 0;i < key.length; i++){
        if(key[i] == "_"){
        
        }
        else if(key[i] == answers[i]){
            good= good+1;
        }
        else{
            bad = bad+1;
        }
    }
    
    if((bad == 0) || (good ==0)){
        return true;
    }
    else{
        return false;
    }
}



console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    
        let mean = 0;
        let ossz = 0;
        let half = 0;
        let median = 0;
        
        numbers.sort(function( a , b ){return ( a - b ) });
        numbers.forEach(number => {
            ossz+=number;
        });

        mean = ossz/numbers.length;
        half = Math.floor(numbers.length / 2)
        
        if(numbers.length % 2 == 0){
            let a = 0;
            let b = 0;

            a = numbers[half]; 
            b = numbers[half-1];
            median = (a+b)/2
        }
        else{
            median = numbers[half];
        }
        

        if(mean > median){
            return("mean");
        }
        else if(median > mean){
            return("median");
        }
        else{
            return("same");
        }
    
    
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    let ht = Math.floor(arr.length / 2);
    let head = arr.splice(0,ht);
    let tail = arr.splice(arr.length-ht, ht);
    arr.unshift(...tail);
    arr.push(...head);
    return arr;
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
