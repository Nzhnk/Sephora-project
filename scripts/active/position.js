/* 活动图片位置调整 */
define( [ "jquery" ], function(){
	class Position{
		constructor(){
			this.init();
		};
		init(){
			// console.log("调整位置!");
			// 获取所有的a标签,调整位置
			this.as = $( "#main a" );
			this.aw = this.as.eq( 0 ).width();
			// 获取特殊的a
			this.ts_a = $( ".ts a" );
			this.dis = this.ts_a.offset().top;
			// 调用计算方法
			this.cal_position();
			$( window ).on( "resize", $.proxy( this.cal_position, this ) );
			$( window ).on( "scroll", $.proxy( this.cal_fix, this ) );

			this.as.on( "click", $.proxy( this.to_list, this ) );
		};
		to_list(){
			self.location.href = "http://localhost:8888/html/commodity_list.html";
		};
		cal_fix(){
			let scroll = $( window ).scrollTop();
			if( scroll > this.dis ){
				this.ts_a.addClass( "fix" );
			} else {
				this.ts_a.removeClass( "fix" );
			};
		};
		cal_position(){
			// 获取当前浏览器可视的宽度
			this.sw = $( document ).width();
			// 判断
			if( this.sw <= this.aw ){
				let _this = this;
				this.as.each( function( index, item ){
					$( item ).css( {
						marginLeft: - ( _this.aw - _this.sw ) / 2
					} );
				} );
			} else {
				let _this = this;
				this.as.each( function( index, item ){
					$( item ).css( {
						margin: "0 auto"
					} );
				} );
			};
		};
	};
	return new Position();
} );