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
			this.rules = $( ".user_rules" );
			this.rules_text = $( ".rules_con" );
			this.rules_close = $( ".rules_btn" );
			// 获取结算
			this.fix = $( ".settle_con" );
			this.fix_top = this.fix.offset().top;
			this.screen_w = $( window ).height();

			// 获取需要移动的元素
			this.mdiv = $( ".like_box_con" );
			// 获取需要移动的宽度
			this.dis = $( ".like_show" ).eq( 0 ).width();
			this.num = $( ".like_show" ).length - 1;
			this.index = 0;
			this.lbtn.on( "click", $.proxy( this.div_move, this ) );
			this.rbtn.on( "click", $.proxy( this.div_move, this ) );
			this.rules.on( "click", $.proxy( this.rules_show, this ) );
			this.rules_close.on( "click", $.proxy( this.rules_hide, this ) );
			$( document ).on( "scroll", $.proxy( this.to_fix, this ) );
		};
		to_fix(){
			let scrollTop = $( document ).scrollTop();
			let m_h = this.screen_w + scrollTop;

			if( m_h < this.fix_top ){
				this.fix.addClass( "fixed" ); 
			} else {
				this.fix.removeClass( "fixed" ); 
			}
		};
		rules_hide( e ){
			this.rules_text.fadeOut();
			e.stopPropagation();
		};
		rules_show(){
			this.rules_text.fadeIn();
		};
		div_move( e ){
			// 判断当前点击的按钮方向
			// console.log( e )
			let dir = $( e.delegateTarget ).attr( "dir" );
			
			if( dir == "left" ){
				this.index --;
				this.mdiv.stop( true ).animate( {
					marginLeft: -this.dis * this.index
				} );
				if( this.index <= 0 ){
					this.index = 0;
					this.mdiv.stop( true ).animate( {
						marginLeft: -this.dis * this.index
					} );
				};
			} else if( dir == "right" ){
				this.index ++;
				this.mdiv.stop( true ).animate( {
					marginLeft: -this.dis * this.index
				} );
				if( this.index >= this.num ){
					this.index = this.num;
					this.mdiv.stop( true ).animate( {
						marginLeft: -this.dis * this.index
					} );
				};
			};

			// 判断index
			if( this.index == 0){
				this.lbtn.css( "background-position-y", "0px" );
				this.rbtn.css( "background-position-y", "-60px" );
			} else if( this.index == this.num ){
				this.lbtn.css( "background-position-y", "-60px" );
				this.rbtn.css( "background-position-y", "0px" );
			} else {
				this.lbtn.css( "background-position-y", "-60px" );
				this.rbtn.css( "background-position-y", "-60px" );
			};
		};
	};
	return new Incident();
} );