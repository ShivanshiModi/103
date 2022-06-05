Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snap()
{
    Webcam.snap(function(data_uri){
        document.getElementById("").innerHTML ='<img id="capture" src="'+ data_uri +'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EiAdJXlkW/model.json',modelloaded);

function modelloaded()
{
    console.log("model is working properly");
};