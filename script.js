function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

var textArea = document.querySelector('.texto_botones textarea');
var translatedDiv = document.querySelector('.traducido');
var translatedTextarea = document.querySelector('.traducido textarea');
var translatedImage = translatedDiv.querySelector('img');
var originalTranslatedContent = translatedDiv.innerHTML;

document.querySelector('.texto_botones button:first-child').addEventListener('click', function() {
    var text = textArea.value;

    if (text === "") {
        translatedDiv.innerHTML = originalTranslatedContent;
    } else {
        var encryptedText = encrypt(text);
        translatedTextarea.value = encryptedText;
        translatedImage.style.display = "none";
    }
});

document.querySelector('.texto_botones button:last-child').addEventListener('click', function() {
    var text = translatedTextarea.value;

    if (text === "") {
        translatedDiv.innerHTML = originalTranslatedContent;
    } else {
        var decryptedText = decrypt(text);
        translatedTextarea.value = decryptedText;
        translatedImage.style.display = "none";
    }
});

document.querySelector('.traducido-button').addEventListener('click', function() {
    var text = translatedTextarea.value;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Texto encriptado copiado al portapapeles');
    }).catch(function() {
        console.error('Error al copiar el texto encriptado al portapapeles');
    });
});


