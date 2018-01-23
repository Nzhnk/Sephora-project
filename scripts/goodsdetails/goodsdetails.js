/* 商品详情业务逻辑页面 */
require([ "../scripts/goodsdetails/config.js"], function(){
	require( [ "jquery", "cookie", "rendring", "glass", "count", "add", "link" ], function( $, cookie, rendring, glass, count, add_cart, link ){		
		// 页面通信 => ok
		
		// 根据cookie渲染页面
		rendring;

		// 放大镜功能 
		glass;

		// 数量
		count;

		// 添加购物车
		add_cart;

		// 跳转功能
		link;
	} );
} );