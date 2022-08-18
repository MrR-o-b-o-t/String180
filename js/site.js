//Get the string from page
function getValue() {
    document.getElementById("alert").classList.add("invisible")
    let userString = document.getElementById("userString").value
    let reversedString = reverseString(userString)
    displayString(reversedString)
}


//Reverse the string

function reverseString(userString) {
    let reversedString = []
    for (let i = userString.length -1; i >= 0; i--) {
        reversedString += userString[i]
    }

    return reversedString
}


//Display message and string

function displayString(reversedString) {
document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`
document.getElementById("alert").classList.remove("invisible")
}