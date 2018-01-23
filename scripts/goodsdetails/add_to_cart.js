/* 加入购物车 */
define( [ "jquery", "cookie" ], function(){
	class AddCart{
		constructor(){
			this.init();
		};
		init(){
			// console.log("添加进购物车!");
			// 获取对应的套装
			this.lis = $( ".format_type li" );
			// 获取按钮
			this.add_btn = $( ".add_btn" );
			
			
						let _this = this;
			this.lis.each( function( index ){
				_this.lis.eq( index ).on( "click", $.proxy( _this.change, _this ) );
			} );

			this.add_btn.on( "click", $.proxy( this.to_buy, this ) );
		};
		change( e ){
			let index = $( e.delegateTarget ).index(); 
			this.lis.eq( index ).addClass( "format_act" )
			.siblings().removeClass( "format_act" );
		};
		to_buy(){
			// 获取对应商品的id
			this.ID = $( ".details_magnifier" ).attr( "goodsid" );
			// console.log( this.ID );
			// 获取礼品规格类型
			this.type = $( ".format_act span" ).text();
			console.log(this.type)
			// 获取数量
			this.count = parseInt( $( ".count_num" ).val() );
			// console.log(this.count)
			// 判断是否存在该cookie
			if( $.cookie( "cart" ) ){
				// 存在,继续判断是否存在需要购买的商品
				let sCookie = $.cookie( "cart" );
				// console.log( sCookie)
				let aCookie = JSON.parse( sCookie );
				console.log( aCookie );
				// 假设不存在该商品
				let flag = false;
				let _this = this;
				// 判断是否存在
				aCookie.forEach( function( item ){
					if( _this.ID == item.goodsID ){
						// 存在该商品 
						let n = parseInt( item.goodsCount );
						n += _this.count;
						item.goodsCount = n;
						// 证明存在
						flag = true;
					};
				} );
					

				// 若不存在,则创建结构
				if( !flag ){
					let a = {
						goodsid: _this.ID,
						goodsCount: _this.count,
						giftType: _this.type
					};
					aCookie.push( a );
				};
				// 更新cooKie
				sCookie = JSON.stringify( aCookie );
				$.cookie( "cart", sCookie );
			} else {
				// 不存在  就直接创建cookie
				let str = '[{"goodsID":"'+this.ID+'","goodsCount":"'+this.count+'","giftType":"'+this.type+'"}]';
				$.cookie( "cart", str, {
					expires: 20
				} );
			};


			console.log( $.cookie( "cart" ) );
		};
	};
	return new AddCart();
} );