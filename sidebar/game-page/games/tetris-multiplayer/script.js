var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "green";
j78=false
waiting=false
tspin=false
pause=false
loose=false
rec=0
players=0
cline2=0
level=1
combo=0
score=0
totallines=0
nextlevel=0
BB2=""
g=[]
window.addEventListener('keydown', function (e) {
  g[e.keyCode] = true;
  console.log(e.keyCode)
  e.preventDefault();
  menukey(e.keyCode)
})
window.addEventListener('keyup', function (e) {
  g[e.keyCode] = false;
})
g[16]=false
colors=["#000000","#00ff00","#FFFF00","#FF00FF","#ff8400","#0000ff","#00ffff","#ff0000","#444444"]

tiles = []
render2=tiles

for (x = 0; x < 10; x++) {
  tiles[x] = []
  for (y = 0; y < 20; y++) {
    if ((x + y) % 2 == 1) {
      ctx.fillStyle = "#000000";
    } else {
      ctx.fillStyle = "#000000";
    }
    tiles[x][y] = 0
  }
}
color = "#FFFFFF"
rn = [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]]
peices=[
  [[[0, 0, 0, 0], [6, 6, 6, 6], [0, 0, 0, 0], [0, 0, 0, 0]],[[0, 6, 0, 0], [0, 6, 0, 0], [0, 6, 0, 0], [0, 6, 0, 0]],[[0, 0, 0, 0], [6, 6, 6, 6], [0, 0, 0, 0], [0, 0, 0, 0]],[[0, 6, 0, 0], [0, 6, 0, 0], [0, 6, 0, 0], [0, 6, 0, 0]]],
  [[[0,0,0,0],[0,2,2,0],[0,2,2,0],[0,0,0,0]],[[0,0,0,0],[0,2,2,0],[0,2,2,0],[0,0,0,0]],[[0,0,0,0],[0,2,2,0],[0,2,2,0],[0,0,0,0]],[[0,0,0,0],[0,2,2,0],[0,2,2,0],[0,0,0,0]]],
  [[[0,0,0,0],[0,0,3,0],[0,3,3,3],[0,0,0,0]],
[[0,0,0,0],[0,0,3,0],[0,0,3,3],[0,0,3,0]],
[[0,0,0,0],[0,0,0,0],[0,3,3,3],[0,0,3,0]],
[[0,0,0,0],[0,0,3,0],[0,3,3,0],[0,0,3,0]]],

[[[0,0,0,0],[0,4,4,4],[0,0,0,4],[0,0,0,0]],
[[0,0,4,0],[0,0,4,0],[0,4,4,0],[0,0,0,0]],
[[0,4,0,0],[0,4,4,4],[0,0,0,0],[0,0,0,0]],
[[0,0,4,4],[0,0,4,0],[0,0,4,0],[0,0,0,0]]],

[[[0,0,0,5],[0,5,5,5],[0,0,0,0],[0,0,0,0]],
[[0,0,5,0],[0,0,5,0],[0,0,5,5],[0,0,0,0]],
[[0,0,0,0],[0,5,5,5],[0,5,0,0],[0,0,0,0]],
[[0,5,5,0],[0,0,5,0],[0,0,5,0],[0,0,0,0]]],

[[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],
[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],
[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],
[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]],

[[[0,0,7,7],[0,7,7,0],[0,0,0,0],[0,0,0,0]],
[[0,7,0,0],[0,7,7,0],[0,0,7,0],[0,0,0,0]],
[[0,0,7,7],[0,7,7,0],[0,0,0,0],[0,0,0,0]],
[[0,7,0,0],[0,7,7,0],[0,0,7,0],[0,0,0,0]]]
]


bag=[...peices]
rotations=peices[Math.floor(Math.random()*7)]
rot2=0
x1 = 4
y1 = 4
floor=0
break1=false
move = function (x3, y3,rot) {
  
  for (y2 = 0; y2 < 4; y2++) {
    for (x2 = 0; x2 < 4; x2++) {
      if (rn[x2][y2] != 0) {
        tiles[x1 + x2][y1 + y2] = "0"
      }
    }
  }

  bob=function(){
    break1 = false
    for (y2 = 0; y2 < 4; y2++) {
      for (x2 = 0; x2 < 4; x2++) {
        if (rn[x2]!=undefined&&rn[x2][y2] != 0) {
          if (tiles[x1 + x2]!=undefined&&tiles[x1 + x2][y1 + y2] == "0") {
            //console.log(x1+x2+x3,y1+y2+y3)
          } else {
            break1 = true
            break
          }
        }
      }
    }
  }



  
  rot2=rot+rot2;
  rn=rotations[Math.abs(rot2 % 4)]

  x1 = x1 + x3
  y1 = y1 + y3
  bob()
  //i=0
  floor2=0
  if(break1){floor2=1}
  if(rot!=0){
    //console.log(rot)
  for(y52 = 0; y52 < 4; y52++){
    if (break1==false) {break}
    y1 = y1 - 1
    bob()
    if (break1==false) {break}
  }
   if (break1) {
      y1=y1+4
    }

  for(y52 = 0; y52 < 2; y52++){
    if (break1==false) {break}
    x1 = x1 - 1
    bob()
    if (break1==false) {break}
  }
   if (break1) {
     
      x1=x1+2
    }
    for(y52 = 0; y52 < 2; y52++){
    if (break1==false) {break}
    x1 = x1 + 1
    bob()
    if (break1==false) {break}
  }
     if (break1) {
      rot2=rot2-rot;
      x1=x1-2
      
    }
  }
if (break1 == false) {}else{
    x1 = x1 - x3
    y1 = y1 - y3
}
h23=y1
j234=break1
break1=false
rot2=Math.abs(rot2%4)
//console.log(rot2)
while(break1==false){
y1=y1+1
bob()
}
ghost=[x1,y1-1]
y1=h23
break1=j234  

  rn=rotations[Math.abs(rot2 % 4)]
  //console.log(break1)
  if (break1 == false) {
    break1 = false
    for (y2 = 0; y2 < 4; y2++) {
      for (x2 = 0; x2 < 4; x2++) {
        if (rn[x2][y2] != 0) {
          if (tiles[x1 + x2][y1 + y2] == "0") {
            if (rn[x2][y2] == 1) {
          tiles[x1 + x2][y1 + y2] = "1"
        }else if(rn[x2][y2] == 2){
tiles[x1 + x2][y1 + y2] = "2"
        }else if(rn[x2][y2] == 3){
tiles[x1 + x2][y1 + y2] = "3"
        }else if(rn[x2][y2] == 4){
          tiles[x1 + x2][y1 + y2] = "4"
        }//
        else if(rn[x2][y2] == 5){
          tiles[x1 + x2][y1 + y2] = "5"
        }
        else if(rn[x2][y2] == 6){
          tiles[x1 + x2][y1 + y2] = "6"
        }else if(rn[x2][y2] == 7){
          tiles[x1 + x2][y1 + y2] = "7"
        }

          } else {
            break1 = true
            break

          }
        }
      }
      if (break1) { break }
    }

  } else {

    for (y2 = 0; y2 < 4; y2++) {
      for (x2 = 0; x2 < 4; x2++) {
                        if (rn[x2][y2] == 1) {
          tiles[x1 + x2][y1 + y2] = "1"
        }else if(rn[x2][y2] == 2){
tiles[x1 + x2][y1 + y2] = "2"
        }else if(rn[x2][y2] == 3){
tiles[x1 + x2][y1 + y2] = "3"
        }else if(rn[x2][y2] == 4){
          tiles[x1 + x2][y1 + y2] = "4"
        }//
        else if(rn[x2][y2] == 5){
          tiles[x1 + x2][y1 + y2] = "5"
        }
        else if(rn[x2][y2] == 6){
          tiles[x1 + x2][y1 + y2] = "6"
        }else if(rn[x2][y2] == 7){
          tiles[x1 + x2][y1 + y2] = "7"
        }
      }
    }
  }


}

size = screen.height/40
g[38]=false
g[37]=false
g[39]=false
g[32]=false
g[67]=false
g[40]=false
g[16]=false
g[27]=false
g[88]=false
f=g
g38=0
g37=0
g39=0
downs=20
downc=0;
hold=[]
canhold=true
next=[]
next[0]=peices[Math.floor(Math.random()*7)]
next[1]=peices[Math.floor(Math.random()*7)]
next[2]=peices[Math.floor(Math.random()*7)]
next[3]=peices[Math.floor(Math.random()*7)]
id=""
timmy=0
importT =function(f2){
  //console.log(f2)
  k25=f2[1]
  //console.log("yeah2")
  console.log(f2[2])
  if(f2[2]>timmy){
    timmy=f2[2]
  if(f2[1].length>100){
    render2=[]
    for (x = 0; x < 10; x++) {
  render2[x] = []
  for (y = 0; y < 20; y++) {
    render2[x][y]=f2[1][y+x*20]
  }
}

  }
  }
  //console.log(f2[0])
  rec=rec+f2[0]
}
teeo23=""
win=false
wincheck=function(){
  if(k25==teeo23){
    win=true
  }
  teeo23=k25
}
exportT=function(f23){
  rec3=rec2
  rec2=0
  return JSON.stringify([rec3,(tiles+"").replace(/,/g, '')])
  
}
gameonline=function(){
//console.log("found it!")
fetch("https://tetris-serverside.mathman05.repl.co/set/"+id+"/"+exportT())


fetch("https://tetris-serverside.mathman05.repl.co/get/"+id).then(response => response.json()).then((g)=> {
  importT(g)
}).catch(console.error);

}
ctx.font = size+"px Arial";
waitloby=function(){
  //console.log("wating...")
  fetch("https://tetris-serverside.mathman05.repl.co/loby/"+id)
    .then(response => response.json())
    .then((g)=> {
      k24=g
      if(g[0]=="done"){
        clearInterval(joe)
        //console.log("found it!")
        setInterval(wincheck, 8000)
        joe=setInterval(gameonline, 100)
        k.destroy()
        waiting=false
      }
      })
    .catch(console.error);
}
online=function(){
  console.log("step1")
  fetch("https://tetris-serverside.mathman05.repl.co/getid").then(response => response.json())
.then((g)=> {
  console.log("step2")
  joe=setInterval(waitloby, 1000)
  id=g
  })
.catch(console.error);
}

customwait=function(){

}
joincustomloby=function(){
  console.log("step1")
  fetch("https://tetris-serverside.mathman05.repl.co/getid").then(response => response.json())
  .then((g)=> {
  console.log("step2")
  joe=setInterval(customwait, 1000)
  id=g
  })
.catch(console.error);
}
restart=function(yo){

  placed=true
  tspin=false
  lines=0
  if(yo){
  if(rotations==peices[2]){

    jio=[x1,y1]
    j78=true
    
    move(1,0,0)
    if(break1==true){
      move(-1,0,0)
      if(break1==true){
        move(0,-1,0)
        
        if(break1==true){
          tspin=true
        //if(j78){prompt("rot2,rot")}
        }
      }
    }
          for (y2 = 0; y2 < 4; y2++) {
    for (x2 = 0; x2 < 4; x2++) {
      if (rn[x2][y2] != 0) {
        tiles[x1 + x2][y1 + y2] = "0"
      }
    }
  }
  x1=jio[0]
  y1=jio[1]
  move(0,0,0)
  }
  }
  mem23=Math.floor(Math.random()*bag.length)
    rotations=next[0]
    next.splice(0,1)
    next[3]=bag[mem23]
    bag.splice(mem23,1)
    //console.log(peices.length)
    if(bag.length==0){
      bag=[...peices]
      //console.log("oh yeah")
    }
    canhold=true
    rot2=0
    x1 = 4
    y1 = -1
    floor=0
    check=true
    yo23=false
    
    for (y2 = 0; y2 < 4; y2++) {
    for (x2 = 0; x2 < 4; x2++) {
      if (rn[x2][y2] != 0) {
        if( tiles[x1 + x2][y1 + y2] != "0"&&tiles[x1 + x2][y1 + y2]!=undefined){
          loose=true
          new textbox(3,6,"score: "+score)
        }
      }
    }
  }
}
messages=["1","2","3","4","5"]
message=function(m2){
messages.splice(0,1)
messages[4]=m2
}

rec2=0
gameloop = function () {
    ctx.fillStyle = "#061c06";


    ctx.beginPath();
      ctx.fillRect(0, 0, 700, 500);
      ctx.stroke();
  if(g[27]==true){
    g[27]=false
    if(players==1){
    pause=pause==false
    }
  }
  if(pause||loose||players==0||waiting||win){
    if(loose){
      ctx.font = size+"px Arial";
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(size*2, size*4.25, size*14, size);
    ctx.rect(size*2, 4.25 * size, size*14, size);
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fillText("You Lost Refresh To Play Again",size*2,size*5)
    }else if(win){
    ctx.font = size+"px Arial";
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(size*2, size*4.25, size*14, size);
    ctx.rect(size*2, 4.25 * size, size*14, size);
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fillText("You Won Refresh To Play Again",size*2,size*5)
    }else if(pause){
      ctx.font = size+"px Arial";
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(size*6.66666667, size*4.25, size*7, size);
    ctx.rect(size*6.66666667, 4.25 * size, size*7, size);
    ctx.fillStyle = "green";
    ctx.stroke();
    ctx.fillText("esc to unpause",size*6.66666667,size*5)
    }
  }
  else{
  placed=false
  ctx.globalAlpha = 1;
  yo23=true

  if(g[16]){
    if(canhold){
      for (y2 = 0; y2 < 4; y2++) {
    for (x2 = 0; x2 < 4; x2++) {
      if (rn[x2][y2] != 0) {
        tiles[x1 + x2][y1 + y2] = "0"
      }
    }
  }
      if(hold[1]==undefined){
        hold=[...rotations]
        restart(false)
      }else{
        canhold=false
        mem1=[...rotations]
        rotations=[...hold]
        hold=[...mem1]
            x1 = 4
    y1 = -1
        
      }
    }
    g[16]=false
  }
  f=[...g]
  if(g[38]==true){
    if(g38==0){
    g38=10
     floor=floor-2/downs
    }else{
    g38=g38-1
    }
  }else{
    g38=0
  }
  if(g[88]==true){
    if(g88==0){
    g88=10
     floor=floor-2/downs
    }else{
    g88=g88-1
    }
  }else{
    g88=0
  }
  
  if(g[37]==true){
    if(g37==0){
    g37=2
     floor=floor-1/downs
    }else{
    g37=g37-1
    }
  }else{
    g37=0
  }
  if(g[39]==true){
    if(g39==0){
    g39=2
    floor=floor-1/downs
    }else{
    g39=g39-1
    }
  }else{
    g39=0
  }
  //console.log(Math.floor(g39/2)-Math.floor(g37/2), g[40],Math.floor(g38/10))
    if(g[32]==true){g[32]=false
    break1=false
    while(break1==false){
    
    move(0, 1,0)
    }
    floor=1000
    }
  if(g[67]){
    if(canhold){
      for (y2 = 0; y2 < 4; y2++) {
    for (x2 = 0; x2 < 4; x2++) {
      if (rn[x2][y2] != 0) {
        tiles[x1 + x2][y1 + y2] = "0"
      }
    }
  }
      if(hold[1]==undefined){
        hold=[...rotations]
        restart(false)
      }else{
        canhold=false
        mem1=[...rotations]
        rotations=[...hold]
        hold=[...mem1]
            x1 = 4
    y1 = -1
        
      }
    }
    g[67]=false
  }
  if(downc>=downs){
move(0, 1,0)
floor=floor+floor2
downc=0
  }else{
    downc++
  }
  
  
  move(Math.floor(g39/2)-Math.floor(g37/2), g[40],(3*Math.floor(g38/10))+(Math.floor(g88/10)))
  
  check=false
  if(floor>30/downs){
    restart(true)
  }
  h=true
  c2=[]
  ctx.strokeStyle = "green";
  ctx.lineWidth = "0";
  lines=0
  for (y = 0; y < 20; y++) {
    c2[y]=0
    for (x = 0; x < 10; x++) {
      if(tiles[x][y]=="0"){h=false;c2[y]++}
      ctx.beginPath();
      ctx.fillStyle = colors[tiles[x][y]]
      ctx.fillRect(x * size+size*5, y * size, size, size);
      ctx.rect(x * size+size*5, y * size, size, size);
      ctx.stroke();
      

    }
    
    if(c2[y]==0&&check){
      lines++
      for(x5 = 0; x5 < 10; x5++){
        tiles[x5].splice(y,1)
        tiles[x5].unshift("0")
        //console.log("yes")
      }
    }
  }
  if(placed){
    
    

  if(lines==4){
    if(BB2=="tetris"){
      message("Tetris B2B")
      BB2="tetris"
      score=score+800*level
    }else{
      message("Tetris")
      BB2="tetris"
      score=score+1200*level
    }
  }else if(lines==3){
    if(tspin){
      if(BB2=="TS")
      {
        message("T-spin triple B2B")
        BB2="TS"
        score=score+2400*level
      }else{
        message("T-spin triple")
        BB2="TS"
      score=score+1600*level
      }
    }else{
      BB2=""
      message("triple")
      score=score+500*level
    }
  }else if(lines==2){
    if(tspin){
      if(BB2=="TS")
      {
        message("T-spin double B2B")
        BB2="TS"
        score=score+1800*level
      }else{
        BB2="TS"
        message("T-spin double")
      score=score+1200*level
      }
    }else{
      BB2=""
      message("double")
      score=score+300*level
    }
  }else if(lines==1){
    if(tspin){
      if(BB2=="TS")
      {
        message("T-spin single B2B")
        BB2="TS"
        score=score+1200*level
      }else{
        message("T-spin single")
        BB2="TS"
      score=score+400*level
      }
    }else{
      message("single")
      BB2=""
      score=score+100*level
    }
  }else{
    if(tspin){
      score=score+100*level
      message("T-spin no lines")
    }else{
      message("")
    }
    combo=0
  }
  if(lines!=0){
 
    
    if(combo!=0){
      score=score+10*combo*level+50*level
      message(combo+1+" combo")
    }
    combo++
  }//----------------------
  rec2=rec2+Math.floor(lines*.8*(tspin+1))
  for(i13=0;i13<rec;i13++){
    for(x5 = 0; x5 < 10; x5++){
        tiles[x5].splice(0,1)
        if(x5==cline2){
          tiles[x5][19]=("0")
          //console.log()
        }else{
          tiles[x5][19]=("8")
        }
        
        
        //console.log("yes")
      }
      if(Math.random()>.6){
          cline2=Math.floor(Math.random()*10)
        }
    }
    rec=0
  }
  
  nextlevel=2.5*level**2+2.5*level
  totallines=totallines+lines
  if(totallines>nextlevel){
    level++
    
  }
  downs=21-level
  ctx.font = size+"px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("level:"+level,2,size*5)
  ctx.fillText("lines:"+(nextlevel-totallines),2,size*6)
  ctx.fillText("score:"+score,2,size*7)
  ctx.fillText(messages[4],2,size*8)
  ctx.fillText(messages[3],2,size*9)
  ctx.fillText(messages[2],2,size*10)
  ctx.fillText(messages[1],2,size*11)
  ctx.fillText(messages[0],2,size*12)
  for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[next[0][0][x][y]]
      ctx.fillRect(x * size+size*16, y * size, size, size);
      ctx.rect(x * size+size*16, y * size, size, size);
      ctx.stroke();
  }
  }
  for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[next[1][0][x][y]]
      ctx.fillRect(x*.5 * size+size*16, y*.5 * size+size*5, size*.5, size*.5);
      ctx.rect(x * size*.5 +size*16, y * size*.5+size*5, size*.5, size*.5);
      ctx.stroke();
  }
  }
    for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[next[2][0][x][y]]
      ctx.fillRect(x*.5 * size+size*16, y*.5 * size+size*8, size*.5, size*.5);
      ctx.rect(x * size*.5 +size*16, y * size*.5+size*8, size*.5, size*.5);
      ctx.stroke();
  }
  }
  for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[next[3][0][x][y]]
      ctx.fillRect(x*.5 * size+size*16, y*.5 * size+size*11, size*.5, size*.5);
      ctx.rect(x * size*.5 +size*16, y * size*.5+size*11, size*.5, size*.5);
      ctx.stroke();
  }
  }
  if(hold[0]!=undefined){


  for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[hold[0][x][y]]
      ctx.fillRect(x * size, y * size, size, size);
      ctx.rect(x * size, y * size, size, size);
      ctx.stroke();
  }
  }
    }else{
      for(y=0;y<4;y++){
    for(x=0;x<4;x++){
    
     ctx.beginPath();
      ctx.fillStyle = colors[0]
      ctx.fillRect(x * size, y * size, size, size);
      ctx.rect(x * size, y * size, size, size);
      ctx.stroke();
  }
  }
    }
    if(yo23){
    ctx.globalAlpha = 0.5;
    for(y=0;y<4;y++){
    for(x=0;x<4;x++){
      if(colors[rotations[rot2][x][y]]!=colors[0]){
     ctx.beginPath();
      ctx.fillStyle = colors[rotations[rot2][x][y]]
      ctx.fillRect((x+ghost[0]+5) * size, (y+ghost[1]) * size, size, size);
      ctx.rect((x+ghost[0]+5) * size, (y+ghost[1]) * size, size, size);
      ctx.stroke();
    }}}}
    ctx.globalAlpha = 1;
    //-------------------------------
    if(players==2){
    for (y = 0; y < 20; y++) {
    c2[y]=0
    for (x = 0; x < 10; x++) {
      if(render2[x][y]=="0"){h=false;c2[y]++}
      ctx.beginPath();
      ctx.fillStyle = colors[render2[x][y]]
      ctx.fillRect(x * size*.5+size*22, y * size*.5, size*.5, size*.5);
      ctx.rect(x * size*.5+size*22, y * size*.5, size*.5, size*.5);
      ctx.stroke();
    }
  }
  }
}
UIrender()
}
setInterval(gameloop, 1000/30)
