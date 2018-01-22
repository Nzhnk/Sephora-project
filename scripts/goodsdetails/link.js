/* 跳转功能 */
define( [ "jquery" ], function(){
	class Link{
		constructor(){
			this.init();
		};
		init(){
			// 获取跳转的元素
			this.top_a1 = $( ".top_login" );
			this.top_a2 = $( ".top_register" );
			this.logo = $( ".logo" );
			this.details_index = $( ".details_index" );
			this.details_goods_list = $( ".details_goods_list" );
			this.shop_login = $( ".shop_login" );

			// 添加跳转功能
			
			this.logo.on( "click", $.proxy( this.to_index, this ) );
			this.details_index.on( "click", $.proxy( this.to_index, this ) );

			this.details_goods_list.on( "click", $.proxy( this.to_list, this ) );

			this.shop_login.on( "click", $.proxy( this.to_login, this ) );
			this.top_a1.on( "click", $.proxy( this.to_login, this ) );

			this.top_a2.on( "click", $.proxy( this.to_register, this ) );
		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
		to_list(){
			self.location.href = "http://localhost:8888/html/commodity_list.html";
		};
		to_login(){
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_register(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
	};
	return new Link();
} );