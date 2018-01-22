define( [ "jquery" ], function(){
	class Inwrite{
		constructor(){};
		init( dom ){
			this.ele = dom;
			this.close = this.ele.find( "b" );
			// 获取tip
			this.tips = $( ".tip" ).children();
			// 获取点击按钮
			this.btn = $( ".btn" );
			// 这是定时器
			this.timer = null;
			this.ele.find( "input" ).on( "focus", $.proxy( this.e_focus, this ) );
			this.ele.find( "input" ).on( "blur", $.proxy( this.e_blur, this ) );
			this.close.on( "click", $.proxy( this.c_close, this ) );
			this.btn.on( "click", $.proxy( this.rm_timer, this ) );
		};
		e_focus(){
			this.ele.css( {
				borderBottomColor: "#000"
			} );
			this.close.attr( "class", "close" );
			this.close.css( {
				display : "block"
			} );
			this.tips.css( {
				display : "none"
			} );
		};
		e_blur(){
			this.ele.css( {
				borderBottomColor: "#ccc"
			} );
			let _this = this;
			clearTimeout( this.timer );
			this.timer = setTimeout( function(){
				_this.close.css( {
					display : "none"
				} );
			}, 300 );
		};
		c_close(){
			clearTimeout( this.timer );
			this.ele.find( "input" ).val( "" );
			this.close.css( {
				display : "none"
			} );
		};
		rm_timer(){
			clearTimeout( this.timer );
		};
	};
	return Inwrite;
} );