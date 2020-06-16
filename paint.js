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
  let bulspeed = 10;
  let bulletm = [];
  let health = 3;
 let bulletN = 10;
 let ntanck = 0;
 let anim;
 let bild = true;
 let idbull = 0;

  let bulletImg = new Image();

function clear () {
  ctx.clearRect(0,0,cnv.width,cnv.height);
}

function draw () {
  // console.log(tancks);
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

 for(let i=0; i<=1000; i+=30){
  block(i,0,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(0,i,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(i,630,"#FF952B","#E8641C");
}
for(let i=0; i<=1000; i+=30){
  block(960,i,"#FF952B","#E8641C");
}

tank(90,90,4);
tank(300,300,2);

block(180,180,"#FF952B","#E8641C");
box(360,360,"#FF952B","#E8641C");
box(180,360,"#FF952B","#E8641C");
box(360,180,"#FF952B","#E8641C");
bild = false;
//управление танком
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyW') {
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
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA') {
    // console.log(xp,yp,tankDir,bpx,bpy);
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
    }
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyS') {
    // console.log(xp,yp,tankDir,bpx,bpy);
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
    }
   
  }
});
document.addEventListener('keydown', function(event) {  
  if (event.code == 'KeyD') {
    // console.log(xp,yp,tankDir,bpx,bpy);

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
   }
 
  }
});




document.addEventListener('keydown', function(event) {
  if (event.code == 'ShiftLeft' && Date.now() - time >= colldown) {
  switch(tancks[0].r){
    case 1:
      bpx = tancks[0].x+12;
      bpy = tancks[0].y-15;
      break;
    case 2:
      bpx = tancks[0].x+30;
      bpy = tancks[0].y+12;
      break;
    case 3:
      bpx = tancks[0].x+13;
      bpy =  tancks[0].y+30;
      break;
    case 4:
      bpx = tancks[0].x-15;
      bpy = tancks[0].y+13;
      break;
    }
  console.log(bpx,bpy,tancks[0].r);
  time = Date.now();
  bullet(bpx,bpy,tancks[0].r);

}
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    // console.log(xp,yp,tankDir,bpx,bpy);
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
    }
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
    // console.log(xp,yp,tankDir,bpx,bpy);
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
    }
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown') {
    // console.log(xp,yp,tankDir,bpx,bpy);
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
    }
   
  }
});
document.addEventListener('keydown', function(event) {  
  if (event.code == 'ArrowRight') {
    // console.log(xp,yp,tankDir,bpx,bpy);

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
   }
 
  }
});




document.addEventListener('keydown', function(event) {
  if (event.code == 'ShiftRight' && Date.now() - time >= colldown) {
  switch(tancks[1].r){
    case 1:
      bpx = tancks[1].x+12;
      bpy = tancks[1].y-15;
      break;
    case 2:
      bpx = tancks[1].x+30;
      bpy = tancks[1].y+12;
      break;
    case 3:
      bpx = tancks[1].x+13;
      bpy = tancks[1].y+30;
      break;
    case 4:
      bpx = tancks[1].x-15;
      bpy = tancks[1].y+13;
      break;
    }
  console.log(bpx,bpy,tancks[1].r);
  time = Date.now();
  bullet(bpx,bpy,tancks[1].r);

}
});

function Render () {
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
              if (((x - tancks[j].x) < 29 && (x - tancks[j].x)> -4 ) && (((y - tancks[j].y) <=30)) && (y - tancks[j].y)>= 0)  {
                
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
            for (let j = 0; j < items.length; j++) {
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
            for (let j = 0; j < items.length; j++) {
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
            for (let j = 0; j < items.length; j++) {
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

//конструктор блоков
function block(x,y,st,sf,){
  ctx.fillStyle = sf;
  ctx.fillRect(x,y,30,30);
  ctx.fillStyle = st;
  ctx.fillRect(x+1,y+1,28,28);
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
  ctx.beginPath();
  ctx.strokeStyle = sf;
  ctx.lineWidth = 3;
  ctx.moveTo(x,y);
  ctx.lineTo(x+30,y+30);
  ctx.moveTo(x+30,y);
  ctx.lineTo(x,y+30);
  ctx.stroke();
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
     health:health
  }
  ntanck++;
  tancks.push(tanck);
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


