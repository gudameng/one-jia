require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"header": "module/header",
		"bord": "module/bord",
		"border": "module/border",
		"lunbo": "module/lunbo",
		"zc":"api/v1/zc",
		"md5":"libs/md5",
		"template":"libs/template-web"
	},
	shim: {
		header:{
			deps:["jquery"]
		},
		bord:{
			deps:["jquery"]
		},
		border:{
			deps:["jquery"]
		},
		lunbo:{
			deps:["jquery"]
		}
	}
})