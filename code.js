

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab4fea9e-ea52-47a8-9e7d-07834b064122","5d3a2b8b-f846-41ee-98b0-3bce489bdb98","cfed54e1-e6f9-42dd-b0f2-cf9cf95701e3"],"propsByKey":{"ab4fea9e-ea52-47a8-9e7d-07834b064122":{"name":"sheldon","sourceUrl":"assets/v3/animations/1Jaur0lN7tCX_qNx6U83hcTrGP-bB02DGiMKDZ039eY/ab4fea9e-ea52-47a8-9e7d-07834b064122.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"6aWSAB8mtDa3ZSaVwjio9U8Qolu2OvJm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/1Jaur0lN7tCX_qNx6U83hcTrGP-bB02DGiMKDZ039eY/ab4fea9e-ea52-47a8-9e7d-07834b064122.png"},"5d3a2b8b-f846-41ee-98b0-3bce489bdb98":{"name":"rick","sourceUrl":"assets/v3/animations/1Jaur0lN7tCX_qNx6U83hcTrGP-bB02DGiMKDZ039eY/5d3a2b8b-f846-41ee-98b0-3bce489bdb98.png","frameSize":{"x":338,"y":695},"frameCount":1,"looping":true,"frameDelay":4,"version":"2DyZ3If2GFPynl_kSXS6OTF95RfjFxNN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":338,"y":695},"rootRelativePath":"assets/v3/animations/1Jaur0lN7tCX_qNx6U83hcTrGP-bB02DGiMKDZ039eY/5d3a2b8b-f846-41ee-98b0-3bce489bdb98.png"},"cfed54e1-e6f9-42dd-b0f2-cf9cf95701e3":{"name":"happy","sourceUrl":null,"frameSize":{"x":194,"y":260},"frameCount":1,"looping":true,"frameDelay":12,"version":"QRwN.n.1uBFhyDV5wjFNcG96X8zSQlqg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":194,"y":260},"rootRelativePath":"assets/cfed54e1-e6f9-42dd-b0f2-cf9cf95701e3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var paletaJugador = createSprite(390,200,10,70);
var paletaCompu = createSprite(10,200,10,70);
var ball = createSprite(200,200,20,20);

paletaJugador.shapeColor = "blue";
paletaCompu.shapeColor = "red";
ball.shapeColor = "yellow";


paletaCompu.setAnimation("sheldon");
paletaCompu.scale = 0.30

paletaJugador.setAnimation("rick");
paletaJugador.scale = 0.30

ball.setAnimation("happy");
ball.scale = 0.30

function draw() {
  background("white");
  
if (ball.isTouching(paletaJugador) || ball.isTouching(paletaCompu) ){
playSound("assets/category_pop/cute_water_bubble.mp3", false);
    
  }

  
  if (keyDown("up")){
    paletaJugador.y = paletaJugador.y - 10;
}
 if (keyDown("Down")){
   paletaJugador.y = paletaJugador.y + 10;
}

  if (keyDown("space")){
      ball.velocityY = 5;
      ball.velocityX = 3;
}

paletaCompu.y = ball.y;

for(var num = 0; num < 400; num=num+20) {
  line(200,num,200,num+10);
}

drawnet ();

  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(paletaJugador);
  ball.bounceOff(paletaCompu);
  
  drawSprites();
}

function drawnet() {
  for(var num = 0; num < 400; num=num+20) {
  line(200,num,200,num+10);
}
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
