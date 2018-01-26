/* 点击查看商品详情功能 */
define( [ "jquery", "cookie" ], function(){
	class View{
		constructor(){
			this.init();
		};
		init(){
			// 获取被点击的元素
			this.divs = $( ".p_cont" );
			let _this = this;
			this.divs.each( function( index ){
				_this.divs.eq( index ).on( "click", $.proxy( _this.d_click, _this ) );
			} );
		};
		d_click( e ){
			
			let div = $( e.delegateTarget );
			let $id = div.attr( "data_id" );
			// 将当前点击的元素data_id存入cookie中
			let sessionC = '{"goodsId":"'+$id+'"}';
			$.cookie( "goods", sessionC );
			// 并且跳转
			self.location.href = "commodity_details.html";
		};
	};
	return new View();
} );