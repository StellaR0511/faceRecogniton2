Webcam.attach("#camera");
camera = document.getElementById("camera");
Webcam.set({
    height: 350,
    width: 450,
    image_format: 'png',
    png_quality: 90
});
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version: ",ml5.version);
//Change the link
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fuvd8kKxl/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById("selfie_image");
    classifier.classify(img,gotResults);
}
function gotResults(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}