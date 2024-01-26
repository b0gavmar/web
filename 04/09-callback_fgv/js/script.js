function addition (operand1, operand2){
    return operand1 + operand2;
}

function substraction (operand1, operand2){
    return operand1 - operand2;
}

function multiplication (operand1, operand2){
    return operand1 * operand2;
}

function division (operand1, operand2){
    return operand1 / operand2;
}

function calculation (operation,operand1, operand2){
    return operation(operand1,operand2);
}


//---------------------------------------
let result = calculation(addition, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = calculation(substraction, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result =  calculation(multiplication, 4, 6);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result =  calculation(division, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);


