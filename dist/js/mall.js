"use strict";require(["config"],function(){require(["jquery","header","bord","border","template"],function(a,t,n,i,c){t.init(),n.init(),i.init(),a.ajax({url:"http://localhost:80/dist/api/v1/mall.php",method:"GET",success:function(t){t=JSON.parse(t);for(var n="",i=0;i<t.length;i++)n+='\n\t\t\t\t\t\t\t<div class="items" id="'.concat(i+1,'"><img src="').concat(t[i].pho,'">\n\t\t\t\t\t\t\t<p>').concat(t[i].text,"</br><span>").concat(t[i].span,"</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t");a("#content").html(n),a(".items").hover(function(){a(this).on("click",function(){var t=a(this).attr("id");window.location="/html/datails.html?id="+t})})},dataType:"text"})})});