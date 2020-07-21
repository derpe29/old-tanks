//Battle sity pre alfa
//Made by ......


//canvas
let cnv = document.getElementById('cnv');
let ctx = cnv.getContext("2d");

//скорость
let tyr = 0;
let tgn = 0;
let colldown = 333;

let time = Date.now();
//массив окружения
let items = [];
let tancks = [];
let invetar = [];
//количество объектов окружения
let boxn = 0;
let blockn = 0;

//начальная позиция пули
let bpx = 0;
let bpy = 0;
// let tanck = {
//     type:"tanck",
//      id:1,
//      x:90,
//      y:90,
//      speed:10,
//      bullet:10,
//      healh:3
//   }
  let keys = new Set();
  let bulspeed = 10;
  let bulletm = [];
  let health = 3;
 let bulletN = 10;
 let ntanck = 0;
 let anim;
 let bild = true;
 let idbull = 0;
 let spawn = 10000;
let colspawn = Date.now();
  let bulletImg = new Image();
  let bulletIvImg = new Image();
  let hpimg = new Image();
  let flpng = new Image();

function clear () {
  ctx.clearRect(0,0,cnv.width,cnv.height);
}

function draw () {
  let hp = document.querySelector('#d');
  let hps = document.querySelector('#db');
  let bulf = document.querySelector('#b');
  let buls = document.querySelector('#bb');
  let spf = document.querySelector('#s');
  let sps = document.querySelector('#sb');
  if (tancks.length>1) {
    hp.innerText = tancks[0].health;
    hps.innerText = tancks[1].health;
  }else if (tancks.length ==1){
  if (tancks[0].id == 1) {
    hp.innerText = 0;
    hps.innerText = tancks[0].health;
  }else{
    hp.innerText = tancks[0].health;
    hps.innerText = 0;
  }
}else{
  hp.innerText = 0;
    hps.innerText = 0;
}

 if (tancks.length>1) {
    bulf.innerText = tancks[0].bullet;
    buls.innerText = tancks[1].bullet;
  }else if (tancks.length ==1){
  if (tancks[0].id == 1) {
    bulf.innerText = 0;
    buls.innerText = tancks[0].bullet;
  }else{
    bulf.innerText = tancks[0].bullet;
    buls.innerText = 0;
  }
}else{
  bulf.innerText = 0;
    buls.innerText = 0;
}

  if (tancks.length>1) {
    spf.innerText = tancks[0].speed;
    sps.innerText = tancks[1].speed;
  }else if (tancks.length ==1){
  if (tancks[0].id == 1) {
    spf.innerText = 0;
    sps.innerText = tancks[0].speed;
  }else{
    spf.innerText = tancks[0].speed;
    sps.innerText = 0;
  }
}else{
  spf.innerText = 0;
    sps.innerText = 0;
}

  


for (let i = 0; i<items.length ; i++) {
  if(items[i].type == "block")
  {
block(items[i].x,items[i].y,"#FF952B","#E8641C");
}else if(items[i].type == "box")
{
  box(items[i].x,items[i].y,"#FF952B","#E8641C");
}

}
for (let i = 0; i<tancks.length ; i++) {
 switch(tancks[i].r) {
case 1:
let img4 = new Image();
 img4.src = 'tanck4.png';
 ctx.drawImage(img4, tancks[i].x, tancks[i].y, 30, 30);
 break;
 case 2:
 let img1 = new Image();
 img1.src = 'tanck1.png';
 ctx.drawImage(img1, tancks[i].x, tancks[i].y, 30, 30);
 break;
 case 3:
 let img2 = new Image();
 img2.src = 'tanck2.png';
 ctx.drawImage(img2, tancks[i].x, tancks[i].y, 30, 30);
 break;
 case 4:
 let img3 = new Image();
 img3.src = 'tanck3.png';
 ctx.drawImage(img3, tancks[i].x, tancks[i].y, 30, 30);
 break;
}

}

for(let i = 0; i<invetar.length;i++){
  if(invetar[i].type == "bullIv") {
bulletIvImg.src = 'bul.png';
 ctx.drawImage(bulletIvImg, invetar[i].x, invetar[i].y, 30, 20);
}else if(invetar[i].type == "hpbox"){
hpimg.src = 'hpbox.png';
 ctx.drawImage(hpimg, invetar[i].x, invetar[i].y, 30, 20);
 }else if(invetar[i].type == "flash"){
flpng.src = 'flash.png';
 ctx.drawImage(flpng, invetar[i].x, invetar[i].y, 30, 20);
 }
}

for(let i = 0; i<bulletm.length;i++){
  
switch(bulletm[i].r) {
case 1:
 bulletImg.src = 'b1.png';
 ctx.drawImage(bulletImg, bulletm[i].x, bulletm[i].y, 5, 15);
 break;
 case 2:
 bulletImg.src = 'b2.png';
 ctx.drawImage(bulletImg, bulletm[i].x, bulletm[i].y, 15, 5);
 break;
 case 3:
 bulletImg.src = 'b3.png';
 ctx.drawImage(bulletImg, bulletm[i].x, bulletm[i].y, 5, 15);
 break;
 case 4:
 bulletImg.src = 'b4.png';
 ctx.drawImage(bulletImg, bulletm[i].x, bulletm[i].y, 15, 5);
 break;
}
  }

}

 for(let i=0; i<=1170; i+=30){
  block(i,0,"#FF952B","#E8641C");
}
for(let i=0; i<=690; i+=30){
  block(0,i,"#FF952B","#E8641C");
}
for(let i=0; i<=1170; i+=30){
  block(i,690,"#FF952B","#E8641C");
}
for(let i=0; i<=690; i+=30){
  block(1170,i,"#FF952B","#E8641C");
}


  

tank(90,90,4);
tank(1080,600,2);





for (let i=90; i<=600; i+=30){
  box(150,i,"#FF952B","#E8641C");
}
for (let i=90; i<=600; i+=30){
  box(180,i,"#FF952B","#E8641C");
}
for (let i=90; i<=600; i+=30){
  box(1020,i,"#FF952B","#E8641C");
}
for (let i=90; i<=600; i+=30){
  box(990,i,"#FF952B","#E8641C");
}

for (let i=240; i<=360; i+=30){
  box(600,i,"#FF952B","#E8641C");
}
for (let i=240; i<=360; i+=30){
  box(630,i,"#FF952B","#E8641C");
}
for (let i=240; i<=360; i+=30){
  box(570,i,"#FF952B","#E8641C");
}
for (let i=240; i<=360; i+=30){
  box(540,i,"#FF952B","#E8641C");
}
for (let i=240; i<=360; i+=30){
  box(510,i,"#FF952B","#E8641C");
}
bild = false;


// Keyboard input with customisable repeat (set to 0 for no key repeat)
//
function KeyboardController(keys, repeat) {
    // Lookup of key codes to timer ID, or null for no repeat
    //
    var timers= {};

    // When key is pressed and we don't already think it pressed, call the
    // key action callback and set a timer to generate another one after a delay
    //
    document.onkeydown= function(event) {
        var key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    // Cancel timeout and mark key as released on keyup
    //
    document.onkeyup= function(event) {
        var key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    // When window is unfocused we may not get key events. To prevent this
    // causing a key to 'get stuck down', cancel all held keys
    //
    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};

KeyboardController({
    87: function() {
         // console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[0].x - items[i].x) < 30 && (tancks[0].x - items[i].x)> -30 ) && (((tancks[0].y - items[i].y) <=30)) && (tancks[0].y - items[i].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }

    
    if (canMove) {
      tancks[0].y -= tancks[0].speed;
      tancks[0].r = 1;
    }
    
   },

    65: function() {
      console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[0].x - items[i].x) <= 30 && (tancks[0].x - items[i].x)>= 0 ) && (((tancks[0].y - items[i].y) <30)) && (tancks[0].y - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[0].x -= tancks[0].speed;
      tancks[0].r = 4;
    } },

    83: function() {
     console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[0].x - items[i].x) < 30 && (tancks[0].x - items[i].x)> -30 ) && (((items[i].y - tancks[0].y) <=30)) && (items[i].y - tancks[0].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[0].y += tancks[0].speed;
      tancks[0].r = 3;
    } },


    68: function() {
      console.log(xp,yp,tankDir,bpx,bpy);

    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((items[i].x - tancks[0].x) <= 30 && (items[i].x - tancks[0].x)>= 0 ) && (((tancks[0].y - items[i].y) <30)) && (tancks[0].y - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {

    tancks[0].x += tancks[0].speed;
    tancks[0].r = 2;
   } },

    16: function() {
     for (var i = 0; i<tancks.length; i++){
     if (tancks[i].id == 0 && tancks[i].bullet > 0 && Date.now() - tancks[i].colldown >= colldown) {
      switch(tancks[i].r){
    case 1:
      bpx = tancks[i].x+12;
      bpy = tancks[i].y-15;
      break;
    case 2:
      bpx = tancks[i].x+30;
      bpy = tancks[i].y+12;
      break;
    case 3:
      bpx = tancks[i].x+13;
      bpy =  tancks[i].y+30;
      break;
    case 4:
      bpx = tancks[i].x-15;
      bpy = tancks[i].y+13;
      break;
    }
    tancks[i].bullet -= 1;
    break;
     } 
    }
  
  // console.log(bpx,bpy,tancks[i].r);
  tancks[i].colldown = Date.now();
  bullet(bpx,bpy,tancks[i].r); },


    38: function() {
      console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[1].x - items[i].x) < 30 && (tancks[1].x - items[i].x)> -30 ) && (((tancks[1].y - items[i].y) <=30)) && (tancks[1].y - items[i].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[1].y -= tancks[1].speed;
      tancks[1].r = 1;
    } },


    37: function() {
    console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[1].x - items[i].x) <= 30 && (tancks[1].x - items[i].x)>= 0 ) && (((tancks[1].y - items[i].y) <30)) && (tancks[1].y - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[1].x -= tancks[1].speed;
      tancks[1].r = 4;
    } },


    36: function() {
    console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[1].x - items[i].x) < 30 && (tancks[1].x - items[i].x)> -30 ) && (((items[i].y - tancks[1].y) <=30)) && (items[i].y - tancks[1].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[1].y += tancks[1].speed;
      tancks[1].r = 3;
    } },

    39: function() { 
    console.log(xp,yp,tankDir,bpx,bpy);

    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((items[i].x - tancks[1].x) <= 30 && (items[i].x - tancks[1].x)>= 0 ) && (((tancks[1].y - items[i].y) <30)) && (tancks[1].y - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {

    tancks[1].x += tancks[1].speed;
    tancks[1].r = 2;
   } },

    96: function() { 
     for (var i = 0; i<tancks.length; i++){
     if (tancks[i].id == 1 && tancks[i].bullet > 0 && Date.now() - tancks[i].colldown >= colldown) {
  switch(tancks[i].r){
    case 1:
      bpx = tancks[i].x+12;
      bpy = tancks[i].y-15;
      break;
    case 2:
      bpx = tancks[i].x+30;
      bpy = tancks[i].y+12;
      break;
    case 3:
      bpx = tancks[i].x+13;
      bpy = tancks[i].y+30;
      break;
    case 4:
      bpx = tancks[i].x-15;
      bpy = tancks[i].y+13;
      break;
    }
    tancks[i].bullet -= 1;
    break;
  }
}
  // console.log(bpx,bpy,tancks[i].r);
  tancks[i].colldown = Date.now();
  bullet(bpx,bpy,tancks[i].r);},


    40: function() { 
    console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((tancks[1].x - items[i].x) < 30 && (tancks[1].x - items[i].x)> -30 ) && (((items[i].y - tancks[1].y) <=30)) && (items[i].y - tancks[1].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      tancks[1].y += tancks[1].speed;
      tancks[1].r = 3;
    } }


}, 30);


function Render () {
  if(Date.now() - colspawn >= spawn){
    let object;
    switch(rand(1,4)){
      case 1:
      object = hpbox;
      break;
      case 2:
      object = bulletIv;
      break;
      case 3:
      object = flash;
      break;
    }
  let ran = spawner();
    object(ran[0] * 30, ran[1] * 30);
    colspawn = Date.now();
  }


  //проверка столкновения пули с объектами
  for (let  i = 0; i < bulletm.length; i++) {
    let x = bulletm[i].x;
    let y = bulletm[i].y;
  
    switch(bulletm[i].r) {
      //выстрел вверх
      case 1:
        bulletm[i].y-=bulspeed;
            for (let j = 0; j < items.length; j++) {
              if (((x - items[j].x) < 29 && (x - items[j].x)> -4 ) && (((y - items[j].y) <=30)) && (y - items[j].y)>= 0)  {
                if(items[j].type == "box"){
                    items.splice(j,1);
                  }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
       
       
       
 case 2:
 //выстрел вправо
bulletm[i].x+=bulspeed;
            for (let j = 0; j < items.length; j++) {
              if (((items[j].x - x) <= 15 && (items[j].x - x)>= -30 ) && (((y - items[j].y) <29)) && (y - items[j].y)> -4)  {
                if(items[j].type == "box"){
                    items.splice(j,1);
                  }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
 case 3:
 //выстрел вниз
 bulletm[i].y+=bulspeed;
            for (let j = 0; j < items.length; j++) {
              if (((x - items[j].x) < 29 && (x - items[j].x)> -4 ) && (((items[j].y - y) <=15)) && (items[j].y - y)>= -30)  {
                if(items[j].type == "box"){
                    items.splice(j,1);
                  }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
 case 4:
 //выстрел влево
 bulletm[i].x-=bulspeed;
            for (let j = 0; j < items.length; j++) {
              if (((x - items[j].x) <= 30 && (x - items[j].x)>= 0 ) && (((y - items[j].y) <29)) && (y - items[j].y)> -4)  {
                if(items[j].type == "box"){
                    items.splice(j,1);
                  }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
}

  }


    //проверка столкновения пули с объектами
  for (let  i = 0; i < bulletm.length; i++) {
    let x = bulletm[i].x;
    let y = bulletm[i].y;
  
    switch(bulletm[i].r) {
      //выстрел вверх
      case 1:
        bulletm[i].y-=bulspeed;
            for (let j = 0; j < tancks.length; j++) {
              if (((x - tancks[j].x) < 29 && (x - tancks[j].x)> -4 ) && (((y - tancks[j].y) <=20)) && (y - tancks[j].y)>= 0)  {
                
                    tancks[j].health -=1;
                    if(tancks[j].health < 1){
                      tancks.splice(j,1);
                    }
                  
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
       
       
       
 case 2:
 //выстрел вправо
bulletm[i].x+=bulspeed;
            for (let j = 0; j < tancks.length; j++) {
              if (((tancks[j].x - x) <= 15 && (tancks[j].x - x)>= -30 ) && (((y - tancks[j].y) <29)) && (y - tancks[j].y)> -4)  {
                    tancks[j].health -=1;
                    if(tancks[j].health < 1){
                      tancks.splice(j,1);
                    }
                  
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
 case 3:
 //выстрел вниз
 bulletm[i].y+=bulspeed;
            for (let j = 0; j < tancks.length; j++) {
              if (((x - tancks[j].x) < 29 && (x - tancks[j].x)> -4 ) && (((tancks[j].y - y) <=15)) && (tancks[j].y - y)>= -30)  {
                    tancks[j].health -=1;
                    if(tancks[j].health < 1){
                      tancks.splice(j,1);
                    }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
 case 4:
 //выстрел влево
 bulletm[i].x-=bulspeed;
            for (let j = 0; j < tancks.length; j++) {
              if (((x - tancks[j].x) <= 30 && (x - tancks[j].x)>= 0 ) && (((y - tancks[j].y) <29)) && (y - tancks[j].y)> -4)  {

                    tancks[j].health -=1;
                    if(tancks[j].health < 1){
                      tancks.splice(j,1);
                    }
                bulletm.splice(i,1);
                break;
              }
            } 
       break;
}

  }

  for (let  i = 0; i < invetar.length; i++) {
    let x = invetar[i].x;
    let y = invetar[i].y;
  for (let k = 0; k < tancks.length; k++) {
   
    switch(tancks[k].r) {
      //выстрел вверх
      case 1:

              if (((x - tancks[k].x) < 29 && (x - tancks[k].x)> -29 ) && (((tancks[k].y - y) <=19)) && (tancks[k].y - y)>= 0)  {
                 if(invetar[i].type == "bullIv"){
                  tancks[k].bullet += 3;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "hpbox") {
                tancks[k].health += 1;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "flash") {
                tancks[k].speed += 0.5;
                    invetar.splice(i,1);
                break;
              }
              }

       break;
       
       
       
 case 2:

              if (((x - tancks[k].x) < 29 && (x - tancks[k].x)> -29 ) && (((tancks[k].y - y) <=19)) && (tancks[k].y - y)>= -19)  {
                  if(invetar[i].type == "bullIv"){
                  tancks[k].bullet += 3;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "hpbox") {
                tancks[k].health += 1;
                    invetar.splice(i,1);
                break;
              }
               if(invetar[i].type == "flash") {
                tancks[k].speed += 0.5;
                    invetar.splice(i,1);
                break;
              }
              }

       break;
 case 3:

              if (((x - tancks[k].x) < 29 && (x - tancks[k].x)> -29 ) && (((tancks[k].y - y) <=0)) && (tancks[k].y - y)>= -29)  {
                  if(invetar[i].type == "bullIv"){
                  tancks[k].bullet += 3;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "hpbox") {
                tancks[k].health += 1;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "flash") {
                tancks[k].speed += 0.5;
                    invetar.splice(i,1);
                break;
              }
              }

       break;
 case 4:

              if (((x - tancks[k].x) < 30 && (x - tancks[k].x)> -29 ) && (((tancks[k].y - y) <=19)) && (tancks[k].y - y)>= -29)  {
                  if(invetar[i].type == "bullIv"){
                  tancks[k].bullet += 3;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "hpbox") {
                tancks[k].health += 1;
                    invetar.splice(i,1);
                break;
              }
              if(invetar[i].type == "flash") {
                tancks[k].speed += 0.5;
                    invetar.splice(i,1);
                break;
              }
              }

       break;
}

  }
}


//Управление танком

}

function animate () {
  anim = requestAnimationFrame(animate);
  clear();
  draw();
  Render();
}
anim = requestAnimationFrame(animate);


document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
 cancelAnimationFrame(anim);
 alert("hi");
}
});

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function spawner() {
  let randx = rand(1,40);
    let randy = rand(1,25);
    for(let o = 0; o < invetar.length; o++){
      if(randx*30 == invetar[o].x && randy*30 == invetar[o].y){
        // console.log(randx*30, invetar[o].x, randy*30, invetar[o].y);
        // alert(invetar[o].x + " " + invetar[o].y);
        return spawner();
      }
    }
    for(let j = 0; j < items.length; j++){
      if(randx*30 == items[j].x && randy*30 == items[j].y){
        // console.log(randy*30, items[o].y, randx*30, invetar[o].x);
        // alert(items[j].x + " " + items[j].y);
        return spawner();
      }
    }
        console.log(randx*30, randy*30);
        return [randx, randy];
      }
    


//конструктор блоков
function block(x,y,st,sf,){
 ctx.fillStyle = sf;
  ctx.fillRect(x,y,30,30);
  ctx.fillStyle = st;
 ctx.fillRect(x+1,y+1,28,28);
  
  ctx.beginPath();
  ctx.strokeStyle = sf;
  ctx.lineWidth = 2;
  ctx.moveTo(x,y);
  ctx.lineTo(x+30,y+30);
  ctx.moveTo(x+30,y);
  ctx.lineTo(x,y+30);
  ctx.stroke();
  ctx.fillStyle = sf;
  ctx.fillRect(x+8,y+8,15,15);
   ctx.fillStyle = st;
  ctx.fillRect(x+12,y+12,7,7);
  if (bild) {
  let block = {type:"block", id:blockn, x:x, y:y};
  blockn += 1;
  items.push(block);
}
}

//конструктор блоков 2
function box(x,y,st,sf,){
  ctx.fillStyle = sf;
  ctx.fillRect(x,y,30,30);
  ctx.fillStyle = st;
  ctx.fillRect(x+1,y+1,28,28);
  ctx.fillStyle = sf;
  ctx.fillRect(x+8,y+8,15,15);
  ctx.fillStyle = st;
  ctx.fillRect(x+12,y+12,7,7);


  
  if(bild){
    let box = {type:"box", id:boxn, x:x, y:y};
    boxn += 1;
    items.push(box);
  }
}
//конструктор танка
function tank(x,y,r){
  tankDir = r;
  xp = x;
  yp = y;
  tr = r;
  console.log(xp,yp,tankDir);
  let tanck = {
    type:"tanck",
     id:ntanck,
     x:x,
     y:y,
     r:r,
     speed:5,
     bullet:bulletN,
     health:health,
     colldown: Date.now()
  }
  ntanck++;
  tancks.push(tanck);
}

function bulletIv(x,y){
  let bullIv = {
    type:"bullIv",
    x:x,
    y:y,
    delete: Date.now()
  }
  invetar.push(bullIv);
}

function flash(x,y){
  let fl = {
    type:"flash",
    x:x,
    y:y,
    delete: Date.now()
  }
  invetar.push(fl);
}

function hpbox(x,y){
  let hpbox = {
    type:"hpbox",
    x:x,
    y:y,
    delete: Date.now()
  }
  invetar.push(hpbox);
}

//конструктор  пули
function bullet(x,y,r){
	let safeCount = 0;
	let yo = y;
  let xo = x;

     let bull = {};
	switch(r){

		case 1:
			bulletImg.src = 'b1.png'; // Set source path
			ctx.drawImage(bulletImg, x, yo, 5, 15);  
      bull = {
                  type:"bull",
                  id:idbull,
                  x:xo,
                  y:yo,
                  r:r
                }
      bulletm.push(bull);   
      idbull++;       
//столкновение с пулей
				
		// }
   
			break;
		case 2:
		  	bulletImg.src = 'b2.png'; // Set source path
		   	ctx.drawImage(bulletImg, x, y, 15, 5);
         bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);
      break;
		case 3:
			bulletImg.src = 'b3.png'; // Set source path
			ctx.drawImage(bulletImg, x, y, 5, 15);
         bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);
 
      break;
		case 4:
			bulletImg.src = 'b4.png'; // Set source path
			ctx.drawImage(bulletImg, x, y, 15, 5);
           bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);

      break;
		}
}


