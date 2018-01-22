/*登录逻辑控制页面*/
require([ "../scripts/login/config.js"], function(){
	require( [ "jquery", "cookie", "input", "reg", "link" ], function( $, cookie, inp, inspect, link ){		
		// 输入 => ok
		let user = new inp();
		user.init( $( ".user_input") );
		let pass = new inp();
		pass.init( $( ".pass_input") );
		// 正则 => ok
		inspect.init();
		// 跳转 => ok
		link.init();
	} );
} );