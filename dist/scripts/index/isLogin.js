/* 判断登录状态 */
/*define( [ "jquery", "cookie" ], function(){
	class IsLogin{
		constructor(){
			this.init();
		};
		init(){
			// 
			this.userLogin = $( ".top_login" );
			this.userOut = $( ".user_out" );
			this.userRegister = $( ".top_register" );
			this.userFirst = $( ".top_first_login" );
			// 获取用户名
			this.userName = $( ".user_name" );
			// 先获取登录者
			if( $.cookie( "login_status" ) ){
				this.cus = $.cookie( "login_status" );
				// console.log( this.cus );
				let str = this.cus;
				this.str = str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
				// console.log( this.str );
			} else {
				this.no_user();
				return;
			};
			
			// 获取cookie
			this.sCookie = $.cookie( this.cus );
			this.aCookie = JSON.parse( this.sCookie );
			this.login = this.aCookie.login;
			if( this.login == true ){
				this.user_show();
			} else {
				this.no_user();
			};

			this.userOut.on( "click", $.proxy( this.no_user, this ) );
		};
		user_show(){
			this.userName.find( "span" ).html( this.str );
			this.userOut.css( "display", "block" );
			this.userLogin.css( "display", "none" );
			this.userRegister.css( "display", "none" );
			this.userFirst.css( "display", "none" );
		};
		no_user(){
			this.userName.css( "display", "none" );
			this.userOut.css( "display", "none" );
			this.userLogin.css( "display", "block" );
			this.userRegister.css( "display", "block" );
			this.userFirst.css( "display", "block" );
			this.aCookie.login = "false";
			let sCookie = JSON.stringify( this.aCookie );
			$.cookie( this.cus, sCookie );
		};
	};
	return new IsLogin();
} );*/