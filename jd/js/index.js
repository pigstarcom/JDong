$(function(){
//顶部搜索框失复焦点时的效果
	var input=$("input")[0];
	input.onfocus=function(){
		input.value=null;
	}
	input.onblur=function(){
		input.value="联想Miix";
	}
//bannerleft 点击弹出效果
    var bjs=$(".bannerjump");
    var lis=$("li",$(".bannertopl")[0]);
    // console.log(bjs)
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;
    	lis[i].onmouseover=function(){
    		bjs[this.index].style.display="block";
    	}
    	lis[i].onmouseout=function(){
    		bjs[this.index].style.display="none";
    	}
    }
//banner 轮播图
  var imgs=$("img",$(".bannertopc")[0])
  var blis=$("li",$(".bannercir")[0]);
  var bca=$(".bannertopc")[0];
  // console.log(bc)
  var bjt=$(".bannerjt")[0];
  var djtl=$(".bannerjtl")[0];
  var djtr=$(".bannerjtr")[0];

   //鼠标移上 左右按钮显示
    bca.onmouseover=function(){bjt.style.display="block";}
    // bca.onmouseout=function(){bjt.style.display="none";} 


  var flaga=true;
	imgs[0].style.zIndex=2;
	var num=0;
	var ta=setInterval(move,1000)

 function move(){
		num++;
        if(num==imgs.length){
        	num=0;
        }
		for(var i=0;i<imgs.length;i++){
			
			animate(imgs[i],{opacity:0}) 
            blis[i].style.background="#3E3E3E";
		}
		blis[num].style.background="#B61B1F";
		animate(imgs[num],{opacity:1},function(){flag=true;});    //***********************
 }
  

   //底部选项卡
  for(var i=0;i<blis.length;i++){
      blis[i].index=i;
      blis[i].onclick=function(){
      	for(var j=0;j<blis.length;j++){ 
             blis[j].style.background="#3E3E3E";
             animate(imgs[j],{opacity:0});
		}
		blis[this.index].style.background="#B61B1F";
		animate(imgs[this.index],{opacity:1});
		num=this.index;  
      }
  }


    //鼠标移入图片停止移动
  bca.onmouseover=function(){
    clearInterval(ta);
  }
  bca.onmouseout=function(){
    ta=setInterval(move,1000);
  }

  //左右两边按钮
 djtr.onclick=function(){      
	if(flaga){	
	 	  move();	
       flaga=false;
	}
  flaga=true;
 }
 djtl.onclick=function(){
	if(flaga){
		flag=false;
		num--;
        if(num<0){
        	num=imgs.length-1;
        }
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0});
             blis[i].style.background="#3E3E3E";
		}
		animate(imgs[num],{opacity:1});
		blis[num].style.background="#B61B1F";
	}
	
  }
//right nav
        var ca=$(".up1")[0];
        var card=$(".down1")[0];
        var up1=$(".up1")[0];
        var ca2=$(".up2")[0];
        var card2=$(".down2")[0];
        // console.log(card2)
        var ca3=$(".up3")[0];
        var card3=$(".down3")[0];
        var ca4=$(".up4")[0];
        var card4=$(".down4")[0];
        var ca5=$(".up5")[0];
        var card5=$(".down5")[0];
        var ca6=$(".up6")[0];
        var card6=$(".down6")[0];
        var ca7=$(".up7")[0];
        var card7=$(".down7")[0];
        
   aa(ca,card); aa(ca2,card2); aa(ca3,card3); aa(ca4,card4); aa(ca5,card5); aa(ca6,card6);aa(ca7,card7); 
    function aa(x,y){
         x.onmouseover=function(){
          x.style.background="#c81623";
          animate(y,{left:-62},Tween.Quad.easeIn,200);
        }
       x.onmouseout=function(){
         x.style.background="rgb(102,102,102)";
          animate(y,{left:0},Tween.Circ.easeIn,200);
       }
      }

    ca6.onclick=function(){
      animate(document.body,{scrollTop:0});
      animate(document.documentElement,{scrollTop:0});
     }

//楼层里的选项卡
  var oli=$("li",$(".onetopr")[0]);
  var tli=$("li",$(".twotopr")[0]);
  var thli=$("li",$(".threetopr")[0]);
  var foli=$("li",$(".fourtopr")[0]);
  var elli=$("li",$(".eleventopr")[0]);
  var fili=$("li",$(".fivetopr")[0]);
  var sili=$("li",$(".sixtopr")[0]);
  var seli=$("li",$(".sevtopr")[0]);
  var eili=$("li",$(".eigtopr")[0]);
  var nili=$("li",$(".ninetopr")[0]);
  var teli=$("li",$(".tentopr")[0]);
  var twli=$("li",$(".twtopr")[0]);
  var oba=$(".onecrba");
  var obb=$(".onecrbb");
  var occ=$(".onecrcc");
  var ocd=$(".onecrcdd");
  var oce=$(".onecre5");
  var ocl=$(".onecrccl");
  var ocs=$(".onecrbs");
  var ocv=$(".onecrbe");
  var ocvi=$(".onecrbei");
  var ocni=$(".onecrni");
  var octi=$(".onecrti");
  var octw=$(".onecrctl");
  // console.log(oba);
 
  xzk(oli,oba)
  xzk(tli,obb)
  xzk(thli,occ)
  xzk(foli,ocd)
  // xzk(fiveli,oce)
  xzk(fili,oce)
  xzk(elli,ocl)
  xzk(sili,ocs)
  xzk(seli,ocv)
  xzk(eili,ocvi)
  xzk(nili,ocni)
  xzk(teli,octi)
  xzk(twli,octw)
  function  xzk(obj,box){
  	box[0].style.zIndex="2";
      var a=0;
      for(var i=0;i<obj.length;i++){
  	  obj[i].index=i;
  	  obj[i].onmouseover=function(){
  		for(var j=0;j<obj.length;j++){
  			box[j].style.display="none";
  		}
  		box[this.index].style.display="block";
  		a=this.index;
  	 }
    } 
  }
 
//小轮播
  var ocimg=$("a",$(".ocbox")[0]); //限定范围 因为下面可能也有a标签
	var ocli=$("li",$(".ocboxcir")[0]);
	var oc=$(".oc")[0];
	var btnl=$(".ocbtnl")[0];
	var btnr=$(".ocbtnr")[0];
	var widths=parseInt(getStyle(ocimg[0],"width"));

	// var flag=true;
	//初始化状态
	for(var i=0;i<ocimg.length;i++){
		if(i==0){
          continue;  //跳出循环执行下一步代码 2.把第一张图片单独放在window内
		}
		ocimg[i].style.left=widths+"px";  //作用:1.把所有图片放在window右边
	   ocli[0].style.background="red";  //点点与图片对应  1
        
	}
  //轮播
	var index=0;
	var next=0;
	var t=setInterval(moveR,3000);
	function moveR(){
		
		//下标更新
      next++;
      //判断边界
      if(next==ocimg.length){
          next=0;
      }
      //ocimg[next]就位
      ocimg[next].style.left=widths+"px";
      animate(ocimg[index],{left:-widths});
      ocli[index].style.background="#ccc"; //2

      ocli[next].style.background="red";   //3  
      animate(ocimg[next],{left:0});
      //更新index
      index=next;
	}
//鼠标放上去事件
    oc.onmouseover=function(){

    	clearInterval(t);
    }
    oc.onmouseout=function(){
    	t=setInterval(moveR,3000);
    }
//按钮点击事件
   for(var i=0;i<ocli.length;i++){
       ocli[i].index=i;
       ocli[i].onclick=function(){
       if(this.index==index){return;}	
       	//就位
       	if(this.index>index){
       	ocimg[this.index].style.left=widths+"px";
        ocli[index].style.background="#ccc";
        ocli[this.index].style.background="red";
       	//动画
       	animate(ocimg[index],{left:-widths},1000);
       	animate(ocimg[this.index],{left:0},1000);
       }
 
       	//更新
       	index=this.index;
        next=this.index;
       }
   }
//右键
btnr.onclick=function(){
	if(flag){
		flag=false;
		moveR();
   }	
}

btnl.onclick=function(){
	if(flag){
		flag=false;
		//下标更新
      next--;
      //判断边界
      if(next<0){
          next=ocimg.length-1;
      }
      //ocimg[next]就位
      ocimg[next].style.left=-widths+"px";
      

      animate(ocimg[index],{left:widths},function(){flag=true;},1000);
      ocli[index].style.background="#ccc"; 

      ocli[next].style.background="red";     
      animate(ocimg[next],{left:0},1000);
      //更新index
      index=next;
	}	
}

//楼层跳转
 var floors=$(".floor");
 var lileft=$("li",$(".leftnav")[0]);
 var ofs=$(".onef");
 // console.log(ofs)
  var cw=document.documentElement.clientWidth;
  var ch=document.documentElement.clientHeight;
  //每个楼层的offsetTop
 
  var floorArr=[];
  for(var i=0;i<floors.length;i++){
    floorArr.push(floors[i].offsetTop);
  }

//楼层跳转  点击按钮跳到相应楼层
 var flag=true; //aa 楼层跳转开关
 //search 开关
 var sflag=true;
  // console.log(lis)
   for(var i=0;i<lileft.length;i++){
    lileft[i].index=i;
    lileft[i].onclick=function(){
      flag=false;
      //点击相应楼层按钮变色
      // for(var j=0;j<lileft.length;j++){
      //   lileft[j].className="la";
      // }
      // lileft[this.index].className="onef";
      
    // var obj=document.body.scrollTop?document.body:document.documentElement;有问题
    // animate(obj,{scrollTop:floorArr[this.index]})
    animate(document.body,{scrollTop:floorArr[this.index]})
    animate(document.documentElement,{scrollTop:floorArr[this.index]})
    }
   }


//图片滚动 相应按钮变颜色
    // for(var i=0;i<floors.length;i++){
    //   if(ch+scrolltop>=floorArr[i]+100){
    //     for(var j=0;j<lileft.length;j++){
    //             lileft[j].className="";
    //     }
    //     lileft[i].className="hot";
    //   }
    // }

//node lunbo
var bottom=$(".bannerbottomr")[0];
// console.log(bottom)
 node(bottom,1)  
  function node(obj,num){

    var box=$(".bannerbottomrbox",obj)[0];
    var imgs=$("a",box);
    var widths=parseInt(getStyle(imgs[0],"width")); 
    var len=imgs.length;
    var bbjr=$(".bottomrjtr")[0];
    var bbjl=$(".bottomrjtl")[0];
    var bj=$(".bottomrjt")[0];
    // console.log(bbjr);
    var flag=true;
    //初始化  方便后台改数据
    box.style.width=widths*len+"px";

    var t=setInterval(moven,1000);

    bottom.onmouseover=function(){
      bj.style.display="block";
      clearInterval(t);
    }
    bottom.onmouseout=function(){
      t=setInterval(moven,1000);
      bj.style.display="none";
    }
    
    function moven(){
      animate(box,{left:-num*widths},function(){  
        for(var i=0;i<num;i++){
          var first=getChildFirst(box);
          console.log(first)
          box.appendChild(first); 
          box.style.left=0;
          flag=true;
        }           
      })
    }


    bbjl.onclick=function(){
        if(flag){
        flag=false;
        moven();
        }
    }

    bbjr.onclick=function(){
       if(flag){
        flag=false;
        movelb();
       }
     }
     
     function movelb(){
      for(var i=0;i<num;i++){
        var first=getChildFirst(box);
        var last=getChildLast(box);
        box.style.left=-num*widths+"px";
        //将最后一张图插到第一张图前面
        box.insertBefore(last,first);
        //动画  {left:0}==>最终的位置
        animate(box,{left:0},function(){
          flag=true;
        })
      }       
     }


  }

 
})