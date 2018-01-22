define( [ "jquery" ], function(){
	class Search2{
		constructor(){};
		init( dom ){
			this.$dom = dom.children();
			this.$list = dom;
			this.search = $( ".fixed_text" );
			// 设置定时器
			this.timer = null;
			this.search.on( "input", $.proxy( this.result, this ) );
			this.$list.on( "mouseleave", $.proxy( this.out, this ) );
			this.search.on( "click", $.proxy( this.focus, this ) );
		};
		result(){
			let $val = this.search.val();
			let this_ = this;
			clearTimeout( this.timer );
			this.timer = setTimeout( function(){
				this_.$list.css( {
					"display" : "block"
				} );
				$.ajax({
					url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $val + "&cb=callback",
					type: "GET",
					dataType: "jsonp", //指定服务器返回的数据类型
					jsonpCallback: "callback", // 指定回调函数名字
					success: function (data) {
						// console.log( data.s );
						let n = 6;
						for( let i = 0 ; i < n ; i ++ ){
							this_.$dom.eq( i ).children().html( data.s[ i ] );
						};
					}
				});
				if( $val == "" ){
					this_.$dom.children().html( "" );
					this_.$list.css( {
						"display" : "none"
					} );
				}
			}, 500 );
		};
		out(){
			this.$list.css( {
				"display" : "none"
			} );
		};
		focus(){
			let $val = this.search.val();
			if( $val ){
				this.$list.css( {
					"display" : "block"
				} );
			};
		};
	};
	return  new Search2();
} );