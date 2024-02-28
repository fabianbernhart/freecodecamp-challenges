function checkValidPhoneNumber(event) {
    console.log(event)

    let inputElementValue = document.getElementById('user-input').value

    if (inputElementValue.length == 0) {
        alert('Please provide a phone number')
    }
    event.preventDefault()

    return false
}
