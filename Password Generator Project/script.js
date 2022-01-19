//DOM elements
const resultEL=document. getElementByID('result');
const lenghtEL=document. getElementByID('result');
const uppercaseEL=document. getElementByID('result');
const lowercaseEL=document. getElementByID('result');
const numbersEL=document. getElementByID('result');
const symbolsEL=document. getElementByID('result');
const generateEL=document. getElementByID('result');
const clipboardEL=document. getElementByID('result');


const randomFunc= {
lower: getRandonLower,
upper: getRandonUpper,
number: getRandonNumber,
symbol: getRandonSymbol
};

generateEL.addEventListener ('click' , () => {
 const length = lenghtEL.value;   
 console.log (typeoflength);

}
// Generator functiuons - http://www.net-comber.com/charset.html


function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26 )+ 97);
}
function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26 )+ 65);

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 26 )+ 65);
    
        function getRandomSymbol() {

const symbols= '!@#$%^&*(){}[]=<>/,.' ;
            return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandonLower);
