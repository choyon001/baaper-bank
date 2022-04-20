function getInputValue(nameOfId){
    const currentId = document.getElementById(nameOfId);
    const currentText = currentId.value;
    const currentAmount = parseFloat(currentText);
    currentId.value ='';
    return currentAmount;
}

function updateAmount(updateId,currentAmount){
    const previousId = document.getElementById(updateId);
    const previousText = previousId.innerText;
    const previousAmount = parseFloat(previousText);
    // ==== update deposite amount 
    const updateAmount = currentAmount + previousAmount;
    previousId.innerText = updateAmount;
}


function updateBalance(currentAmount,isTrue){
    const balanceId = document.getElementById('user-balance');
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);
    if(isTrue == true){
        const updateBalanceAmount = balanceAmount + currentAmount;
    balanceId.innerText = updateBalanceAmount;
    }
    else{
        const updateBalanceAmount = balanceAmount - currentAmount;
    balanceId.innerText = updateBalanceAmount;
    }
    
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const currentDepositAmount = getInputValue('user-deposit');
    // *** UPDATE AMMOUNT ***
    if(currentDepositAmount>0){
        updateAmount('update-deposite',currentDepositAmount);
    updateBalance(currentDepositAmount,true);
    }
    
})


// ============= Withdraw part =============

document.getElementById('withdraw-button').addEventListener('click',function(){
    const balanceId = document.getElementById('user-balance');
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);
    const currentWithdrawAmount = getInputValue('user-withdraw');
    if(currentWithdrawAmount>0 && currentWithdrawAmount< balanceAmount){
        
    // *** update withdraw **
    updateAmount('update-withdraw',currentWithdrawAmount);

    // ** withdraw balence update 
    updateBalance(currentWithdrawAmount,false);
    }
    if(currentWithdrawAmount>balanceAmount){
        alert("you don't have sufficient balance to withdraw");
    }
})