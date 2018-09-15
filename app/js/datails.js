require(["config"],function(){
	require(["jquery","header","bord","border","template"],function($,header,bord,border,template){
		header.init();
		bord.init();
		border.init();

		var n = decodeURI(location.search);
		var n1 = new Array();
		n1 = n.split("?");
		var nu = n1[1].split("=");
		var num = nu[1];
		$.ajax({
			"url":"http://localhost:80/dist/api/v1/datails.php",
			method:"GET",
			success:function(data){
				var data = data;
				data = JSON.parse(data);
				

				var str = "";
				str =`<div class="lf" id="lf">
						<img src="${data[0].pho1}" class="nm">
						<img src="${data[0].pho2}">
						<img src="${data[0].pho3}">
					</div>
					<div class="md" id="md">
						<p id="big"><a href="javascript:;">&lt;</a></p>
						<div id="box"><a href="javascript:;"><ol>
							<li class="photo"><img src="${data[0].pho1}"></li>
							<li><img src="${data[0].pho2}"></li>
							<li><img src="${data[0].pho3}"></li>
						</ol></a></div>
						<p id="small"><a href="javascript:;">&gt;</a></p>
					</div>
					<div class="rg" id="rg">
						<h3>${data[0].p1}</h3>
						<h2>${data[0].p2}</h2>
						<img src="/images/three/bg.jpg">
						<p>${data[0].p3}</p>
						<button>加入购物车</button>
					</div>`;

				$("#bottom").html(str);
				$("button").on("click",function(){
					window.location = "/html/buy.html?id="+num;
				});
				var index=0;
				$(".lf img").on("click",function(){
					$(this).addClass("nm").siblings().removeClass("nm");
					index = $(this).index();
					$("#box ol li").eq(index).addClass("photo").siblings().removeClass("photo");
				})
				$("#big").on("click",function(){
					if(index <= 0){
						index = 2;
						$("#lf img").eq(index).addClass("nm").siblings().removeClass("nm");
						$("#box ol li").eq(index).addClass("photo").siblings().removeClass("photo");
						return index;
					}
					else if(index>0){
						index = index-1;
						$("#lf img").eq(index).addClass("nm").siblings().removeClass("nm");
						$("#box ol li").eq(index).addClass("photo").siblings().removeClass("photo");
						return index;
					}
						
				})
				$("#small").on("click",function(){
					if(index >= 2){
						index = 0;
						$("#lf img").eq(index).addClass("nm").siblings().removeClass("nm");
						$("#box ol li").eq(index).addClass("photo").siblings().removeClass("photo");
						return index;
					}
					else if(index<2){
						index = index+1;
						$("#lf img").eq(index).addClass("nm").siblings().removeClass("nm");
						$("#box ol li").eq(index).addClass("photo").siblings().removeClass("photo");
						return index;
					}
						
				})

				
			},
			data:{
				"num":num
			},
			dataType:"text"
		});
	})
})