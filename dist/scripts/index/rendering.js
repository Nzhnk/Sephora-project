define( [ "jquery" ], function(){
	class Rendering{
		constructor(){};
		init( str_url ){
			/* brands */
			this.$all_brands = $( ".brands_type li" );
			this.$all_brands_type = $( "#brands .common_p a" );

			/* picks */
			this.$picks = $( ".picks_ul li" );

			/* skincare */
			this.get_dom( "skincare" );

			/* makeup */
			this.get_dom( "makeup" );

			/* fragrance */
			this.get_dom( "fragrance" );

			/* bodycare */
			this.get_dom( "bodycare" );

			/* manskincare */
			this.get_dom( "manskincare" );

			/* haircare */
			this.get_dom( "haircare" );

			/* tools */
			this.get_dom( "tools" );

			/* guessyoulike */
			this.$like = $( ".guessyoulike_show li" );

			/* head_brands_right */
			this.$letter = $( ".head_brands_right" );
			// console.log( this.$letter );
			this.$l = $( ".head_brands_letter" );
			let url = {
				url : str_url,
				type : "GET",
				context:this
			}
			$.ajax( url ).then( $.proxy( this.render, this ) );
		};
		get_dom( dom ){
			eval( `
				this.$${dom}_slogan = $( ".${dom}_con .common_poster" );
				this.$${dom}_type = $( ".${dom}_con .common_ul li" );
				this.$${dom}_goods = $( ".${dom}_con .common_show li" );
				this.$${dom}_brands = $( ".${dom}_con .common_slogan li" );
			` );
		};
		/* 渲染首页 */
		render( res ){
			// console.log(res.nav);
			this.res = res;
			let this_ = this;
			let nav = res.nav ;
			$.each( nav, function( index, item ){
				$.each( item, function( ind, it ){
					let $ul = $( '<ul></ul>' );
					$.each( it, function( i ){
						if( i > 0 ){
							let $li = $( '<li></li>' );
							let $a = $( '<a></a>' );
							$a.attr( "href", "javascript:;" );
							$a.html( it[i] );
							$li.append( $a );
							$ul.append( $li );
						};
					} );
					this_.$l.eq( ind ).append( $ul );
				} );
			} );
			/* brands 渲染 */
			$( res.all_brands.brands ).each( function( index, item ){
				this_.$all_brands.eq( index ).find( "img" ).attr( "src", item );
			} );
			$( res.all_brands.brands_name ).each( function( index, item ){
				this_.$all_brands.eq( index ).find( "p" ).html( item );
			} );
			$( res.all_brands.type ).each( function( index, item ){
				this_.$all_brands_type.eq( index ).html( item );
			} );

			/* picks 渲染 */
			$( res.picks.goods ).each( function( index, item ){
				this_.$picks.eq( index ).find( ".picks_info_1" ).html( item.title );
				this_.$picks.eq( index ).find( ".picks_info_2" ).html( item.describe );
				this_.$picks.eq( index ).find( ".picks_price" ).html( "￥" + item.price );
				this_.$picks.eq( index ).find( "img" ).attr( {
					"src" : item.img,
					"alt" : item.describe
				} );
			} );

			/* skincare 渲染 */
			this.loading( "skincare" );

			/*makeup 渲染*/
			this.loading( "makeup" );

			/* fragrance 渲染 */
			this.loading( "fragrance" );

			/* bodycare 渲染 */
			this.loading( "bodycare" );

			/* manskincare 渲染 */
			this.loading( "manskincare" );

			/* haircare 渲染 */
			this.loading( "haircare" );

			/* tools 渲染 */
			this.loading( "tools" );

			/* guessyoulike */
			$( res.guessyoulike ).each( function( index, item ){
				this_.$like.eq( index ).find( "img" ).attr( {
					"src" : item.img,
					"alt" : item.describe
				} );
				this_.$like.eq( index ).find( "p" ).html( item.title );
				this_.$like.eq( index ).find( ".guessyoulike_des" ).html( item.describe );
				this_.$like.eq( index ).find( ".guessyoulike_price" ).html( "￥" + item.price );
			} );
		};
		loading( str ){
			let this_ = this;
			eval( `
				this.$${str}_slogan.find( "img" ).attr( {
					"src" : this.res.${str}.slogan,
					"alt" : "${str}"
				} );
				$( this.res.${str}.type ).each( function( index, item ){
					this_.$${str}_type.eq( index ).find( "a" ).html( item );
				} );
				$( this.res.${str}.goods ).each( function( index, item ){
					this_.$${str}_goods.eq( index ).find( ".common_name" ).html( item.title );
					this_.$${str}_goods.eq( index ).find( ".common_describe" ).html( item.describe );
					this_.$${str}_goods.eq( index ).find( ".common_price" ).html( "￥" + item.price );
					this_.$${str}_goods.eq( index ).find( ".common_img img" ).attr( {
						"src" : item.img,
						"alt" : item.describe
					} );
				} );
				$( this.res.${str}.brands ).each( function( index, item ){
					this_.$${str}_brands.eq( index ).find( "img" ).attr( "src", item ); 
				} );
			` );
		};
	};
	return new Rendering();
} );