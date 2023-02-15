document.getElementById('btn-calculate').addEventListener('click', function () {
   
    const currentTotalExpenses = getExpenses();
    const currentBalance = getBalance();

    //logic
    if(currentBalance < 0) {
        alert('Your expensess should be less than your income');
        return;
    }

    //set value
    setValueInElementById('total-expenses', (currentTotalExpenses).toFixed(2));
    setValueInElementById('total-balance', (currentBalance).toFixed(2));
})

document.getElementById('btn-save').addEventListener('click', function () {
    //get value
    const preSave = getValueFromInputFieldById('save');
    const preIncome = getValueFromInputFieldById('income');
    const preBalance = getBalance();

     //calculation
     let savingAmount = preIncome * (preSave / 100);

    //logic
    if (preSave > 100) {
        alert("please enter less than 100");
        return;
    }
    if (savingAmount > preBalance) {
        alert("saving amount can not be larger than remaining balance");
        return;
    }
    
    //set value
    setValueInElementById('saving-amount', savingAmount);

    let currentBalance = preBalance - savingAmount;
    currentBalance = (currentBalance).toFixed(2);
    setValueInElementById('remaining-balance', currentBalance);
})