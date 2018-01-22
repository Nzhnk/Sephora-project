/*商品列表逻辑控制页面*/
require([ "../scripts/goodslist/config.js"], function(){
	require( [ "jquery", "cookie", "loading", "tabpage", "view" ], function( $, cookie, loading, tab, view ){		
		// 页面通信 => ok
		loading;

		// 切换 => ok
		tab;

		// 查看事件
		view;
	} );
} );