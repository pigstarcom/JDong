//getElementsByClassName() 返回带有指定class指定名称的对象的集合
  // getClass(select) 获取具有指定class的元素的集合
  // select 指定的className
  // 思路： obj初始化
         //第一步：判断浏览器 document.getElementsByClassName 判断是否有此属性
  //       第二步：获取指定元素  true w3c ie高版本  document.getElementsByClassName
  //                      false ie低版本6-8
  //                      获取所有的元素
  //                      遍历所有元素
  //                      筛选  obj.className==select
  //                      arr.push(obj)
  //                      return arr;

// function getClass(select){
  //  if(document.getElementsByClassName){
  //      return document.getElementsByClassName(select); //select不加引号是变量，加了引号是要获取这个元素
  //  }
  //  else{
  //    var all=document.getElementsByTagName("*");
  //    var arr=[];
  //       for(var i=0;i<all.length;i++){
  //           if(all[i].className==select){
  //              arr.push(all[i]);
  //           }
  //       } 
  //       return arr;
  //  }
   
  // }
//上述方法缺点：当一个元素有多个类名时会被舍去
//obj指定的范围 如果传入指定的范围就在指定的范围内找，如果不传的话在全局范围下找
function getClass(select,obj){
  // var obj=obj||document
  var obj=obj?obj:document; //作用同上
    if(document.getElementsByClassName){
       return document.getElementsByClassName(select);
    }
   else{
    var all=document.getElementsByTagName("*");
    var arr=[];
        for(var i=0;i<all.length;i++){

          //每一个对象的className是否包含指定的select
            if(checkClass(all[i].className,select)){
               arr.push(all[i]);
            }
        } 
        return arr;
    }
   
  }
//解决同一div下有多个类名时 获取时会舍去  作用：判断classname内是否包含select
// classname=all[i].className
function checkClass(classname,select){
    var arr=clssname.split(" ");
      for(var i=0;i<arr.length;i++){
        if(arr[i]==select){
          return true;
        } 
        // else{return false;} //else不能写在内部 如果第一个就不相等的话直接执行else,就不会继续比较后面的值了
      }
      return false;  
  }

//修改某个对象中的内容
  // setContent(one,"abc")  此函数 inner传值功能是添加修改 不传功能是获取
//function setContent(obj,inner){
//    if(obj.innerText){
//      obj.innerText=inner;
//    }
//    else{
//      obj.textContent=inner;
//    }
//   }

//设置 修改 文本
function setContent(obj,inner){
    if(inner==undefined){
        if(obj.innerText){
      return obj.innerText;
    }
       else{
      return obj.textContent;
       } 
    }
    else{
        if(obj.innerText){
      obj.innerText=inner;
        }
        else{
      obj.textContent=inner;
    }
    }
  }


//简化操作
  //$(".one");  $("#one")  $("div");  $(string)获取页面中的元素 
  //".one" 获取指定类名元素的集合。
 //思路：1.判断字符串的首字符  2..getClass()  #document.getElementById('')  标签 document.getElementsByTagName
  function  $(selector,context){
    if(typeof selector=="string"){
       var context=context||document;
       var selector=trim(selector);//44444444
        if(selector.charAt(0)=="."){
          return getClass(selector.slice(1),context);
        }else if(selector.charAt(0)=="#"){
        return document.getElementById(selector.slice(1));
        }else if(/^[a-z][a-z1-6]{0,8}$/.test(selector)){
        return context.getElementsByTagName(selector);
        }else if(/^<[a-z][a-z1-6]{0,8}>$/.test(selector)){   //创建元素
          return document.createElement(selector.slice(1,-1));
        }
    }else if(typeof selector=="function"){
        // window.onload=function(){
        //   selector(); 
        // }
        addEvent(window,"load",selector);

    }
    
  }

   function  trim(str,type){
      var type=type||"both";
        if(type=="left"){
          var reg=/^\s*/;
          return str.replace(reg,"")
        }
        else if(type=="right"){
            var reg=/\s*$/;
            return str.replace(reg,"")
        }
        else if(type=="both"){
            var reg=/^\s*|\s*$/g;
            return str.replace(reg,"")
        }
        else if(type=="all"){
            var reg=/\s*/g;
            return str.replace(reg,"")
        }
    }


//获取样式
  // getStyle(one,"width")

  function getStyle(obj,attr){
    if(obj.currentStyle){
      //IE
      return obj.currentStyle[attr];//为什么要用[] .attr 是获取attr的属性 [attr]获取attr的值
    }
    else{
      //FF 
      return getComputedStyle(obj,null)[attr];
    }
  }
  
//获取指定元素的子节点 obj:指定的对象 type:获取子节点的类型  
//思路：
//第一步：获取所有子节点 
//第二步：声明一个空数组
//第三步：遍历所有子节点  通过子节点的类型  
//true   child[i].nodeType==1 
//false  child[i].nodeType==1||(child[i].nodeType==3&&!(/^\s+$/.test(child[i]).nodeType))
//第四步：返回数组  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // function getChild(obj,type){
  //   var child=obj.childNodes; //获取所有子节点
  //   var type=type===undefined?true:type; //===处==也可以 不传true 传是true  
  //   var arr=[];
  //   for(var i=0;i<child.length;i++){ //所有子元素都放在了child内 遍历child所有子元素
  //     if(type===true){
  //       if(child[i].nodeType==1){  //获取元素节点
  //         arr.push(child[i]);
  //       }else{
  //       if(child[i].nodeType==1||(child[i].nodeType==3&&!(/^\s+$/.test(child[i].nodeValue))){ //是文本但非空时才放入 排除空格
  //          arr.push(child[i]);
  //       }
  //     }
  //   } 
  //   return arr;
  // }
// //获取第一个子元素
// function firstChild(obj,type){
//   return getChild(obj,type)[0];
// }
// function lastChild(obj,type){
//   return length=getChild(obj,type).length;
//   return getChild(obj,type)[length-1];
// }
// //取任意节点
// function randomChild(obj,type,num){
//   return getChild(obj,type)[num];
// }
// //获取下一个兄弟节点
// //思路：第一步：判断obj是否有下一个兄弟元素
// //第二步：没有 false
// // 有 更新next =next.nextSibling
// //      next 判断是否为空
//只获取标签元素但是没有文本
// function getNext(obj){
//       var next =obj.nextSibling;
//       if(next==null){
//         return  false;
//       }
//       while(next.nodeType==8||next.nodeType==3){
//         next=next.nextSibling;
//         if(next==null){
//         return  false;
//       }
//       }
//       return next;
// }
// //获得上一个兄弟节点的引用
// function getPre(obj){
//       var pre =obj.previousSibling;
//       if(pre==null){
//         return  false;
//       }
//       while(pre.nodeType==8||pre.nodeType==3){
//         pre=pre.previousSibling;
//         if(pre==null){
//         return  false;
//       }
//       }
//       return pre;
// }

function space(str,type){
  type=type||"lr";
     if(type=="a"){
      return str.replace(/\s*/g,"");
     }if(type=="l"){
      return str.replace(/^\s*/g,"");
     }if(type=="r"){
      return str.replace(/\s*$/g,"");
     }if(type=="lr"){
      return str.replace(/^\s*|\s*$/g,"");
     }
}


function getChilds(obj,type){
  var childs=obj.childNodes;
  var arr=[];
  type=type||"a";
  if(type=="b"){//不要文本
    for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
    }
  }
  return arr;
  }else{
    for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1||(childs[i].nodeType==3&&space(childs[i].nodeValue)!="")){
      arr.push(childs[i]);
    }
  }
  return arr;
  }
}

function getChildFirst(obj,type){
  return getChilds(obj,type)[0];
}

function getChildLast(obj,type){
  var m=getChilds(obj,type);
  return m[m.length-1];
}

function getChildNum(obj,type,num){
  var m=getChilds(obj,type);
  return m[num-1];
}
  
//nextSibling
  function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==8||(next.nodeType==3&&space(next.nodeValue)=="")){
      next=next.nextSibling;
      if(next==null){
        return false;
      }
    }
    return next;
  }

  function getPrevious(obj){
    var previous=obj.previousSibling;
    if(previous==null){
      return false;
    }
    while(previous.nodeType==8||(previous.nodeType==3&&space(previous.nodeValue)=="")){
      previous=previous.previousSibling;
      if(previous==null){
        return false;
      }
    }
    return previous;
  }


// inserAfter(obj,obj1) 将obj插入到obj1的后面
//思路：将obj插入到obj1下一个兄弟节点的前面
//1.获取obj1的下一个兄弟节点
//2.判断兄弟节点  true parent.insertBefore(obj,next)
              // false  parent.appendChild(obj)
function inserAfter(obj,obj1){
  var parent=obj1.parentNode;
  var next=getNext(obj1);//只往元素前插
  if(next){
     parent.insertBefore(obj,next);
  }
  else{
    parent.appendChild(obj);
  }
}
//将obj插入到obj1的前面
// function inserBefore(obj,obj1){
//   var parent=obj1.parentNode;
//   parent.insertBefore(obj,obj1);
// }
// //appendBefore(obj,obj1) obj要插入的元素 
// //将obj插入到父元素obj1的最前面
// //思路：1.找到obj1的第一个子元素
// //2.true obj1.insertBefore(obj,first)
// //  false  obj1.appendChild(obj)
// function appendBefore(obj,obj1){
//   var first=getChildFirst(obj1);
//   if(first){
//     obj1.insertBefore(obj,first)
//   }
//   else{obj1.appendChild(obj);}
// }



// function appendChild(obj,obj1){
//   var parent=obj1.parentNode;
//   parent.appendChild(obj,obj1);
// }



//同一个事件绑定多个事件处理程序
// IE:
// 对象.attachEvent("事件(on)",move) 添加
// 对象. detachEvent("事件(on)","处理程序") 删除
// FF:
// 对象.addEventListener("事件","处理程序",布尔值)  添加
// 对象.removeEventListener("事件","处理程序",布尔值) 删除
//添加的兼容
//同一个事件绑定多个事件处理程序
// IE:
// 对象.attachEvent("事件(on)",move) 添加
// 对象. detachEvent("事件(on)","处理程序") 删除
// FF:
// 对象.addEventListener("事件","处理程序",布尔值)  添加
// 对象.removeEventListener("事件","处理程序",布尔值) 删除
//添加的兼容
 function  addEvent(obj,type,fn){
   if(obj.attachEvent){
      obj.attachEvent("on"+type,fn);
   }
   else{
      obj.addEventListener(type,fn,false)
   }
  } 
//删除的兼容
 function removeEvent(obj,type,fn){
  if(obj.attachEvent){
      obj. detachEvent("on"+type,fn)
   }
    else{
      obj.removeEventListener(type,fn,false)
    }
  
 }

//获取obj距离浏览器的距离
//  function offset(obj){
//   var result={left:0,top:0};
//   var arr=[];
//   arr.push(obj);
//   //获取所有具有定位属性的父元素
//   var parent=obj.parentNode;
//   while(parent.nodeName!=="BODY"){
//     // parent.style.position 不能这样写 因为每个元素都有定位属性  这种方式只能获取行内样式
//     if(getStyle(parent,"position")=="relitive"||getStyle(parent,position)=="absolute")
//       {arr.push(parent);}
//     parent=parent.parentNode;
//   }
//   //
//   for(var i=0;i<arr.length;i++){
//     var left=arr[i].offsetLeft;
//     var borderLeft=getStyle(arr[i],"border-left")?parseInt(getStyle(arr[i],"border-left")) 
//     if(i==0){
//       borderLeft=0;
//     }
//     var top=arr[i].offsetTop;
//     var borderTop=getStyle(arr[i],"border-top")?parseInt(getStyle(arr[i],"border-top")) 
//     if(i==0){
//       borderTop=0;
//     }
//      result.left+=(left+borderLeft);
//      result.top+=(top+borderTop);

//   }
// }

//鼠标滚轮事件的兼容性
// mousewheel(document,function(){alert(1)},function(){alert(2)});
   function mousewheel(obj,downFn,upFn){
        if(document.attachEvent){
           document.attachEvent("onmousewheel",scrollFn); //IE、opera
           }else if(document.addEventListener){
           document.addEventListener("mousewheel",scrollFn,false); 
           //chrome,safari -webkit
           document.addEventListener("DOMMouseScroll",scrollFn,false); 
           //firefox -moz-
         }

         function scrollFn(e){
          var ev=e||window.event;
          var dir=ev.wheelDelta||ev.detail;
          //浏览器有默认行为，切换过程中会减一半再回原状 出效果
          //阻止浏览器默认行为的方法：
          if (ev.preventDefault ){
              ev.preventDefault(); //阻止默认浏览器动作(W3C) 
          } else{
               ev.returnValue = false;//IE中阻止函数器默认动作的方式
          } 
               
           if(dir==-120||dir==3){
            // downFn();
            //在index.js中如果想要用this 需要在此处冒充
            downFn.call(obj);
           }
           if(dir==120||dir==-3){
            // upFn();
            upFn.call(obj);
           }

         }
   }


    //如何新建一个cookie
    setCookie("user","zhangshan",10);
    setCookie("password","123456");
    function setCookie(name,value,expires){
      if(expires){
        var date=new Date();
        date.setTime(date.getTime()+expires*1000*60)
        document.cookie=name+"="+value+";expires="+date;
      }else{
        document.cookie=name+"="+value;
        //临时cookie
      }
    }

    //如何删除一个cookie
        delcookie("user")
        function delcookie(name){
          var date=new Date();
          date.setTime(date.getTime()-2000*60)
          document.cookie=name+"=aa;expires="+date;
        }


       
        // //如何获取cookie中的内容
         alert(getCookie("password")) 
        function getCookie(name){
          //arr=["user=zhangsan","pass=123456","style=styles4"]
          //按=分割  user zhangsan  pass  123456  style  styles4
          var cookie=document.cookie;
          var arr=cookie.split("; ");  //arr=["user=zhangsan","pass=123456","style=styles4"]
          for(var i=0;i<arr.length;i++){
            var arr1=arr[i].split("=");
            if(arr1[0]==name){
              return arr[1];
            }
          }
        }


// ajax({url:"new.php",//必传
  // type:"GET"  //可传 GET  不传给默认值
  // data:   
  //asynch:true;   
   //"name"="zhangsan"&"age"=18  
   //{"name":"zhangsan","age":18}  此种传法要处理 对象的方式传
   // dataType:"json",  //text json xml  返回数据的类型
   // success:function(){  访问成功后如何处理数据}
   // }）

// ajax({
//   url:"new.php",
//   type:"GET",
//   data:"name:"+data,
//   dataType:"json",
//   success:function(arr){
//       for(var i=0;i<arr.length;i++){
//             var div=document.createElement("div");
//             if(arr1[0]==name){
//               return arr[1];
//             }
//           }
//   }
// })
function ajax(obj){
  var obj=obj||{};
  if(!obj.url){
    return;
  }
  //初始化参数 type asynch dataType  data
  var type=obj.type?obj.type:"GET";
  var asynch=obj.asynch?obj.asynch:true;
  var dataType=obj.dataType?obj.dataType:"json";

  var data="";
  if(typeof obj.data=="string"){
    data=obj.data;
  }else if(typeof obj.data=="object"){
    for(var i in obj.data){
      data+=(i+"="+obj.data[i]+"&");  //不加i一直在执行
    }
     data=data.slice(0,-1);
   
  }
  // xml.open(type,obj.url+"?name="+data)
 var xml=XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
 if(type=="GET"){
  xml.open(type,obj.url+"?"+data,asynch);
  xml.send(null);
 }else if(type=="POST"){
  xml.open(type,obj,url,asynch);
  xml.setRequest
 }


 xml.onreadystatechange=function(){
          if(xml.readyState==4){
            if(xml.status==200){
              // console.log(xml.responseText);
              if(dataType=="text"){
                obj.success(xml.responset);
              }else if(dataType=="json"){
                obj.success(eval("("+xml.responseText+")"))
              }
            }
          }
        }

}




