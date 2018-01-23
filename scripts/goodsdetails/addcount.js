/* 商品添加数量功能 */
define( [ "jquery" ], function(){
	class Count{
		constructor(){
			this.init();
		};
		init(){
			// console.log("我就是试试看!");
			// 获取点击元素
			this.count = $( ".count_num" );
			this.increase = $( ".arrow_top" );
			this.decrease = $( ".arrow_bottom" );
			this.v_count = $( ".count_num" );
			this.input_v = parseInt( $( ".count_num" ).val() );
			this.increase.on( "click", $.proxy( this.increaseOrDecrease, this ) );
			this.decrease.on( "click", $.proxy( this.increaseOrDecrease, this ) );
		};
		increaseOrDecrease( e ){
			// console.log( $(e.delegateTarget) )
			let nzh = $( e.delegateTarget ).attr( "nzh" );
			if( nzh === "up" ){
				// console.log( "增加" );
				this.input_v++;
				this.input_v = this.input_v >= 10 ? 10 : this.input_v;
				if( this.input_v == 10 ){
					this.increase.removeClass( "arrow_pointer" )
					.find( "i" ).css( {
						backgroundPosition: "-50px -42px"
					} );
				}
				if( this.input_v > 1 ){
					this.decrease.addClass( "arrow_pointer" )
					.find( "i" ).css( {
						backgroundPosition: "-40px -18px"
					} );
				}
			} else if( nzh === "down" ){
				// console.log( "减少" );
				this.input_v--;
				this.input_v = this.input_v <= 1 ? 1 : this.input_v;
				if( this.input_v == 1 ){
					this.decrease.removeClass( "arrow_pointer" )
					.find( "i" ).css( {
						backgroundPosition: "-40px -42px"
					} );
				}
				if( this.input_v < 10 ){
					this.increase.addClass( "arrow_pointer" )
					.find( "i" ).css( {
						backgroundPosition: "-50px -18px"
					} );
				}
			};
			this.v_count.val( this.input_v );
		};
	};
	return new Count();
} );