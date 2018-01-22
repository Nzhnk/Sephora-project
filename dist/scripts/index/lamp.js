define( [ "jquery" ], function(){
	class Lamp{
		constructor(){
			this.init();
		};
		init(){
			// 获取跑马的元素
			this.cen = $( ".top_center" );
			this.cen_a = $( ".top_center a" );
			// 设置定时器
			this.timer = null;
			this.run();
			this.cen.on( "mouseenter", $.proxy( this.look, this ) );
			this.cen.on( "mouseleave", $.proxy( this.look_over, this ) );
		};
		run(){
			let _this = this;
			let index = 0;
			this.timer = setInterval( function(){
				_this.cen_a.eq( index ).animate( {
					top: -30
				}, 1000 );
				_this.cen_a.eq( index + 1 ).animate( {
					top: 0
				}, 1000 );
				_this.cen_a.eq( index + 1 ).siblings().css( {
					top: 30
				} );
				
				if( index  == ( _this.cen_a.length - 1 ) ){
					_this.cen_a.eq( 0 ).animate( {
						top: 0
					}, 1000 );
					index = -1;
				};
				index ++;
			}, 5000 );
		};
		look(){
			clearInterval( this.timer );
		};
		look_over(){
			this.run();
		};
	};
	return new Lamp();
} );