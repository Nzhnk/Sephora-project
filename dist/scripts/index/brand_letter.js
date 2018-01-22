define( [ "jquery" ], function(){
	class Brands{
		constructor(){
			this.init();
		};
		init(){
			this.le = $( ".head_brands_left" ).find( "span" ).not( $( ".no_letter" ) );
			this.map_le = $( ".head_brands_letter" ).find( "p" );
			this.dis = $( ".head_brands_right" );
			this.show();
		};
		show(){
			let this_ = this;
			this.le.each( function( index ){
				this_.le.eq( index ).on( "click", function(){
					let h = this_.map_le.eq( index ).position().top;
					this_.dis.stop( true ).animate( {
						scrollTop:h
					}, "slow" );
				} );
			} );
		};
	};
	return new Brands();
} );