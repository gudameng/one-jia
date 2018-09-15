//定义header模块
define(function(){
	function Border(){
		Border.prototype.init = function(){
			//1、把header的html内容加载到对应的页面上
			//2、header的交互
			$("#border").load("/html/component/border.html",function(){
				//header的功能
			});
		}
	}

	return new Border();
})