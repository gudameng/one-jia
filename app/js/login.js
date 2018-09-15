require(["config"],function(){
	require(["jquery","header","bord","border","template"],function($,header,bord,border,template){
		header.init();
		bord.init();
		border.init();

		var arr = [false];
		$("form").submit(function(e){
			var isSubmit = arr.every(function(item){
				return item == true;
			})
			if(!isSubmit){
				alert("请输入正确信息！")
			}else{
				$.ajax({
					"url":"http://localhost:80/dist/api/v1/log.php",
					method:"GET",
					success:function(data){
						var data = data;
						var flag = false;
						for(var i = 0;i < data.length;i++){
							if(data[i].username == $("#box1 input").val() && data[i].password == $("#box2 input").val()){
								flag = true;
								if(flag){
									alert("登录成功，将要跳转到首页！");
									setTimeout(function(){
										window.location = "/index.html";
									},1500)
								};
							}
						}
						if(!flag){
							alert("用户名或密码错误");
						}
					},
					data:{
						"username":$("#box1 input").val(),
						"password":$("#box2 input").val()
					},
					dataType:"json"
				})
			}
			e.preventDefault();
		});

		(function lis(){
			$("#box3 span").html(function(){
			var st  ="0123456789abcdefghijklmnopqrstuvwxyz";
			var ar = [];
			for(var i=0; i<4;i++){
				var num = parseInt(Math.random()*st.length);
				ar.push(st.charAt(num));
			}
				return ar;
			})
		})();

		$("#box3 span").on("click",function(){
			$("#box3 span").html(function(){
			var st  ="0123456789abcdefghijklmnopqrstuvwxyz";
			var ar = [];
			for(var i=0; i<4;i++){
				var num = parseInt(Math.random()*st.length);
				ar.push(st.charAt(num));
			}
				return ar;
			})
		});
		$("#box3 input").blur(function(){
			var str = $("#box3 span").html();
			if($("#box3 input").val() == str){
				arr[0] = true;
			}else{
				arr[0] = false;
			}
		});
	})
})