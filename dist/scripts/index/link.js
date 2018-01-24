define( [ "jquery" ], function(){
	class Link{
		constructor(){};
		init(){
			// 获取商品
			this.goods = $( ".common_show li" );
			this.picks = $( ".picks_ul li" );
			this.guess = $( ".guessyoulike_show ul li" );
			// console.log( this.goods, this.picks, this.guess );

			let _this = this;

			this.goods.each( function( index ){
				_this.goods.eq( index ).on( "click", $.proxy( _this.to_list, _this ) );
			} );

			this.picks.each( function( index ){
				_this.picks.eq( index ).on( "click", $.proxy( _this.to_list, _this ) );
			} );

			this.guess.each( function( index ){
				_this.guess.eq( index ).on( "click", $.proxy( _this.to_list, _this ) );
			} );
		};
		to_login(){
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_register(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
		to_list(){
			self.location.href = "http://localhost:8888/html/commodity_list.html";
		};
	};
	return new Link();
} );