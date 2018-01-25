/* 购物车数量刷新 */
define( [ "jquery", "cookie" ], function(){
	class Cart{
		constructor(){
			this.init();
		};
		init(){
			this.judgment();
			// 获取 退出按钮
			this.quit = $( ".user_out" );
			this.quit.on( "click", $.proxy( this.uer_out, this ) );
		};
		uer_out(){
			// 既然能点击退出按钮,说明已经登录
			let sCookie = $.cookie( "userName" );
			let aCookie = JSON.parse( sCookie );
			// 既然已经登录,则说明login的状态肯定是true,所以当点击退出按钮出发事件,直接进行逻辑的操作
			$( aCookie ).each( function( index, item ){
				item.login = false;
			} );
			sCookie = JSON.stringify( aCookie );
			$.cookie( "userName", sCookie, { path: '/'} );
			$( ".islogin_false" ).css( "display", "block" );
			$( ".islogin_true" ).css( "display", "none" );
			$( ".top_cart_msg" ).css( "display", "block" );
			$( ".no_anything" ).css( "display", "none" );
			$( ".login_goods" ).css( "display", "none" );
		};
		judgment(){
			// 模拟判断是否有用户登录
			if( $.cookie( "userName" ) ){
				// 并且遍历  判断login的状态
				let sCookie = $.cookie( "userName" );
				let aCookie = JSON.parse( sCookie );
				$( aCookie ).each( function( index, item ){
					// 判断登录状态
					if( item.login ){
						// 如果登录
						let str = item.userphone;
						str = str.replace( /(\d{3})\d{4}(\d{4})/, "$1****$2" );
						$( ".user_name" ).find( "span" ).html( str );
						$( ".islogin_false" ).css( "display", "none" );
						$( ".islogin_true" ).css( "display", "block" );
						// 如果存在则显示购物车的状态
						$( ".top_cart_msg" ).css( "display", "none" );
						$( ".no_anything" ).css( "display", "block" );
						$( ".login_goods" ).css( "display", "none" );
					}
				} );
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
				url : "../data/list_data.json",
				type : "GET"
			};
			$.ajax( data_json ).then( $.proxy( this.load_data, this ) );
			// console.log( this.sCookie )
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
									<a href="javascript:;" class="new_add_delete"></a>
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
			// console.log(z_sl,z_jq)
			$( ".xj_01" ).find( "b" ).html( z_sl );
			$( ".xj_02" ).find( "b" ).html( z_jq + ".00" );
			$( ".top_cart_count" ).html( z_sl );
		};
	};
	return new Cart();
} );