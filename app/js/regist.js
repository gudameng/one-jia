require(["config"],function(){
	require(["jquery","header","bord","border","template"],function($,header,bord,border,template){
		header.init();
		bord.init();
		border.init();
		


		var arr = [false,false,false];

		$("form").submit(function(e){
			var isSubmit = arr.every(function(item){
				return item == true;
			})
			if(!isSubmit){
				alert("请输入正确信息！")
			}else{
				$.ajax({
					"url":"http://localhost:80/dist/api/v1/ab.php",
					method:"GET",
					success:function(data){
						console.log(data);
						setTimeout(function(){
							window.location = "/html/login.html"
							alert("注册成功！")
						},1500)
					},
					data:{
						"username":$("#box1 input").val(),
						"password":$("#box2 input").val()
					},
					dataType:"text"
				})
			}
			e.preventDefault();
		});

		//手机号验证
		$("#box1 input").blur(function(){
			var re=/^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/;
			if(re.test($("#box1 input").val())){
				arr[0] = true;
				$("#box1 p").css("display","none");
			}else{
				arr[0] = false;
				$("#box1 p").css("display","block");
			}
		});

		//密码验证
		$("#box2 input").blur(function(){
			var reg = /^[0-9 | A-Z | a-z]{6,16}$/;
			if(reg.test($("#box2 input").val())){
				arr[1] = true;
				$("#box2 p").css("display","none");
			}else{
				arr[1] = false;
				$("#box2 p").css("display","block");
			}
		});

		//验证码
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
				arr[2] = true;
				$("#box3 p").css("display","none");
			}else{
				arr[2] = false;
				$("#box3 p").css("display","block");
			}
		});


	})
})