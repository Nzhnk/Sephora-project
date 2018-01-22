/* 注册业务逻辑页面 */
require([ "../scripts/register/config.js"], function(){
	require( [ "jquery", "cookie", "rulesAndType", "dataTest", "link" ], function( $, cookie, rat, dt, link ){		
		// console.log( $ );
		
		// 跳转链接 => ok
		link;

		// 规则及注册方式切换 =>ok
		rat;

		// 正则验证
		dt;
	} );
} );