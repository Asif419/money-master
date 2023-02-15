function getValueFromInputFieldById(inputId) {
    const inputFieldString = document.getElementById(inputId);
    if (inputFieldString.value == '') {
        alert(`write in ${inputId} filed`);
    }
    let inputFieldNumber = parseFloat(inputFieldString.value);
    if (inputFieldNumber < 0){
        alert('please do not write negative number');
        inputFieldString.value = '';
    }
    return inputFieldNumber;
}

function getValueFromElementById(inputId) {
    const ElementFieldString = document.getElementById(inputId);
    const ElementFieldNumber = parseFloat(ElementFieldString.innerText).toFixed(2);
    return ElementFieldNumber;
}

function setValueInElementById(inputId, newValue) {
    const ElementFieldString = document.getElementById(inputId);
    ElementFieldString.innerText = newValue;
}

function getExpenses() {
    //get value
    const preIncome = getValueFromInputFieldById('income');
    const preFoodExpense = getValueFromInputFieldById('food');
    const preRentExpense = getValueFromInputFieldById('rent');
    const preClothesExpense = getValueFromInputFieldById('clothes');

    //calculatoin
    let currentTotalExpenses = preFoodExpense + preRentExpense + preClothesExpense;

    return currentTotalExpenses;
}

function getBalance() {
    //get value
    const preIncome = getValueFromInputFieldById('income');


    //calculatoin
    const currentTotalExpenses = getExpenses();
    let currentBalance = preIncome - currentTotalExpenses;

    return currentBalance;
}