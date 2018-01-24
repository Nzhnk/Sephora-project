/* 购物车跳转功能 */
define( [ "jquery" ], function(){
	class Cartlink{
		constructor(){
			this.init();
		};
		init(){
			this.logo_a = $( ".head_con h1" );
			this.logo_a.on( "click", $.proxy( this.to_index, this ) );
		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
	};
	return new Cartlink();
} );