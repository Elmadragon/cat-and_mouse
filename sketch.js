
function preload() {
CatImage1 = loadimage("cat1.png")
CatImage2 = loadimage("cat2.png");
CatImage3 = loadimage("cat3.png");
CatImage4 = loadimage("cat4.png");
GardenImage = loadimage("garden.png")
mouse1 = loadimage("mouse1.png")
mouse2 = loadimage("mouse2.png")
mouse3 = loadimage("mouse3.png")
mouse4 = loadimage("mouse4.png")
function setup(){
    createCanvas(1000,800);
Cat = createSprite = (30,30);
Cat.addImage(CatImage);
Mouse = createSprite = (30,30);
Mouse.addImage(MouseImage);
Garden = createSprite = (150,150);
Garden.addImage(GardenImage);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
