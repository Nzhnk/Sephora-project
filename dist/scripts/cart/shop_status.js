/* 购物车状态 */
define( [ "jquery", "cookie" ], function(){
	class Status{
		constructor(){
			this.init();
		};
		init(){
			// 空购物车
			this.empty  = $( ".main_cart" );

			// 非空购物车
			this.full = $( ".main_has_goods" );
			this.coupon = $( "#coupon" );
			this.settle = $( "#settle" );

			

			// 物品显示区
			this.show_pro = $( ".main_single_info" );

			// 总量
			this.sum = 0;
			this.totle = 0;
			// 获取cookie
			// 先判断cookie是否存在
			if( $.cookie( "cart" ) ){
				this.cookie = $.cookie( "cart" );
				this.empty.css( "display", "none" )
				this.full.css( "display", "block" );
				this.coupon.css( "display", "block" );
				this.settle.css( "display", "block" );
				// 获取渲染数据
				let data_url = {
					url : "../data/list_data.json",
					type : "GET"
				};
				$.ajax( data_url ).then( $.proxy( this.rendring_cart, this ) );
			} else {
				this.null_show();
				return ;
			};
		};
		rendring_cart( res ){
			let aCookie = JSON.parse(this.cookie);
			let _this = this;
			let str = "";
			// console.log( aCookie )
			$( aCookie ).each( function( index, item ){
				$( res ).each( function( ind, ite ){
					if( item.goodsID == ite.id ){
						str += `
							<div class="goods_single_box clearfix" goods_id="${item.goodsID}">
								<em></em>
								<a href="javascript:;" class="goods_item_img">
									<img src="${ite.img_mid}" alt="">
								</a>
								<div class="goods_item_info">
									<h5>${ite.title}</h5>
									<a href="javascript:;" class="goods_item_info_a">${ite.describe}</a>
									<div class="goods_gift_info">
										<span class="goods_item_info_span">规格：${item.giftType}<i class="goods_pen"></i></span>
									</div>
								</div>
								<div class="goods_item_price">${ite.price}</div>
								<div class="goods_item_count clearfix">
									<i class="goods_item_decrease">-</i>
									<span class="goods_item_num">${item.goodsCount}</span>
									<i class="goods_item_increase">+</i>
								</div>
								<div class="goods_item_totle">${ite.price * item.goodsCount}.00</div>
								<div class="goods_item_delete">
									<i class="the_good_delete"></i>
								</div>
							</div>
						`;
						_this.sum += parseInt( item.goodsCount );
						_this.totle += ite.price * item.goodsCount;
						return true;
					}
				} );
			} );
			this.show_pro.html( str );
			$( ".hj1" ).find( "em" ).html( this.sum );
			$( ".hj3" ).html( "¥" + this.totle );
			$( ".hj5" ).html( "¥" + this.totle );
			// 商品操作
			this.goods = $( ".goods_single_box" );
			this.goods.on( "click", $.proxy( this.control, this ) );
		};
		control( e ){
			let _this = this;
			let aCookie = JSON.parse(this.cookie);
			if( $( e.target ).attr( "class" ) === "goods_item_increase" ){
				let num = parseInt( $( e.target ).prev().html() );
				num += 1;
				if( num >= 10 ){
					num = 10;
				};
				$( e.target ).prev().html( num );
				let cash = $( e.target ).parent().prev().html();
				$( e.target ).parent().next().html( cash * num + ".00" );
				this.cur_num = num;
			};
			if( $( e.target ).attr( "class" ) === "goods_item_decrease" ){
				let num = parseInt( $( e.target ).next().html() );
				num -= 1;
				if( num <= 1 ){
					num = 1;
				};
				$( e.target ).next().html( num );
				let cash = $( e.target ).parent().prev().html();
				$( e.target ).parent().next().html( cash * num + ".00" );
				this.cur_num = num;
			};
			if( $( e.target ).attr( "class" ) === "the_good_delete" ){
				$( aCookie ).each( function( index, item ){
					if( $( e.target ).parent().parent().attr( "goods_id" ) === item.goodsID ){
						aCookie.splice( index, 1 );
					};
				} );
				self.location.reload( true );
			};
			// 获取值
			$( aCookie ).each( function( index, item ){
				if( $( e.target ).parent().parent().attr( "goods_id" ) === item.goodsID ){
					item.goodsCount = _this.cur_num;
				}	
			} );
			let sCookie = JSON.stringify( aCookie );
			$.cookie("cart", sCookie, {
				path: "/"
			} );
			this.cal_sum();


			if( aCookie.length === 0 ){

				$.cookie( "cart", null, { path:'/',expires : -1 } );
				this.null_show();
				self.location.reload( true );
			}
		};
		cal_sum(){
			// 获取所有的价格标签
			this.money = 0;
			this.amount = 0;
			let prices = $( ".goods_item_totle" );
			let amounts = $( ".goods_item_num" );
			let _this = this;
			prices.each( function( index, item ){
				_this.money += parseInt( $( item ).html() );
			} );
			amounts.each( function( index, item ){
				_this.amount += parseInt( $( item ).html() );
			} );
			$( ".hj3" ).html( "¥" + this.money );
			$( ".hj5" ).html( "¥" + this.money );
			$( ".hj1" ).find( "em" ).html( this.amount );
		};
		null_show(){
			this.empty.css( "display", "block" )
			this.full.css( "display", "none" );
			this.coupon.css( "display", "none" );
			this.settle.css( "display", "none" );
		};
	};
	return new Status();
} );