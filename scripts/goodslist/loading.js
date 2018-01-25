define( [ "jquery" ], function(){
	class Loading{
		constructor(){
			this.init();
		};
		init(){
			// 获取渲染载体
			this.uls = $( ".p_cont" );
			// console.log(this.uls)
			// 获取渲染需要的数据
			let url = {
				url : "../data/list_data.json",
				type : "GET",
				context:this
			}
			$.ajax( url ).then( $.proxy( this.render, this ) );
		};
		/* 渲染列表 */
		render( res ){
			this.data = $( res );
			// 排序实验
			let newArray = res;
			function sortprice(a,b){  
               return a.popularity-b.popularity;  
            }  
            newArray.sort(sortprice);


			let _this = this;
			this.data.each( function( index, item ){
				_this.uls.eq( index )
				.attr( "data_id", _this.data[index].id )
				.find( ".p_img img" ).attr( "src", _this.data[index].img )
				.end().find( ".p_branden" ).html( _this.data[index].title )
				.end().find( ".p_brandcn a" ).html( _this.data[index].describe )
				.end().find( ".p_price" ).html( "￥" + _this.data[index].price );
			} );
		};
		sort_up(){

		};
	};
	return new Loading();
} );