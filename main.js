var song_2;
var song_1;
var lwristy;
var lwristx;
var rwristy;
var rwristx;
function preload(){
    song_2=loadSound("music2.mp3.mp3");
    song_1=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lscore=rsults[0].pose.keypoints[9].score
        console.log(lscore);
        lwristy=results[0].pose.leftWrist.y;
        lwristx=results[0].pose.leftWrist.x;
        rwristx=results[0].pose.rightWrist.x;
        rwristy=results[0].pose.rightWrist.y;
        console.log(rwristy);
        console.log(lwristy);
        console.log(rwristx);
        console.log(lwristx);
    }
}
function draw(){
    image(video, 0,0,500,400);
}