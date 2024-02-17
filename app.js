function encryptFromTextarea() {
    let phrase = document.getElementById("encryptedText").value;
    let encryptedText = encrypt(phrase);
    let divHide = document.querySelector(".hideAhead");
    divHide.style.display = 'none'; // Oculta el div con clase "hideAhead"

    let answer = document.querySelector(".answer");
    answer.style.display = 'block';
    let textarea = document.getElementById("decryptedText");
    textarea.style.display = 'block'; 
    textarea.innerHTML = encryptedText; //se mostrará el texto que halla encriptado o desencriptado
}

function decryptFromTextarea() {
    let encryptedPhrase = document.getElementById("encryptedText").value;
    let textDecrypted = decrypt(encryptedPhrase);
    document.getElementById("decryptedText").innerHTML = textDecrypted; 
}

document.getElementById("btnEncrypted").onclick = encryptFromTextarea;
document.getElementById("btnDecrypted").onclick = decryptFromTextarea;
document.getElementById("btnCopy").onclick = copyTextarea;

function encrypt(message) {
    let text = message;
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            encryptedText = encryptedText + "ai";
        } else if (text[i] == "e") {
            encryptedText = encryptedText + "enter";
        } else if (text[i] == "i") {
            encryptedText = encryptedText + "imes";
        } else if (text[i] == "o") {
            encryptedText = encryptedText + "ober";
        } else if (text[i] == "u") {
            encryptedText = encryptedText + "ufat";
        } else {
            encryptedText = encryptedText + text[i];
        }
    }
    return encryptedText;
}

function decrypt(message) {
    let text = message;
    let textDecrypted = "";

    for(let i = 0; i < text.length; i++) {
        if(text[i] == "a" ) {
            textDecrypted = textDecrypted + "a" 
            i = i + 1;
        }
        else if(text[i] == "e" ) {
            textDecrypted = textDecrypted + "e" 
            i = i + 4;
        }
        else if(text[i] == "i" ) {
            textDecrypted = textDecrypted + "i" 
            i = i + 3;
        }
        else if(text[i] == "o" ) {
            textDecrypted = textDecrypted + "o" 
            i = i + 3;
        }
        else if(text[i] == "u" ) {
            textDecrypted = textDecrypted + "u" 
            i = i + 3;
        }
        else {
            textDecrypted = textDecrypted + text[i];
        }
    }
    return textDecrypted;
 }

async function copyTextarea() {
    let textarea = document.getElementById("decryptedText");
    let button = document.getElementById("btnCopy");

    try {
        await navigator.clipboard.writeText(textarea.value)
        console.log('Texto copiado')
      } catch (err) {
        console.error('Error al copiar:', err)
      }

    button.innerText = 'Copiado';
 }
