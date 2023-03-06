function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
song ="";
function preload(){
    song = loadSound("feel-good-inc-official-video.mp3");
}
scoreRigthWrist = 0;
scoreLeftWrist = 0;

rigthWristX = 0;
rigthWristy = 0;

function modelLoaded(){
console.log("PoseNet Is Iniatialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreRigthWrist = results[0].pose.kypoints[10].score;
        scoreLeftWrist = results[0].pose.kypoints[9].score;

      RigthWrist = results[0].pose.rigthWrist.x;
      RigthWrist = results[0].pose.rigthWrist.y;

     LeftWrist = results[0].pose.LeftWrist.x;
     LeftWrist = results[0].pose.LeftWrist.y;
    }
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000")
    stroke("#FF0000")

    if(scoreRigthWrist > 0.2){
        circle(rigthWristX,rigthWristy,20);
        if(rigthWristY >0 && rigthWristY <= 100){
        document.getElementById("speed").innerHTML = "Speed = 0.5x";
        song.rate(0.5);
        }

       else if
            (rigthWristY >100 && rigthWristY <= 200){
            document.getElementById("speed").innerHTML = "Speed = 1x";
            song.rate(1);
            }

            else if
            (rigthWristY >200 && rigthWristY <= 300){
            document.getElementById("speed").innerHTML = "Speed = 1.5x";
            song.rate(1.5);
            }

            else if
            (rigthWristY >300 && rigthWristY <= 400){
            document.getElementById("speed").innerHTML = "Speed = 2x";
            song.rate(2);
            }

            else if
            (rigthWristY >400 && rigthWristY <= 500){
            document.getElementById("speed").innerHTML = "Speed = 2.5x";
            song.rate(2.5);
            }


    }

    if(scoreLeftWrist > 0.2){
        circle(LeftWristX,LeftWristY,20);
        InNumberleftWristY = Number(LeftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML ="Volume = " + volume;
        song.setVolumen(volume);
    }
}
function play(){
    song.play();
    song.setVolumen(1)
    song.rate(1)

}