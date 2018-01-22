/* 详情渲染页面 */
define( [ "jquery", "cookie" ], function(){
	class Deck{
		constructor(){
			this.init();
		};
		init(){
			// console.log( "你好!" );
			// 获取需要渲染的元素
			// 小图
			this.small_img = $( ".details_m_small_img" );
			// 大图
			this.big_img = $( ".details_m_big_img" );
			// 价格
			this.price = $( ".sales_price" );
			// 标题
			this.title = $( ".point_text h2" );
			// 打折
			this.sale_off = $( ".point_notice" );
			// 英文名称
			this.name_en = $( ".point_name_en" );
			// 品牌图片
			this.brand_img = $( ".point_img" );
			// 面包屑路径
			this.path = $( ".details_span_path" );
			// 基本信息处名称
			this.name_ch = $( ".full_name_nzh" );
			// 判断
			// 获取cookie
			if( $.cookie( "goods" ) ){
				this.goodsId =  JSON.parse( $.cookie( "goods" ) ).goodsId;
			} else {
				return;
			}
			
			let str_url = {
				url: "../data/list_data.json",
				type: "GET"
			};
			$.ajax( str_url ).then( $.proxy( this.load_data, this ) );
		};
		load_data( res ){
			this.res = $( res );
			let _this = this;
			// 创建一个随机数
			let num = parseInt( ( 1 + Math.random() * 1 ) * 100 ) / 100;
			this.res.each( function( index, item ){
				if( _this.goodsId === item.id ){
					_this.small_img.attr( "src", item.img_mid );
					_this.big_img.attr( "src", item.img_big );
					_this.price.html( parseInt( item.price ) );
					_this.name_en.html( item.title );
					_this.title.html( item.describe );
					let sales = parseInt( item.price / num );
					let percent = ( item.price / ( sales + parseInt( item.price ) ) * 10 ). toFixed( 2 );
					_this.sale_off.html( "价值：" + ( sales + parseInt( item.price ) ) + "，优惠折扣：" + percent + "折。" ); 
					_this.path.html( item.describe );
					_this.name_ch.html( "品牌: " + item.brand + " " +item.title );
					_this.brand_img.attr( "src", item.img_brand );
					return false;
				} else {

				};
			} );
			setTimeout( _this.delete_cookie, 2000 );
		};
		delete_cookie(){
			$.cookie( "goods", "", { 
				expires: -1
			 } );
		};
	}
	return new Deck();
} );