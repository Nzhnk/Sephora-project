define( [ "jquery" ], function(){
	class Banner{
		constructor(){};
		init(){
			// 存储背景颜色
			this.color = [ "#fae499", "#7c0b19", "#ebebeb", "#f8f8f8" ];
			this.$dom = $( ".banner_imgs" );
			this.$a = this.$dom.children();
			this.$wrap = this.$dom.parent();
			// console.log(this.$wrap);
			this.$a_father = $( "#banner" );
			// 获取所有小标
			this.$span = $( ".banner_index span" );
			// 左边按钮
			this.$left = $( ".banner_left_btn" );
			// 右边按钮
			this.$right = $( ".banner_right_btn" );
			// 设置定时器
			this.timer = null;
			// 设置下标
			this.index = 0;
			// clearInterval( this.timer );
			let this_ = this;
			this.timer = setInterval( function(){
				this_.move( this_.index );
				this_.index ++;
				this_.index = this_.index > (this_.$a.length - 1) ? 0 : this_.index;
			}, 3000 );
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
			this.$a_father.css( {
				"background" : this.color[ index ],
				"transition" : "1.5s"
			} );
			this.$span.eq( index ).siblings().removeClass( "banner_index_span_act" );
			this.$span.eq( index ).addClass( "banner_index_span_act" );
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
			}, 3000 );
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
	return new Banner();
} );