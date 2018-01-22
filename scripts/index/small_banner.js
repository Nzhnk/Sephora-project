define( [ "jquery" ], function(){
	class Picks{
		constructor(){};
		init(){
			this.$dom = $( ".banners_img" );
			this.$a = this.$dom.children();
			this.$wrap = this.$dom.parent();
			// 获取所有小标
			this.$span = $( ".brands_index span" );
			// 左边按钮
			this.$left = $( ".brands_left" );
			// 右边按钮
			this.$right = $( ".brands_right" );
			// 设置定时器
			this.timer = null;
			// 设置下标
			this.index = 0;
			let this_ = this;
			this.timer = setInterval( function(){
				this_.move( this_.index );
				this_.index ++;
				this_.index = this_.index > (this_.$a.length - 1) ? 0 : this_.index;
			}, 2000 );
			// 鼠标移入移出
			this.$wrap.on( "mouseenter", $.proxy( this.mouse_in, this) );
			this.$wrap.on( "mouseleave", $.proxy( this.mouse_out, this) );
			// 左右按钮事件
			this.$left.on( "click", $.proxy( this.click_btn, this ) );
			this.$right.on( "click", $.proxy( this.click_btn, this ) );
			// span点击事件
			this.$span.on( "click", $.proxy( this.span_click, this ) );
		};
		move( index ){
			this.$a.eq( index ).siblings().css( {
				"z-index" : "0",
				"opacity" : "0"
			} );
			this.$a.eq( index ).css( {
				"z-index" : "1",
				"opacity" : "100"
			} );
			this.$span.eq( index ).siblings().removeClass( "brands_index_span_act" );
			this.$span.eq( index ).addClass( "brands_index_span_act" );
		};
		mouse_in(){
			clearInterval( this.timer );
		};
		mouse_out(){
			let this_ = this;
			this.timer = setInterval( function(){
				this_.move( this_.index );
				this_.index ++;
				this_.index = this_.index > (this_.$a.length - 1) ? 0 : this_.index;
			}, 2000 );
		};
		click_btn( e ){
			let btn = $( e.delegateTarget ).attr( "direction" );
			if( btn === "left" ){
				--this.index;
				this.index = this.index < 0 ? ( this.$a.length - 1 ) : this.index;
			};
			if( btn === "right" ){
				++this.index;
				this.index = this.index > ( this.$a.length - 1 ) ? 0 : this.index;
			};
			this.move( this.index );
		};
		span_click( e ){
			this.index = $( e.target ).index();
			this.move( this.index );
		};
	};
	return new Picks();
} );