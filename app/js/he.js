//index的业务逻辑代码(最终拼装的过程)
//在该页面能实现其他功能就重新建立一个不同的业务逻辑代码
require(["config"],function(){
	require(["header","bord","border"],function(header,bord,border){
		header.init();
		bord.init();
		border.init();
	})
})