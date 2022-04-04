var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie","my selfie","selfie","my","take") {
    console.log("taking selfie ---");
    speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()  {
       take_snapshot();
       save()
    }, 5000);
}
Webcam.set({
    width : 350,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 90,
});
camera = document.getElementById('camera');

function take_snapshot()
{
console.log(img_id);

Webcam.snap(function(data_uri) {
if(img_id=="selfie1"){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="+data_uri+  " />';
}
if(img_id=="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+ ' " />';
}
if(img_id=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+ ' "/>';
}
});
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}}