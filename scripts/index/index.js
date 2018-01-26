/* 业务逻辑页面 */
require( [ "../scripts/index/config.js" ], function(){
	require( [ "jquery", "cookie", "islogin", "rendering", "banner", "picks", "fixed", "search", "fixed_s", "brands", "blist", "lamp", "link", "cart", "href" ], function( $, cookie, islogin, rendering, banner, picks, fixed, search, s2, brands, blist, lamp, link, cart, href ){
		// 判断登录状态
		// islogin;

		// 渲染页面 => 通信ok
		rendering.init( "../data/index_data.json" );
		// 轮播图 => 通信ok
		banner.init();
		// 通信 => ok
		picks.init();
		// 相对定位 => ok
		fixed;
		// 模糊搜索 => ok
		search.init( $( ".search_list" ) );
		s2.init( $( ".fix_search_list" ) );
		// 品牌搜索 => ok
		brands;
		// 品牌细分 => ok
		blist;
		// 跑马灯 => ok
		lamp;
		// 链接
		link.init();
		// 购物车显示
		cart;

		// 跳转
		href;
	} );
} );