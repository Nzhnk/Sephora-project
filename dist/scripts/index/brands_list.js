define( [ "jquery" ], function(){
	class Blist{
		constructor(){
			this.init();
		};
		init(){
			this.list = $( ".banner_ul" );
			this.li = $( ".banner_ul li" );
			this.details = $( ".banner_details" );
			this.de = $( ".banner_details_wrap" );
			// 设置延迟器
			this.timeout1 = null;
			this.timeout2 = null;
			this.list.on( "mouseenter", $.proxy( this.show, this ) );
			this.list.on( "mouseleave", $.proxy( this.hide, this ) );
			this.details.on( "mouseenter", $.proxy( this.touch, this ) );
			this.details.on( "mouseleave", $.proxy( this.touch_over, this ) );
			this.touch = false;
			this.act();
		};
		act(){
			let _this = this;
			this.li.each( function( index ){
				_this.li.eq( index ).on( "mouseenter", function(){
					_this.li.eq( index ).addClass( "liAct" );
					_this.li.eq( index ).siblings().removeClass( "liAct" );
					_this.li.eq( index ).find( "span" ).addClass( "banner_mask_act" );
					_this.li.eq( index ).siblings().find( "span" ).removeClass( "banner_mask_act" );
					_this.de.eq( index ).addClass( "show_act" );
					_this.de.eq( index ).siblings().removeClass( "show_act" );
				} );
			} );
		};
		show(){
			this.details.css( {
				display : "block"
			} );
		};
		hide(){
			var _this = this;
			clearTimeout( this.timeout1 );
			this.timeout1 = setTimeout(function(){
				if(_this.touch == false){
					_this.details.css( {
						display : "none"
					} );	
					_this.li.removeClass( "liAct" );
					_this.li.find( "span" ).removeClass( "banner_mask_act" );
				}
			},20)
		};
		touch(){
			this.touch = true;
		};
		touch_over(){
			this.touch = false;
			this.details.css( {
				display : "none"
			} );	
			this.li.removeClass( "liAct" );
			this.li.find( "span" ).removeClass( "banner_mask_act" );
		};
	};
	return new Blist();
} );