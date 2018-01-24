/* 公用链接 */
define( [ "jquery" ], function(){
	class Href{
		constructor(){
			this.init();
		};
		init(){
			// 获取跳转元素
			this.top_a1 = $( ".top_login" );
			this.top_a2 = $( ".top_register" );

			this.logo = $( ".logo" );

			this.to_cart_a = $( ".to_shop_cart" );


			this.no_login_a = $( ".top_cart_msg" ).find( "a" );

			// 登录
			this.top_a1.on( "click", $.proxy( this.to_login, this ) );
			this.no_login_a.on( "click", $.proxy( this.to_login, this ) );

			// 首页
			this.logo.on( "click", $.proxy( this.to_index, this ) );

			// 注册
			this.top_a2.on( "click", $.proxy( this.to_register, this ) );
			
			// 购物车
			this.to_cart_a.on( "click", $.proxy( this.to_cart, this ) );

		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
		to_login(){
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_register(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
		to_cart(){
			self.location.href = "http://localhost:8888/html/shop_cart.html";
		};
	};
	return new Href();
} );