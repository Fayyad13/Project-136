status = "";
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    camera = createCapture(300, 300);
    camera.hide();
}

function draw()
{
    image(camera, 0, 0, 300, 300)
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
    item = document.getElementById('item').value;
    console.log(item);
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
}

