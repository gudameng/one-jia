require(["config"],function(){
	require(["jquery","header","bord","border","lunbo"],function($,header,bord,border,lunbo){
		header.init();
		bord.init();
		border.init();
		lunbo.init();
	})
})