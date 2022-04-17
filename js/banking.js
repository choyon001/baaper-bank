document.getElementById('deposit-button').addEventListener('click',function(){
    const currentDepositId = document.getElementById('user-deposit');
    const currentDepositText = currentDepositId.value;
    const currentDepositAmount = parseFloat(currentDepositText);
    
    // ====previous deposite==

    const previousDepositeId = document.getElementById('update-deposite');
    const previousDepositeText = previousDepositeId.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    // ==== update deposite amount 
    const updateAmount = currentDepositAmount + previousDepositeAmount;
    previousDepositeId.innerText = updateAmount;
    currentDepositId.value ='';

    // *** Balence ***
    const balanceId = document.getElementById('user-balance');
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);
    // *** update Balance 
    const updateBalanceAmount = balanceAmount + currentDepositAmount;
    balanceId.innerText = updateBalanceAmount;
    
})


// ============= Withdraw part =============

document.getElementById('withdraw-button').addEventListener('click',function(){
    const currentWithdrawId = document.getElementById('user-withdraw');
    const currentWithdrawText = currentWithdrawId.value;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);
    
    // ** previous withdraw
    const previousWithdrawId = document.getElementById('update-withdraw');
    const previousWithdrawText = previousWithdrawId.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    // *** update withdraw **
    const updateWithdraw = currentWithdrawAmount + previousWithdrawAmount;
    previousWithdrawId.innerText = updateWithdraw;
    currentWithdrawId.value = '';

    // ** withdraw balence update 
    const balanceId = document.getElementById('user-balance');
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);

    // *** update Balance 
    const updateBalanceAmount = balanceAmount - currentWithdrawAmount;
    balanceId.innerText = updateBalanceAmount;
})