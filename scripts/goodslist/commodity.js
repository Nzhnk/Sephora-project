/*商品列表逻辑控制页面*/
require([ "../scripts/goodslist/config.js"], function(){
	require( [ "jquery", "cookie", "loading", "tabpage", "cart", "view", "href" ], function( $, cookie, loading, tab, cart, view, href ){		
		// 页面通信 => ok
		loading;

		// 切换 => ok
		tab;

		// 查看事件
		view;

		// 跳转
		href;
	} );
} );