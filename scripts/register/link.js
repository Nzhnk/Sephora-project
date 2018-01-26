define( [ "jquery" ], function(){
	class Links{
		constructor(){
			this.init();
		};
		init(){
			// 获取链接
			this.logo = $( ".head_con h1 a" );
			this.login = $( ".head_to_login p a" );
			
			this.logo.on( "click", $.proxy( this.to_index, this ) );
			this.login.on( "click", $.proxy( this.to_login, this ) );
			
		};
		to_index(){
			self.location.href = "index.html";
		};
		to_login(){
			self.location.href = "login.html";
		};
	};
	return new Links();
} );