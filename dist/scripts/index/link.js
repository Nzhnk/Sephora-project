define( [ "jquery" ], function(){
	class Link{
		constructor(){};
		init(){
			// 获取链接
			this.t_log = $( ".top_login" );
			this.t_register = $( ".top_register" );
			this.t_log.on( "click", $.proxy( this.to_login, this) );
			this.t_register.on( "click", $.proxy( this.to_register, this) );
		};
		to_login(){
			self.location.href = "http://localhost:8888/html/login.html";
		};
		to_register(){
			self.location.href = "http://localhost:8888/html/register.html";
		};
		to_list(){
			self.location.href = "http://localhost:8888/html/commodity_list.html";
		};
	};
	return new Link();
} );