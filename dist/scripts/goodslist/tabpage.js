define( [ "jquery" ], function(){
	class Tab{
		constructor(){
			this.init();
		};
		init(){
			// console.log(123);
			// 获取切换按钮
			this.tab_a = $( ".page_count a" );
			this.show_ul = $( ".list_goods ul" );

			let _this = this;
			this.tab_a.each( function( index ){
				_this.tab_a.eq( index ).on( "click", $.proxy( _this.to_tab, _this ) );
			} );
		};
		to_tab( e ){
			// console.log($( e.target ).index())
			let i = $( e.target ).index();
			$( e.target ).addClass( "page_act" )
			.siblings().removeClass( "page_act" );
			this.show_ul.eq( i ).addClass( "details_show")
			.siblings().removeClass( "details_show" );
		};
	};
	return new Tab();
} );