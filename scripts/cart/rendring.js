/* 渲染页面 */
define( [ "jquery", "cookie" ], function(){
	class Rend{
		constructor(){
			this.init();
		};
		init(){
			// console.log(123);
			// 获取需要渲染的dom元素
			this.divs = $( ".like_box " );
			// 获取渲染数据
			let data_url = {
				url : "../data/list_data.json",
				type : "GET"
			};
			$.ajax( data_url ).then( $.proxy( this.rendring_page, this ) );
		};
		rendring_page( res ){
			
			// 给数据排序,将人气最高的受欢迎的产品推荐到猜你喜欢模块
			res.sort( function( prev, next ){
				return next.popularity - prev.popularity
			} );

			let newArr = res.slice( 0, this.divs.length );
			// console.log( newArr )
			let _this = this;
			$( newArr ).each( function( index, item ){
				_this.divs.eq( index )
				.find( "img" ).attr( "src", item.img )
				.end()
				.find( ".like_show_title" ).html( item.title )
				.end()
				.find( ".like_show_name" ).html( item.describe )
				.end()
				.find( ".like_show_price" ).html( "￥" + item.price );
			} );
		};
	};
	return new Rend();
} );