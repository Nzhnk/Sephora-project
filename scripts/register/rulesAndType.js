define( [ "jquery" ], function(){
	class RulesAndType{
		constructor(){
			this.init();
		};
		init(){
			// console.log(123);
			// 获取点击元素
			this.rules = $( ".read p" );
			this.t_email = $( ".t_email" );
			this.t_phone = $( ".t_phone" );
			this.rules_box = $( "#rules" );
			this.close_btn = $( ".rules_close" );
			this.allow_btn = $( ".rules_btn" );
			this.reg_email = $( ".reg_email" );
			this.reg_phone = $( ".reg_phone" );
			this.rules.on( "click", $.proxy( this.rules_show, this ) );
			this.close_btn.on( "click", $.proxy( this.rules_hide, this ) );
			this.allow_btn.on( "click", $.proxy( this.rules_hide, this ) );
			this.t_email.on( "click", $.proxy( this.to_phone, this ) );
			this.t_phone.on( "click", $.proxy( this.to_email, this ) );
		};
		rules_show(){
			this.rules_box.css( "display", "block" );
		};
		rules_hide(){
			this.rules_box.css( "display", "none" );
		};
		to_phone(){
			this.reg_phone.css( "display", "none" );
			this.reg_email.css( "display", "block" );
		};
		to_email(){
			this.reg_email.css( "display", "none" );
			this.reg_phone.css( "display", "block" );
		};
	};
	return new RulesAndType();
} );