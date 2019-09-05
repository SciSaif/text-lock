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
const apiUrl = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";
span.innerHTML = " dsds"
fetch(apiUrl)
.then(res => res.json())
.then((out) => {
    mytime = new Date(out.datetime).getHours();
    console.log(mytime);

    
    if(mytime>=0 && mytime <= 22){
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
        var text = textInput.value;
        textInput.value =  "";
    
        store = text;
        localStorage.setItem("storeItem", store);
    
    }
    
    enter.addEventListener('click', storeText)
    
    function displayText() {
        textDisplay.value = loadItem();
    }
    
    display.addEventListener('click', displayText)


}).catch(err => console.error(err));


