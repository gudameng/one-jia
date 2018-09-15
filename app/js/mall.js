require(["config"],function(){
	require(["jquery","header","bord","border","template"],function($,header,bord,border,template){
		header.init();
		bord.init();
		border.init();

		$.ajax({
			"url":"http://localhost:80/dist/api/v1/mall.php",
			"method":"GET",
			success:function(data){
				data = JSON.parse(data);
				
				var str = "";
				for(var i=0; i <data.length; i++){
					str +=`
							<div class="items" id="${i+1}"><img src="${data[i].pho}">
							<p>${data[i].text}</br><span>${data[i].span}</span>
							</p>
						</div>
					`;
				}
				
				$("#content").html(str);

				$(".items").hover(function(){
					$(this).on("click",function(){
						var pId = $(this).attr("id");
						window.location = "/html/datails.html?id="+pId;
					})
				})
					
			},
			dataType:"text"
		})
	})
})