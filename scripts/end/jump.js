/* 支付成功 */
define( [ "jquery" ], function(){
	class Jump{
		constructor(){
			this.init();
		};
		init(){
			// 获取倒计时
			this.sec = $( ".seconds" );
			this.btn = $( ".jump" );
			this.timer = null;
			this.cut_down();
			this.btn.on( "click", $.proxy( this.to_index, this ) );
		};
		cut_down(){
			let num = 5;
			clearInterval( this.timer );
			let _this = this;
			let _self = self;
			this.timer = setInterval( function(){
				if( num <= 0 ){
					_self.location.href = "index.html";
					clearInterval( _this.timer );
				} else {
					num --;
					_this.sec.html( num );
				};
			}, 1000 );
		};
		to_index(){
			clearInterval( this.timer );
			self.location.href = "index.html";
		};
	};
	return new Jump();
} );