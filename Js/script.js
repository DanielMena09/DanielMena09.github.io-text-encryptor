let imageEmpty = document.getElementById('img-empty');
let messageEmpty1 = document.getElementById('message1-empty');
let messageEmpty2 = document.getElementById('message2-empty');
let displayMessage = document.getElementById('display-message');

// ------------------------------------- Handlers -------------------------------------
function clearData() {
    messageEmpty1.style.display = "none";
    messageEmpty2.style.display = 'none';
}

function AlertMessages(message) {
    let regExp = /[A-ZÁ-Úá-ú´']/;
    if (message == '') {
        Swal.fire({
            title: 'Warning!',
            text: 'You didn\'t enter any message!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return "true";
    } else if (regExp.test(message)) {
        Swal.fire({
            title: 'Incorrect characters found!',
            text: "Please, only lowercase letters and no accents",
            icon: 'warning',
            confirmButtonText: 'OK'
        });
        return "true";
    } else {
            return "false";
    }
}

// ---------------------------------- Encrypt / Decrypt -------------------------------

function encryptString(message) {
    let encrypted = "";
    const a = "ai";
    const e = "enter";
    const i = "imes";
    const o = "ober";
    const u = "ufat";
    message.split('').forEach(element => {
        char = element;
        if (element == 'a') { char = element.replace('a', a) };
        if (element == 'e') { char = element.replace('e', e) };
        if (element == 'i') { char = element.replace('i', i) };
        if (element == 'o') { char = element.replace('o', o) };
        if (element == 'u') { char = element.replace('u', u) };
        encrypted = encrypted + char;
    });
    return encrypted;
}

function decryptString(message) {
    decrypted = message;
    decrypted = decrypted.replaceAll("ai", "a");
    decrypted = decrypted.replaceAll("enter", "e");
    decrypted = decrypted.replaceAll("imes", "i");
    decrypted = decrypted.replaceAll("ober", "o");
    decrypted = decrypted.replaceAll("ufat", "u");

    return decrypted;
}

// --------------------------------------- Buttons ------------------------------------
function encryptButton() {
    let encMessage = "";
    encMessage = document.getElementById("user-message").value;
    console.log(AlertMessages(encMessage));
    if (AlertMessages(encMessage) == "false") {
        displayMessage.innerText = encryptString(encMessage);
        clearData();
    
    }

    var button = document.querySelector('.btn');
button.classList.add('pulse-effect');
setTimeout(function() {
  button.classList.remove('pulse-effect');
}, 2000); 

}



function decryptButton() {
    let decMessage = "";
    decMessage = document.getElementById("user-message").value;
    if (AlertMessages(decMessage) == "false") {
        displayMessage.innerText = decryptString(decMessage);
        clearData();
    }

    var button = document.querySelector('.btn-grey');
    button.classList.add('pulse-effect');
    setTimeout(function() {
      button.classList.remove('pulse-effect');
    }, 2000); 


}

function clearButton() {
    document.getElementById("user-message").value = "";
    displayMessage.innerText = "";
    messageEmpty1.style.display = 'block';
    messageEmpty2.style.display = 'block';

        var button = document.querySelector('.btn-clean');
        button.classList.add('pulse-effect');
        setTimeout(function() {
          button.classList.remove('pulse-effect');
        }, 2000);  
}

function copyButton() {
    let copyMessage = "";
    copyMessage = document.getElementById("display-message").innerText;
    console.log(copyMessage);
    if (AlertMessages(copyMessage) == "false") {
        document.getElementById("user-message").value = "";
        document.getElementById("user-message").value = copyMessage;
    }

    var button = document.querySelector('.btn-copy');
    button.classList.add('pulse-effect');
    setTimeout(function() {
      button.classList.remove('pulse-effect');
    }, 2000); 
}


