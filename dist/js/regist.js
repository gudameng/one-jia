"use strict";require(["config"],function(){require(["jquery","header","bord","border","template"],function(n,t,o,a,i){t.init(),o.init(),a.init();var r=[!1,!1,!1];n("form").submit(function(t){r.every(function(t){return 1==t})?n.ajax({url:"http://localhost:80/dist/api/v1/ab.php",method:"GET",success:function(t){console.log(t),setTimeout(function(){window.location="/html/login.html",alert("注册成功！")},1500)},data:{username:n("#box1 input").val(),password:n("#box2 input").val()},dataType:"text"}):alert("请输入正确信息！"),t.preventDefault()}),n("#box1 input").blur(function(){/^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/.test(n("#box1 input").val())?(r[0]=!0,n("#box1 p").css("display","none")):(r[0]=!1,n("#box1 p").css("display","block"))}),n("#box2 input").blur(function(){/^[0-9 | A-Z | a-z]{6,16}$/.test(n("#box2 input").val())?(r[1]=!0,n("#box2 p").css("display","none")):(r[1]=!1,n("#box2 p").css("display","block"))}),n("#box3 span").html(function(){for(var t="0123456789abcdefghijklmnopqrstuvwxyz",n=[],o=0;o<4;o++){var a=parseInt(Math.random()*t.length);n.push(t.charAt(a))}return n}),n("#box3 span").on("click",function(){n("#box3 span").html(function(){for(var t="0123456789abcdefghijklmnopqrstuvwxyz",n=[],o=0;o<4;o++){var a=parseInt(Math.random()*t.length);n.push(t.charAt(a))}return n})}),n("#box3 input").blur(function(){var t=n("#box3 span").html();n("#box3 input").val()==t?(r[2]=!0,n("#box3 p").css("display","none")):(r[2]=!1,n("#box3 p").css("display","block"))})})});