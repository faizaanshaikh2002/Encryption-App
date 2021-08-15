// console.log("hi")
let Ebtn = document.getElementById("Ebtn");
Ebtn.addEventListener('click',Encode);

let Dbtn = document.getElementById("Dbtn");
Dbtn.addEventListener('click',Decode)

let messageElm = document.getElementById("text");
let msgBox = document.getElementById("msgBox")
function Encode() {
    let name = "Encrypted"
    let message = messageElm.value;
    let encryptedMsg;
    let word = message.split("").reverse().join(""); //abc
    let ascii;
    let encryptString;
    let str = [];
    let randomString = generateString(5)
    for (i = 0; i < word.length; i++) {
        ascii = word.charCodeAt(i);
        ascii = word.charCodeAt(i) + 6;
        encryptString = String.fromCharCode(ascii)
        str.push(encryptString)
        messageElm.value = ""
    }
    encryptedMsg = str.join("").trim() + randomString ;
    console.log(`Encrypted Msg of ${message}:`, encryptedMsg);
    showMessage(encryptedMsg,name,message);
    
}

function Decode(){
    let name = "Decrypted"
    let message = messageElm.value;
    let code = message.slice(0,message.length-5);
    console.log(code)
    let dstr = [];
    for (i = 0; i < code.length; i++) {
        ascii = code.charCodeAt(i);
        ascii = code.charCodeAt(i) - 6;
        DecryptString = String.fromCharCode(ascii)
        dstr.push(DecryptString)
        messageElm.value = ""
    }
    decryptedMsg = dstr.reverse().join("")
    console.log(decryptedMsg);
    showMessage(decryptedMsg,name,message);
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.trim();
}

function showMessage(code,type,msg){
    msgBox.innerText = `Your ${type} msg of ${msg} is: ${code}`
}

