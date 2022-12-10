function preload() {}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 240, 120, 200, 150);
    fill("red");
    stroke("green");
    circle( 600, 50, 60 );
    circle( 50, 50, 60 );
    circle( 50, 350, 60 );
    circle( 600, 350, 60 );
    rect( 80, 50, 350, 20 );
}

function take_snapshot() {
    save("student_name.png");
}
