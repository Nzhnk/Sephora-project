/* 跳转功能 */
define( [ "jquery" ], function(){
	class BuyLink{
		constructor(){
			this.init();
		};
		init(){
			this.divs = $( ".pay_type div" );
			this.pay_lj = $( ".lijs" );

			this.pay_line = $( ".settle_con" );
			this.dis_top = $( ".settle_con" ).offset().top;
			this.cH = $( window ).height();

			this.back_cart = $( ".all_check" );
			this.back_cart.on( "click", $.proxy( this.to_cart, this ) );

			this.divs.on( "click", $.proxy( this.border_change, this) );

			this.pay_lj.on( "click", $.proxy( this.to_end, this ) );

			$( window ).on( "scroll", $.proxy( this.fixed, this ) );

		};
		border_change( e ){
			$( e.delegateTarget ).addClass( "pay_act" );
			$( e.delegateTarget ).siblings().removeClass( "pay_act" );
		};
		to_cart(){
			self.location.href = "http://localhost:8888/html/shop_cart.html";
		};
		fixed(){
			let scroll = $( window ).scrollTop();
			if( ( scroll + this.cH ) <= this.dis_top ){
				this.pay_line.addClass( "fixed" );
			} else {
				this.pay_line.removeClass( "fixed" );
			};
		};
		to_end(){
			self.location.href = "http://localhost:8888/html/end.html";
		};
	};
	return new BuyLink();
} );