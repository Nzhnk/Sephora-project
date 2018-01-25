/* 创建新地址 */
define( [ "jquery" ], function(){
	class Newaddress{
		constructor(){
			this.init();
		};
		init(){
			// 获取元素
			this.add_a = $( ".add_per_ads" );
			this.add_box = $( "#newAddress" );
			this.close_add_box = $( ".close_add" );
			this.save = $( ".save" );
			this.chose_add = $( ".per_con" );

			this.add_a.on( "click", $.proxy( this.create_ads, this ) );
			this.close_add_box.on( "click", $.proxy( this.create_ads_close, this ) );
			this.save.on( "click", $.proxy( this.create_ads_close, this ) );
			this.chose_add.on( "click", $.proxy( this.chose, this ) );
		};
		create_ads(){
			this.add_box.fadeIn();
		};
		create_ads_close( e ){
			if( $( e.target ).attr( "class" ) === "close_add" ){
				$( ".new_body_li_02" ).find( "input" ).val( "" );
			};
			if( $( e.target ).attr( "class" ) === "save" ){
				// console.log($("#input_province").val(),$("#input_city").val())
				if( $( ".shr_input" ).val() && $( ".dz_input" ).val() && $( ".sjhm_input" ).val() && $("#input_province").val() && $("#input_city").val() && $("#input_area").val() ){
					console.log("OK !");
					this.add_msg = `收货人：${ $( ".shr_input" ).val() }    收货地址：${ $("#input_province").val() }${ $("#input_city").val() }${ $("#input_area").val() }${ $( ".dz_input" ).val() }    联系电话：${ $( ".sjhm_input" ).val() }`;
					// 创建信息地址
					let $div = $( "<div></div>" );
					$div.attr( {"class": "new_add_create", "nzh" : "nzh" });
					$div.html( this.add_msg );
					this.chose_add.append( $div );
				} else {
					console.log("带星号的为必填项");
					return;
				};
			};
			this.add_box.fadeOut();
		};
		// 选择地址
		chose( e ){
			if( $( e.target ).attr( "nzh" ) === "nzh" ){
				$( e.target ).addClass( "chose_add" )
				.siblings().removeClass( "chose_add" );
			};
			$( ".new_add_create" ).each( function( index, item ){
				if( $( item ).hasClass( "chose_add" ) ){
					$( ".hj4" ).html( $( item ).html() );
				};
			} );
		};
	};
	return new Newaddress();
} );