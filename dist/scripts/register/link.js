define( [ "jquery" ], function(){
	class Links{
		constructor(){
			this.init();
		};
		init(){
			// 获取链接
			this.logo = $( ".head_con h1 a" );
			this.login = $( ".head_to_login p a" );
			this.allow = $( ".btn_p" );
			this.logo.on( "click", $.proxy( this.to_index, this ) );
			this.login.on( "click", $.proxy( this.to_login, this ) );
			this.allow.on( "click", $.proxy( this.to_index, this ) );
		};
		to_index(){
			self.location.href = "http://localhost:8888/index.html";
		};
		to_login(){
			this.login.attr( "href", "http://localhost:8888/html/login.html" );
		};
	};
	return new Links();
} );