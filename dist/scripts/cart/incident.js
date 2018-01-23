/* 事件功能(不包括购物车的点击功能) */
define( [ "jquery" ], function(){
	class Incident{
		constructor(){
			this.init();
		};
		init(){
			// 获取点击的dom元素
			this.lbtn = $( ".like_tab_l" );
			this.rbtn = $( ".like_tab_r" );

			// 获取需要移动的元素
			this.mdiv = $( ".like_box_con" );
			// 获取需要移动的宽度
			this.dis = $( ".like_show" ).eq( 0 ).width();
			this.num = $( ".like_show" ).length - 1;
			this.index = 0;
			console.log( this.dis );
			this.lbtn.on( "click", $.proxy( this.div_move, this ) );
			this.rbtn.on( "click", $.proxy( this.div_move, this ) );
		};
		div_move( e ){
			// 判断当前点击的按钮方向
			// console.log( e )
			let dir = $( e.delegateTarget ).attr( "dir" );
			
			if( dir == "left" ){
				this.index ++;
				this.mdiv.stop( true ).animate( {
					marginLeft: -this.dis * this.index
				} );
				if( this.index >= this.num ){
					this.index = this.num;
					this.mdiv.stop( true ).animate( {
						marginLeft: -this.dis * this.index
					} );
				}
			} else if( dir == "right" ){
				this.index --;
				this.mdiv.stop( true ).animate( {
					marginLeft: -this.dis * this.index
				} );
				// this.lbtn.css( "background-position-y", "30px" );
				if( this.index <= 0 ){
					this.index = 0;
					this.mdiv.stop( true ).animate( {
						marginLeft: -this.dis * this.index
					} );
					// this.rbtn.css( "background-position-y", "30px" );
				}
			};
			console.log( this.index );
		};
	};
	return new Incident();
} );