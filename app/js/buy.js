require(["config"],function(){
	require(["header","bord","border"],function(header,bord,border){
		header.init();
		bord.init();
		border.init();
	})
})