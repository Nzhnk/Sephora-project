define( [ "jquery" ], function(){
	class Fixed{
		constructor(){
			this.init();
		};
		init(){
			// 出现高度
			this.sich_stark = $( ".brands_con" ).offset().top;
			this.treppe_show = $( "#skincare" ).offset().top;
			this.only_height = $( "#skincare" ).outerHeight( true );
			// console.log(this.only_height);
			// 获取fixed元素
			this.fixed_search = $( "#fixed_top" );
			this.fixed_treppe = $( "#treppe" );
			this.fixed_right = $( "#fixed_right" );
			$( document ).scroll( $.proxy( this.to_scroll, this ) );
			this.go_back = $( "#fixed_right" ).find( ".go_back" );
			this.go_back.on( "click", $.proxy( this.to_back, this ) );
			// 高度
			this.h = this.only_height;
			// 数量
			this.n = this.fixed_treppe.children();
			this.jump();
		};
		to_scroll(){
			let timer = null;
			let this_ = this;
			let min_height = $( document ).scrollTop();
			clearTimeout( timer );
			timer = setTimeout( function(){
				if( min_height >= this_.sich_stark ){
					this_.fixed_search.css( {
						"top" : "0"
					} );
					this_.fixed_right.css( {
						"display" : "block"
					} );
				} else {
					this_.fixed_search.css( {
						"top" : "-70px"
					} );
					this_.fixed_right.css( {
						"display" : "none"
					} );
				};
				if( min_height >= this_.treppe_show ){
					this_.fixed_treppe.css( "display", "block" );
				} else {
					this_.fixed_treppe.css( "display", "none" );
				};
				this_.n.each( function( index ){
					// console.log(112)
					if( min_height >= ( this_.treppe_show + index * this_.h) ){
						this_.n.eq( index ).find( "span" ).addClass( "span_act" );
						this_.n.eq( index ).siblings().find( "span" ).removeClass( "span_act" );
					};
					if( min_height >= ( this_.treppe_show + this_.n.length * this_.h) ){
						this_.n.children().removeClass( "span_act" );
					};
				} );
			}, 500 );
			if( min_height <= 100 ){
				let str = $( ".fixed_text" ).val();
				if( str ){
					$( ".top_search_input" ).val( str );
				};
			};
		};
		to_back(){
			$('html , body').animate( { scrollTop: 0 }, "slow" );
		};
		jump(){
			let this_ = this;
			let $body = $('html , body');
			this.n.each( function( index, item ){
				this_.n.eq( index ).click( function(){
					$body.stop().animate( { 
						scrollTop: index * this_.h + this_.treppe_show 
					}, "slow" );
					this_.n.eq( index ).siblings().find( "span" ).removeClass( "span_act" );
					this_.n.eq( index ).find( "span" ).addClass( "span_act" );
				} );
			} );
		};
	}
	return new Fixed();
} );