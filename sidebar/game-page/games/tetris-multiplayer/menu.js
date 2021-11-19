function textwidth(txt){
    if(textwidth.c === undefined){
        textwidth.c=document.createElement('canvas');
        textwidth.ctx=textwidth.c.getContext('2d');
    }
    var fontspec = size + "px Arial";
    if(textwidth.ctx.font !== fontspec)
        textwidth.ctx.font = fontspec;
    return textwidth.ctx.measureText(txt).width;
}//not my code(just the function everything else is mine)
focus1=""
mousec={}
menu1=0
buttons=[]
mouse=function(event){
  mousec.x=event.clientX-size*.5;
  mousec.y=event.clientY-size*.5;
  mousec.lbutton=event.buttons%2==1;
  mousec.rbutton=event.buttons%4==2||event.buttons%4==3;
}

class button{
  constructor(x,y,text,onclick) {
    this.x = x;
    this.y = y;
    this.text=text;
    this.onclick=onclick
    this.clicking=false
    this.index=buttons.length
    buttons[buttons.length]=this
  }
  render(){
    ctx.beginPath();
    if(mousec.x>this.x*size&&mousec.y>this.y*size&&
    mousec.x<this.x*size+ textwidth(this.text)&&mousec.y<this.y*size+size
    ){
      if(mousec.lbutton&&this.clicking==false){
        this.onclick()
      }
      ctx.fillStyle = "#262626";
      je="pointer"
    }else{
      ctx.fillStyle = "black";
    }
    ctx.fillRect(this.x*size, this.y*size,textwidth(this.text), size);
    ctx.rect(this.x*size, this.y*size,textwidth(this.text), size);
    ctx.fillStyle = "green";
    ctx.fillText(this.text,this.x*size,this.y*size+.75*size)
    ctx.stroke();
    this.clicking=mousec.lbutton
  }
  destroy(){
    buttons[this.index]=""
  }

}
class inputtext{
  constructor(x,y,width,emptytext,onenter) {
    this.x = x;
    this.y = y;
    this.emptytext=emptytext;
    this.width=width;
    this.text="";
    this.onenter=onenter
    this.clicking=false
    this.index=buttons.length
    buttons[buttons.length]=this
  }
  render(){
    ctx.beginPath();
    if(mousec.x>this.x*size&&mousec.y>this.y*size&&
    mousec.x<this.x*size+this.width*size&&mousec.y<this.y*size+size
    ){
      if(mousec.lbutton&&this.clicking==false){
        focus1=this
      }
      ctx.fillStyle = "#101010";
      je="text"
    }else{
      ctx.fillStyle = "black";
      if(mousec.lbutton&&this.clicking==false&&focus1==this){
        focus1=""
      }
    }
    var d = new Date();
    var n = Math.floor(d.getTime()/1000)%2==1;
    ctx.fillRect(this.x*size, this.y*size,this.width*size, size);
    ctx.rect(this.x*size, this.y*size,this.width*size, size);
    ctx.fillStyle = "green";
    var text2=this.text
    if(textwidth(text2)>this.width*size){
      while(textwidth(text2+this.text[this.text.length-1])>this.width*size){
        text2=text2.slice(1, this.text.length - 1)
      }
      text2=text2+this.text[this.text.length-1]
    }else if(text2==""){
      text2=this.emptytext//#006300
      ctx.fillStyle = "#003300";
    }
    if(focus1==this&&n){
      ctx.fillText(text2+"|",this.x*size,this.y*size+.75*size)
    }else{
      ctx.fillText(text2,this.x*size,this.y*size+.75*size)
    }
    
    ctx.stroke();
    this.clicking=mousec.lbutton
  }
  destroy(){
    buttons[this.index]=""
  }
  updatetext(in2){
    if(g[16]==false){
      this.text=this.text+String.fromCharCode(in2).toLowerCase();
    }else{
    this.text=this.text+"!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM"["1234567890qwertyuiopasdfghjklzxcvbnm".indexOf(String.fromCharCode(in2).toLowerCase())];
    }
  }
  enter(){
    this.onenter()
  }
  backspace(){
    this.text=this.text.slice(0, this.text.length - 1);
  }
}
class textbox{
  constructor(x,y,text) {
    this.x = x;
    this.y = y;
    this.text=text;
    this.index=buttons.length
    buttons[buttons.length]=this
  }
  render(){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(this.x*size, this.y*size,textwidth(this.text), size);
    ctx.rect(this.x*size, this.y*size,textwidth(this.text), size);
    ctx.fillStyle = "green";
    ctx.fillText(this.text,this.x*size,this.y*size+.75*size)
    ctx.stroke();
  }
  destroy(){
    buttons[this.index]=""
  }
}

UIrender=function(){
  je="initial"
  for (button2 in buttons) {
    if(buttons[button2]!=""){
    buttons[button2].render()
    }
  }
  c.style.cursor=je
}
menukey=function(in2){
  console.log(String.fromCharCode(in2))
  //13 is enter
  //8 is backspace
  if(focus!=""){
  if((in2>47&&in2<91)||in2==32){
    if(focus1!=""){
    focus1.updatetext(in2)
    }
  }else if(13==in2){
    focus1.enter()
    focus1=""
  }else if(8==in2){
    focus1.backspace()
  }
  }
}
/*
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(size*2, size*4.25, size*14, size);
      ctx.rect(size*2, 4.25 * size, size*14, size);
      ctx.fillStyle = "green";
      ctx.stroke();
      ctx.fillText("Single Plyer 1 Multiplayer 2",size*2,size*5)
*/
k=new button(2,5,"Single Player",function(){
  console.log("1")
  k2.destroy()
  k1.destroy()
  k.destroy()
  c.style.cursor="initial"
  players=1
})
k1=new button(2,7,"Follow ComputerConnor on Instagram",function(){
  window.open("https://www.instagram.com/computerconnor/?hl=en")
})
k2=new button(2,3,"Multiplayer",function(){
  players=2
  waiting=true
  console.log("2")
  k2.destroy()
  k1.destroy()
  k.destroy()
  k=new textbox(2,2,"Multiplayer")
  /*k2=new inputtext(2,6,10,"enter lobby code",function(){
    k.destroy()
    k1.destroy()
    k2.destroy()
    k=new button(2,3,"start game",function(){
    k1.destroy()
    k2.destroy()
    k3.destroy()
    k4.destroy()
    k5.destroy()
    k.destroy()
    startcustom();
    })
    k1=new textbox(2,5,"1/4 players in lobby")
    k2=new textbox(2,7,"line to send ratio")
    k3=new textbox(3.2,8,.6)
    k4=new button(2,8," + ",function(){
      k3.text=k3.text+.1
      k3.text=Math.round(k3.text*10)/10
    })
    k5=new button(4.7,8," - ",function(){
      k3.text=k3.text-.1
      k3.text=Math.round(k3.text*10)/10
      if(k3.text==-.1){
        k3.text=0
      }
    })
    joincustomloby()
  })*/
  k1=new button(2,4,"Random Lobby",function(){
    c.style.cursor="initial"
    online()
    k.destroy()
    k1.destroy()
    k2.destroy()
    k=new textbox(2,2,"Waiting for Other Players")
    })
})
