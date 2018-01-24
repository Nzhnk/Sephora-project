/* 跳转功能 */
define( [ "jquery" ], function(){
	class Link{
		constructor(){
			this.init();
		};
		init(){
			// 获取跳转的元素
			this.details_index = $( ".details_index" );
			this.details_goods_list = $( ".details_goods_list" );

			this.jxgw = $( ".jxgw" );
			this.ckgwc = $( ".ckgwc" );


			// 添加跳转功能
			
			this.details_index.on( "click", $.proxy( this.to_index, this ) );
			this.jxgw.on( "click", $.proxy( this.to_list, this ) );
			this.details_goods_list.on( "click", $.proxy( this.to_list, this ) );

			this.ckgwc.on( "click", $.proxy( this.to_cart, this ) );

		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
		to_list( e ){
			self.location.href = "http://localhost:8888/html/commodity_list.html";
			if( $( e.target ).attr( "class" ) === "jxgw" ){
				$( "#tip" ).fadeOut();
			};
		};
		to_cart(){
			self.location.href = "http://localhost:8888/html/shop_cart.html";
			$( "#tip" ).fadeOut();
		};
	};
	return new Link();
} );