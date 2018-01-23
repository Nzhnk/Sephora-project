/* 放大镜功能 */
define( [ "jquery", "cookie" ], function(){
	class Glass{
		constructor(){
			this.init();
		};
		init(){
			// console.log(123);
			// 获取相关元素
			this.small = $( ".details_masklaye" );
			this.small_img = $( ".details_m_small_img" );
			this.big = $( ".details_big" );
			this.big_img = $( ".details_m_big_img" );
			this.mask = $( ".details_mask" );
			this.small.on( "mouseenter", $.proxy( this.e_in, this ) );
			this.small.on( "mousemove", $.proxy( this.e_move, this ) );
			this.small.on( "mouseleave", $.proxy( this.e_out, this ) );
		};
		e_in(){
			this.mask.css( "display", "block" );
			this.big.css( "display", "block" );
		};
		e_move( e ){
			let X = e.offsetX - this.mask.width() / 2;
			let Y = e.offsetY - this.mask.height() / 2;
			// 边界监测
			let maxX = this.small.width() - this.mask.width();
			let maxY = this.small.height() - this.mask.height();
			// 判断
			X = X > maxX ? maxX : X;
			X = X < 0 ? 0 : X;
			Y = Y > maxY ? maxY : Y;
			Y = Y < 0 ? 0 : Y;
			this.mask.css( {
				left : X,
				top : Y
			} );
			// 计算比例
			let propX = this.mask.width() / this.big.width();
			let propY = this.mask.height() / this.big.height();
			// 大图移动
			this.big_img.css( {
				width: this.small_img.width() / propX,
				height: this.small_img.height() / propY,
				left: -X / propX,
				top: -Y/propY
			} );
		};
		e_out(){
			this.mask.css( "display", "none" );
			this.big.css( "display", "none" );
		};
	};
	return new Glass();
} );