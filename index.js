let fontTarget = document.getElementById("banner-name");

let fontList = [
    "Times, 'Times New Roman', Georgia, serif", 
    "Verdana, Arial, Helvetica, sans-serif", 
    "'Lucida Console', Courier, monospace", 
    "'Script MT', cursive",
    "Copperplate, 'Copperplate Gothic Light', fantasy"
]

const changeFont = () => {
    let num = Math.floor(Math.random() * fontList.length);
    fontTarget.style.fontFamily = fontList[num];
}

fontTarget.onclick = changeFont;