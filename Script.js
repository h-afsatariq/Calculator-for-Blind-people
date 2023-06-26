function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function Answer() {
    var input_string = document.getElementById("result").value;
    var final_result = eval(input_string);
    document.getElementById("result").value = final_result;
    speak();
 }

function speak(){
    var value = document.getElementById("result").value;
    var input_string = "The answer is " + value;
    let say = new SpeechSynthesisUtterance(input_string);
    speechSynthesis.speak(say);
}

//VOICE RECOGNITION
function Speech(){
var recog = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recog.lang = 'en-US';
recog.start();
operations = {"plus":"+","minus":"-","multiply":"*","multiplied":"*","divide":"/","divided":"/"}    
recog.onresult = function(event){
var input_voice = event.results[0][0].transcript;
for(property in operations){
    input_val= input_voice.replace(property, operations[property]);
}
document.getElementById("result").value = input_val;
    setTimeout(function(){
    Answer();
},1000);
}
}
