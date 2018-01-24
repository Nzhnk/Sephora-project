/* 购物车数量刷新 */
define( [ "jquery", "cookie" ], function(){
	class Cart{
		constructor(){
			this.init();
		};
		init(){
			this.judgment();
			// 获取按钮
			
		};
		judgment(){
			// 模拟判断是否有用户登录
			if( $.cookie( "userName" ) ){
				// 如果存在则显示购物车的状态
				$( ".top_cart_msg" ).css( "display", "none" );
				$( ".no_anything" ).css( "display", "block" );
				$( ".login_goods" ).css( "display", "none" );
				// 判断是否购买商品
				if( $.cookie( "cart" ) ){
					$( ".login_status" ).css( "display", "none" );
					$( ".no_anything" ).css( "display", "none" );
					$( ".login_goods" ).css( "display", "block" );
					this.sCookie = $.cookie( "cart" );
					this.rend_cart();
				};
			};
		};
		rend_cart(){
			// 请求数据
			let data_json = {
				url : "data/list_data.json",
				type : "GET"
			};
			$.ajax( data_json ).then( $.proxy( this.load_data, this ) );
			console.log( this.sCookie )
		};
		load_data( res ){
			// console.log(res)
			let aCookie = JSON.parse( this.sCookie );
			let str = "";
			$( aCookie ).each( function( index, item ){
				$( res ).each( function( ind, ite ){
					if( item.goodsID == ite.id ){
						str += `
							<li>
								<a href="javascript:;" class="new_add_img">
									<img src="${ite.img}" style="width: 48px;height: 48px;">
								</a>
								<div class="new_add_describe">
									<span class="new_add_title">${ite.describe}</span>
									<span class="new_add_des">${ite.title}</span>
								</div>
								<div class="new_add_r">
									<span class="new_add_r_price">¥<b>${ite.price}</b></span>
									<span class="new_add_r_count">x<b>${item.goodsCount}</b></span>
									<a href="javascript:;" class="new_add_delete">删除</a>
								</div>
							</li>
						`;
					}
				} );
			} );
			$( ".new_add ul" ).html( str );
			this.cal();
		};
		cal(){
			// 获取数量
			let z_sl = 0;
			let z_jq = 0;
			this.span_counts = $( ".new_add_r_count" ).find( "b" );
			this.span_prices = $( ".new_add_r_price" ).find( "b" );
			let _this = this;
			this.span_prices.each( function( index, item ){
				z_jq += parseInt( $( item ).html() ) * parseInt( $( item ).parent().next().find( "b" ).html() );
			} );
			this.span_counts.each( function( ind, ite ){
				z_sl += parseInt( $( ite ).html() );
			} );
			console.log(z_sl,z_jq)
			$( ".xj_01" ).find( "b" ).html( z_sl );
			$( ".xj_02" ).find( "b" ).html( z_jq + ".00" );
			$( ".top_cart_count" ).html( z_sl );
		};
	};
	return new Cart();
} );