/* 购物车跳转功能 */
define( [ "jquery" ], function(){
	class Cartlink{
		constructor(){
			this.init();
		};
		init(){
			this.logo_a = $( ".head_con h1" );
			this.pay = $( ".lijs" );


			this.logo_a.on( "click", $.proxy( this.to_index, this ) );
			this.pay.on( "click", $.proxy( this.to_pay, this ) );

		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
		to_pay(){
			self.location.href = "http://localhost:8888/html/buy_details.html";
		};
	};
	return new Cartlink();
} );