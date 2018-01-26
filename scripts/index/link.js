define( [ "jquery" ], function(){
	class Link{
		constructor(){};
		init(){
			// 获取商品
			this.goods = $( ".common_show li" );
			this.picks = $( ".picks_ul li" );
			this.guess = $( ".guessyoulike_show ul li" );
			// console.log( this.goods, this.picks, this.guess );

			this.goods.on( "click", $.proxy( this.to_list, this ) );

			this.picks.on( "click", $.proxy( this.to_active, this ) );

			this.guess.on( "click", $.proxy( this.to_list, this ) );
		};
		to_active(){
			self.location.href = "active.html";
		};
		to_list(){
			self.location.href = "commodity_list.html";
		};
	};
	return new Link();
} );