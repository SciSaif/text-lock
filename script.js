const textInput = document.querySelector('.text-input');
const enter = document.querySelector('.enter');
const display = document.querySelector('.display');
const textDisplay = document.querySelector('.text-display');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const oops = document.querySelector('.oops');
const span = document.querySelector('span');

var store = "";

//Time Api
var mytime = 0;
const apiUrl = "https://worldtimeapi.org/api/timezone/Asia/Kolkata";
fetch(apiUrl)
.then(res => res.json())
.then((out) => {

    function encodeCBinary(str){
        var encoded = '',temp='';
        var text = Array.from(str.toLowerCase());
        text.forEach(elem => {
            
            switch (elem) {
                case "a":
                    temp = '001 ';
                    break;
                case "b":
                    temp = '0101 ';
                    break;
                case "c":
                    temp = '00101 ';
                    break;
                case "d":
                    temp ='11010 ';
                    break;
                case "e":
                    temp = '1011101 ';
                    break;
                case "f":
                    temp = '111101 ';
                    break;
                case "g":
                    temp = '1010101 ';
                    break;
                case "h":
                    temp = '100101 ';
                    break;
                case "i":
                    temp = '10110101 ';
                    break;
                case "j":
                    temp = '10111011 ';
                    break;
                case "k":
                    temp = '10111001 ';
                    break;
                case "l":
                    temp = '101110101 ';
                    break;
                case "m":
                    temp = '10111101 ';
                    break;
                case "n":
                    temp = '11011101 ';
                    break;
                case "o":
                    temp = '10101101 ';
                    break;
                case "p":
                    temp = '10101 ';
                    break;
                case "q":
                    temp = '11101 ';
                    break;
                case "r":
                    temp = '1101 ';
                    break;
                case "s":
                    temp = '1011 ';
                    break;
                case "t":
                    temp = '101101 ';
                    break;
                case "u":
                    temp = '101111 ';
                    break;
                case "v":
                    temp = '101 ';
                    break;
                case "w":
                    temp = '101110 ';
                    break;
                case "x":
                    temp = '101001 ';
                    break;
                case "y":
                    temp = '10100101 ';
                    break;
                case "z":
                    temp = '111010101 ';
                    break;
                case "1":
                    temp = '101011011 ';
                    break;
                case "2":
                    temp = '101011001 ';
                    break;
                case "3":
                    temp = '101011101 ';
                    break;
                case "4":
                    temp = '10111 ';
                    break;
                case "5":
                    temp = '01100 ';
                    break;
                case "6":
                    temp = '1011010 ';
                    break;
                case "7":
                    temp = '101101001 ';
                    break;
                case "8":
                    temp = '100110101 ';
                    break;
                case "9":
                    temp = '1001001 ';
                    break;
                case "0":
                    temp = '1001101 ';
                    break;
                case ",":
                    temp = '1001111 ';
                    break;
                case ".":
                    temp = '101100 ';
                    break;
                case ":":
                    temp = '1011111 ';
                    break;
                case ";":
                    temp = '101111001 ';
                    break;
                case "/":
                    temp = '1011110101 ';
                    break;
                case "=":
                    temp = '001100 ';
                    break;
                case "+":
                    temp = '00010 ';
                    break;
                case "-":
                    temp = '01 ';
                    break;
                case "_":
                    temp = '10 ';
                    break;
                case "(":
                    temp = '0001 ';
                    break;
                case ")":
                    temp = '000101 ';
                    break;
                case "{":
                    temp = '00001 ';
                    break;
                case "}":
                    temp = '1011110001 ';
                    break;
                case "[":
                    temp = '01001 ';
                    break;
                case "]":
                    temp = '01010 ';
                    break;
                case "\"":
                    temp = '101101010101 ';
                    break;
                case "\'":
                    temp = '000011001 ';
                    break;
                case "\\":
                    temp = '00001110110 ';
                    break;
                case "&":
                    temp = '000011101110 ';
                    break;
                case "@":
                    temp = '001001110110 ';
                    break;
                case "!":
                    temp = '100001110110 ';
                    break;
                case " ":
                    temp = '001101 ';
                    break;
                default:
                    temp = elem;
                    break;
            }
            encoded += temp;
        });
        return encoded;
    }
    
    
    function decodeCBinary(str) {
        var decoded = '' , temp = '';
        var text = str.trim().split(" ");
        text.forEach(elem => {
             
             switch(elem){
                 case "001":
                     temp = 'a';
                     break;
                 case "0101":
                     temp = 'b';
                     break;
                 case "00101":
                     temp = 'c';
                     break;
                 case "11010":
                     temp = 'd';
                     break;
                 case "1011101":
                     temp = 'e';
                     break;
                 case "111101":
                     temp = 'f';
                     break;
                 case "1010101":
                     temp = 'g';
                     break;
                 case "100101":
                     temp = 'h';
                     break;
                 case "10110101":
                     temp = 'i';
                     break;
                 case "10111011":
                     temp = 'j';
                     break;
                 case "10111001":
                     temp = 'k';
                     break;
                 case "101110101":
                     temp = 'l';
                     break;
                 case "10111101":
                     temp = 'm';
                     break;
                 case "11011101":
                     temp = 'n';
                     break;
                 case "10101101":
                     temp = 'o';
                     break;
                 case "10101":
                     temp = 'p';
                     break;
                 case "11101":
                     temp = 'q';
                     break;
                 case "1101":
                     temp = 'r';
                     break;
                 case "1011":
                     temp = 's';
                     break;
                 case "101101":
                     temp = 't';
                     break;
                 case "101111":
                     temp = 'u';
                     break;
                 case "101":
                     temp = 'v';
                     break;
                 case "101110":
                     temp = 'w';
                     break;
                 case "101001":
                     temp = 'x';
                     break;
                 case "10100101":
                     temp = 'y';
                     break;
                 case "111010101":
                     temp = 'z';
                     break;
                 case "101011011":
                     temp = '1';
                     break;
                 case "101011001":
                     temp = '2';
                     break;
                 case "101011101":
                     temp = '3';
                     break;
                 case "10111":
                     temp = '4';
                     break;
                 case "01100":
                     temp = '5';
                     break;
                 case "1011010":
                     temp = '6';
                     break;
                 case "101101001":
                     temp = '7';
                     break;
                 case "100110101":
                     temp = '8';
                     break;
                 case "1001001":
                     temp = '9';
                     break;
                 case "1001101":
                     temp = '0';
                     break;
                 case "1001111":
                     temp = ',';
                     break;
                 case "101100":
                     temp = '.';
                     break;
                 case "1011111":
                     temp = ':';
                     break;
                 case "101111001":
                     temp = ';';
                     break;
                 case "1011110101":
                     temp = '/';
                     break;
                 case "001100":
                     temp = '=';
                     break;
                 case "00010":
                     temp = '+';
                     break;
                 case "01":
                     temp = '-';
                     break;
                 case "10":
                     temp = '_';
                     break;
                 case "0001":
                     temp = '(';
                     break;
                 case "000101":
                     temp = ')';
                     break;
                 case "00001":
                     temp = '{';
                     break;
                 case "1011110001":
                     temp = '}';
                     break;
                 case "01001":
                     temp = '[';
                     break;
                 case "01010":
                     temp = ']';
                     break;
                 case "101101010101":
                     temp = '\"';
                     break;
                 case "000011001":
                     temp = '\'';
                     break;
                 case "00001110110":
                     temp = '\\';
                     break;
                case "000011101110":
                    temp = '& ';
                    break;
                case "001001110110":
                    temp = '@ ';
                    break;
                case "100001110110":
                    temp = '! ';
                    break;
                 case "001101":
                     temp = ' ';
                     break;
    
                 default:
                     temp = elem;
                     break;
             }
             decoded += temp;
    
        });
        return decoded;
        
    }

    mytime = new Date(out.datetime).getHours();
    if(mytime>=9 && mytime <= 22){
        container1.classList.remove('invisible');
        container2.classList.remove('invisible');
        oops.classList.add('invisible');
    }else {
        container1.classList.add('invisible');
        container2.classList.add('invisible');
        oops.classList.remove('invisible');
    }
    
    function loadItem() {
        var storeitem =  localStorage.getItem("storeItem");
        return storeitem;
    }
    
    function storeText() {
        var text = encodeCBinary(textInput.value);
        textInput.value =  "";
    
        store = text;
        localStorage.setItem("storeItem", store);
    
    }
    
    enter.addEventListener('click', storeText)
    
    function displayText() {
        textDisplay.value = decodeCBinary(loadItem());
    }
    
    display.addEventListener('click', displayText)


}).catch(err => console.error(err));


