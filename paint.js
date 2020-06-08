//Battle sity pre alfa
//Made by ......


//canvas
let cnv = document.getElementById('cnv');
let ctx = cnv.getContext("2d");

//позиция игрока
let xp = 0;
let yp = 0;
//скорость
let speed = 3;
let tr = 0;

//массив окружения
let items = [];
let tancks = [];
//количество объектов окружения
let boxn = 0;
let blockn = 0;
//направление такнка
let tankDir = 0;
//начальная позиция пули
let bpx = 0;
let bpy = 0;
let tanck = {
    type:"tanck",
     id:1,
     x:90,
     y:90,
     speed:10,
     bullet:10,
     healh:3
  }
  let bulspeed = 3;
  let bulletm = [];
  let health = 3;
 let bulletN = 10;
 let ntanck = 0;
 let anim;
 let bild = true;
 let rot = 0;
 let idbull = 0;
let img = new Image();
  let bulletImg = new Image();

function clear () {
  ctx.clearRect(0,0,cnv.width,cnv.height);
}

function draw () {
for (let i = 0; i<items.length ; i++) {
  if(items[i].type == "block")
  {
block(items[i].x,items[i].y,"#FF952B","#E8641C");
}else if(items[i].type == "box")
{
  box(items[i].x,items[i].y,"#FF952B","#E8641C");
}

switch(tr) {
case 1:
 img.src = 'tanck4.png';
 break;
 case 2:
 img.src = 'tanck1.png';
 break;
 case 3:
 img.src = 'tanck2.png';
 break;
 case 4:
 img.src = 'tanck3.png';
 break;
}
  ctx.drawImage(img, xp, yp, 30, 30);

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

console.log(xp,yp,rot);
tank(xp,yp,rot);
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
      if (((xp - items[i].x) < 30 && (xp - items[i].x)> -30 ) && (((yp - items[i].y) <=30)) && (yp - items[i].y)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      yp -= speed;
      rot = 1;
    }
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyA') {
    // console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((xp - items[i].x) <= 30 && (xp - items[i].x)>= 0 ) && (((yp - items[i].y) <30)) && (yp - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      xp -= speed;
      rot = 4;
    }
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyS') {
    // console.log(xp,yp,tankDir,bpx,bpy);
    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((xp - items[i].x) < 30 && (xp - items[i].x)> -30 ) && (((items[i].y - yp) <=30)) && (items[i].y - yp)>= 0)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {
      yp += speed;
      rot = 3;
    }
   
  }
});
document.addEventListener('keydown', function(event) {  
  if (event.code == 'KeyD') {
    // console.log(xp,yp,tankDir,bpx,bpy);

    let canMove = true;
    for (var i = 0; i < items.length; i++) {
      if (((items[i].x - xp) <= 30 && (items[i].x - xp)>= 0 ) && (((yp - items[i].y) <30)) && (yp - items[i].y)> -30)  {
        console.log('kollisia')
        canMove = false;
      }
    }
    if (canMove) {

    xp += speed;
    rot = 2;
   }
 
  }
});




document.addEventListener('keydown', function(event) {
  if (event.code == 'ShiftLeft') {
  switch(tankDir){
    case 1:
      bpx = xp+12;
      bpy = yp-15;
      break;
    case 2:
      bpx = xp+30;
      bpy = yp+12;
      break;
    case 3:
      bpx = xp+13;
      bpy = yp+30;
      break;
    case 4:
      bpx = xp-15;
      bpy = yp+13;
      break;
    }
  console.log(bpx,bpy,tankDir)
  bullet(bpx,bpy,tankDir);
}
});
function Render () {
  // body...



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
     speed:speed,
     bullet:bulletN,
     healh:health
  }
  ntanck++;
  tancks.push(tanck);
}

//конструктор  пули
function bullet(x,y,r){
	let safeCount = 0;
	let yo = y;
  let xo = x;
     
	switch(r){
		case 1:
			bulletImg.src = 'b1.png'; // Set source path
			ctx.drawImage(bulletImg, x, yo, 5, 15);
			while(yo>=0){
				yo-=3				
				ctx.clearRect(x, yo+3, 5, 15);
				ctx.drawImage(bulletImg, x, yo, 5, 15);

				console.log(bulletImg.src);

//столкновение с пулей
				for (var i = 0; i < items.length; i++) {
    if (((x - items[i].x) < 29 && (x - items[i].x)> -4 ) && (((yo - items[i].y) <=30)) && (yo - items[i].y)>= 0)  {
        if(items[i].type == "box")
        {
          items.splice(i,1);
        }
        let bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);

       yo = -1
		}
	}
//столкновение с пулей


				if (safeCount > 200) {
					break;
			}
		}
   
			break;
		case 2:
		  	bulletImg.src = 'b2.png'; // Set source path
		   	ctx.drawImage(bulletImg, x, y, 15, 5);
        while(xo<=1490){
        xo+=3       
        ctx.clearRect(xo-3, y, 15, 5)
        ctx.drawImage(bulletImg, xo, y, 15, 5);

        console.log(bulletImg.src);

//столкновение с пулей
        for (var i = 0; i < items.length; i++) {
     if (((items[i].x - xo) <= 15 && (items[i].x - xo)>= -30 ) && (((y - items[i].y) <29)) && (y - items[i].y)> -4)  {
        if(items[i].type == "box")
        {
          items.splice(i,1);
        }
        let bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);
       xo = 3000;
     }
   }
	 if (safeCount > 200) {
          break;
      }
    }
      break;
		case 3:
			bulletImg.src = 'b3.png'; // Set source path
			ctx.drawImage(bulletImg, x, y, 5, 15);
      while(yo<=660){
        yo+=3       
        ctx.clearRect(x, yo-3, 5, 15)
        ctx.drawImage(bulletImg, x, yo, 5, 15);

        console.log(bulletImg.src);

//столкновение с пулей
        for (var i = 0; i < items.length; i++) {
    if (((x - items[i].x) < 29 && (x - items[i].x)> -4 ) && (((items[i].y - yo) <=15)) && (items[i].y - yo)>= -30)  {
        if(items[i].type == "box")
        {
          items.splice(i,1);
        }
        let bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);
       yo = 3000;
    }
  }
//столкновение с пулей


        if (safeCount > 200) {
          break;
      }
    }
      break;
		case 4:
			bulletImg.src = 'b4.png'; // Set source path
			ctx.drawImage(bulletImg, x, y, 15, 5);
        while(xo>=0){
        xo-=3       
        ctx.clearRect(xo+3, y, 15, 5)
        ctx.drawImage(bulletImg, xo, y, 15, 5);

        console.log(bulletImg.src);

//столкновение с пулей
        for (var i = 0; i < items.length; i++) {
     if (((xo - items[i].x) <= 30 && (xo - items[i].x)>= 0 ) && (((y - items[i].y) <29)) && (y - items[i].y)> -4)  {
        if(items[i].type == "box")
        {
          items.splice(i,1);
        }
        let bull = {
          type:"bull",
          id:idbull,
          x:xo,
          y:yo,
          r:r
        }
        idbull++;
        bulletm.push(bull);
       xo = -1;
     }
   }
   if (safeCount > 200) {
          break;
      }
    }
      break;
		}
}
tank(90,90,4);

