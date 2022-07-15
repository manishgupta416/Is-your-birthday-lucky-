
const dateOfBirth = document.querySelector("#input-date")
const luckyNumber = document.querySelector("#input-number")
const showOutput = document.querySelector(".output")
const btnCheck = document.querySelector("#check-btn")

// console.log(dateOfBirth ,luckyNumber , showOutput)

btnCheck.addEventListener('click' ,  checkBirthdayDateIsLucky)

function checkBirthdayDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob)
    console.log(sum)
    if(sum && dob ) {
        compareValues(sum , luckyNumber.value)
    }else{
        showOutput.innerText="Please Enter both fields"
    }
   
}

function compareValues(sum , luckyNumber) {
    if(sum && luckyNumber) {
        if(sum % luckyNumber == 0) {
            showOutput.innerText = "your birthday is lucky 🥳🚀"
        } else{
            showOutput.innerText = "your birthday is not lucky😕"
        }
    } 
    else{
        showOutput.innerText="Please Enter both fields"
    }
    
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","")
    let sum=0;

    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i))
        
    }
    return sum;
}
