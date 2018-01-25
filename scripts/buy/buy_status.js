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
								<div class="goods_item_count clearfix">${item.goodsCount}</div>
								<div class="goods_item_totle">${ite.price * item.goodsCount}.00</div>
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
			$( ".hj3" ).html( "¥" + this.totle + ".00" );
			// 商品操作
			this.goods = $( ".goods_single_box" );
			this.goods.on( "click", $.proxy( this.control, this ) );
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