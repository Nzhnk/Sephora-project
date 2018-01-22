define( [ "jquery" ],function(){
	class Link{
		constructor(){};
		init(){
			// 获取跳转按钮
			this.jump = $( ".head_con h1 a" );
			this.reg = $( ".register a" );
/*			// 登录按钮
			this.login = $( ".btn" );*/
			this.jump.on( "click", $.proxy( this.to_index, this ) );
			this.reg.on( "click", $.proxy( this.to_register, this ) );
		};
		to_index(){
			this.jump.attr( "href", "http://localhost:8888/index.html" );
		};
		to_register(){
			this.reg.attr( "href", "http://localhost:8888/html/register.html" );
		};
	};
	return new Link();
} );