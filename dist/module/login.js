"use strict";require(["config"],function(){require(["jquery","header","bord","border","template"],function(o,t,n,a,r){t.init(),n.init(),a.init();var e=[!1];o("form").submit(function(t){e.every(function(t){return 1==t})?o.ajax({url:"http://localhost:80/dist/api/v1/log.php",method:"GET",success:function(t){t=t;for(var n=!1,a=0;a<t.length;a++)t[a].username==o("#box1 input").val()&&t[a].password==o("#pass").val()&&(n=!0)&&(alert("登录成功，将要跳转到首页！"),setTimeout(function(){window.location="/index.html"},1500));n||alert("用户名或密码错误")},data:{username:o("#box1 input").val(),password:o("#box2 input").val()},dataType:"json"}):alert("请输入正确信息！"),t.preventDefault()}),o("#box3 span").html(function(){for(var t="0123456789abcdefghijklmnopqrstuvwxyz",n=[],a=0;a<4;a++){var o=parseInt(Math.random()*t.length);n.push(t.charAt(o))}return n}),o("#box3 span").on("click",function(){o("#box3 span").html(function(){for(var t="0123456789abcdefghijklmnopqrstuvwxyz",n=[],a=0;a<4;a++){var o=parseInt(Math.random()*t.length);n.push(t.charAt(o))}return n})}),o("#box3 input").blur(function(){var t=o("#box3 span").html();o("#box3 input").val()==t?(e[2]=!0,o("#box3 p").css("display","none")):(e[2]=!1,o("#box3 p").css("display","block"))})})});