//定义bord模块
define(function(){
	function Bord(){
		Bord.prototype.init = function(){
			$("#bord").load("/html/component/bord.html",function(){});
		}
	}
	return new Bord();
})