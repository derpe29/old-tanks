//Battle sity pre alfa
//Made by ......


//canvas
let cnv = document.getElementById('cnv');
let ctx = cnv.getContext("2d");

//позиция игрока
let xp = 0;
let yp = 0;
//скорость
let speed = 10;

//массив окружения
let items = [];
//количество объектов окружения
let boxn = 0;
let blockn = 0;
//направление такнка
let tankDir = 0;
//начальная позиция пули
let bpx = 0;
let bpy = 0;


 
//отрисовка окружения
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






//Управление танком
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
      ctx.clearRect(xp,yp,30,30);
      yp -= speed;
      tank(xp,yp,1);  
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,1);  
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
      ctx.clearRect(xp,yp,30,30);
      xp -= speed;
      tank(xp,yp,4);
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,4);
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
      ctx.clearRect(xp,yp,30,30);
      yp += speed;
      tank(xp,yp,3);
    }
    else{
      ctx.clearRect(xp,yp,30,30);
      tank(xp,yp,3);
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
    ctx.clearRect(xp,yp,30,30);
    xp += speed;
    tank(xp,yp,2);
 	 }
  else{ 
    ctx.clearRect(xp,yp,30,30);
    tank(xp,yp,2);

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
  let block = {type:"block", id:blockn, x:x, y:y};
  blockn += 1;
  items.push(block);
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
  let box = {type:"box", id:boxn, x:x, y:y};
  boxn += 1;
  items.push(box);
}
//конструктор танка
function tank(x,y,r){
  tankDir = r;
  xp = x;
  yp = y;
  let deg;
  switch(tankDir){
    case 1:
      deg = Math.PI*3/2;
      break;
    case 2:
      deg = Math.PI*2;
      break;
    case 3:
      deg = Math.PI/2;
      break;
    case 4:
      deg = Math.PI;
      break;
  }
  ctx.save();
  ctx.translate(x+15,y+15);
  ctx.rotate(deg);
  let img = new Image();   // Create new img element
  img.src = 'tanck.png'; // Set source path
  ctx.drawImage(img, -15, -15, 30, 30);
  console.log(xp,yp,tankDir,img);
  ctx.restore();
}

//конструктор  пули
function bullet(x,y,r){
	let safeCount = 0;
	let yo = y;
  let xo = x;
    let bulletImg = new Image(); 
	switch(r){
		case 1:
			bulletImg.src = 'b1.png'; // Set source path
			ctx.drawImage(bulletImg, x, yo, 5, 15);
			while(yo>=0){
				yo-=3				
				ctx.clearRect(x, yo+3, 5, 15)
				ctx.drawImage(bulletImg, x, yo, 5, 15);

				console.log(bulletImg.src);

//столкновение с пулей
				for (var i = 0; i < items.length; i++) {
    if (((x - items[i].x) < 30 && (x - items[i].x)> -30 ) && (((yo - items[i].y) <=30)) && (yo - items[i].y)>= 0)  {
        console.log('kollisia')
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
     if (((items[i].x - xo) <= 30 && (items[i].x - xo)>= 0 ) && (((y - items[i].y) <30)) && (y - items[i].y)> -30)  {
        console.log('kollisia')
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
    if (((x - items[i].x) < 30 && (x - items[i].x)> -30 ) && (((items[i].y - yo) <=30)) && (items[i].y - yo)>= 0)  {
        console.log('kollisia')
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
     if (((xo - items[i].x) <= 30 && (xo - items[i].x)>= 0 ) && (((y - items[i].y) <30)) && (y - items[i].y)> -30)  {
        console.log('kollisia')
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

