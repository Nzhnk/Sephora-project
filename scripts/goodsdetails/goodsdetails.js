/* 商品详情业务逻辑页面 */
require([ "../scripts/goodsdetails/config.js"], function(){
	require( [ "jquery", "cookie", "rendring", "glass", "link" ], function( $, cookie, rendring, glass, link ){		
		// 页面通信 => ok
		
		// 根据cookie渲染页面
		rendring;

		// 放大镜功能 
		glass;

		// 跳转功能
		link;
	} );
} );