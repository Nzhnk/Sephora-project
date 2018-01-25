/* 支付业务逻辑页面 */
require( [ "../scripts/buy/config.js" ], function(){
	require( [ "jquery", "cookie", "cart", "address", "add_dz", "creat_add", "buy_status", "link" ], function( $, cookie, cart, address, add_dz, creat_add, buy_status, link ){
		// 通信测试 => ok
		// 判断登录
		cart;

		// 省市区三级联动菜单
		add_dz;

		// 创建新地址
		creat_add;

		// 购买商品
		buy_status;

		// 跳转
		link;
	} );
} );