define( [ "jquery" ], function(){
	class Inspect{
		constructor(){};
		init(){
			// 获取元素值
			this.user = $( ".username" );
			this.pass = $( ".password" );
			// 获取登录按钮
			this.btn = $( ".btn" );
			this.mask = $( ".btn_mask" );
			// 获取提示
			this.tip = $( ".tip" );
			// 定义正则规则
			this.reg_phone = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
			this.reg_email = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
			this.user.on( "input", $.proxy( this.e_input, this ) );
			this.pass.on( "input", $.proxy( this.e_input, this ) );
			this.btn.on( "click", $.proxy( this.reg_val, this ) );
		};
		e_input(){
			let user = this.user.val();
			let pass = this.pass.val();
			if( user && pass ){
				this.mask.css( {
					display : "none"
				} );
			} else {
				this.mask.css( {
					display : "block"
				} );
			}
		};
		reg_val(){
			let user = this.user.val();
			let pass = this.pass.val();
			// console.log(user,pass)
			// 设置标记
			let flag = false;
			// 正则判断
			if( this.reg_phone.test( user ) || this.reg_email.test( user ) ){
				// console.log("格式正确!")
				flag = true;
			} else {
				this.user.parent().css( {
					borderBottomColor : "#f12526"
				} );
				$( ".tip_01" ).css( {
					display : "block"
				} );
				this.user.parent().find( "b" ).attr( "class", "error" ).css( {
					display : "block"
				} );
				flag = false;
				this.mask.css( {
					display : "block"
				} );
				return;
			};
			if( pass.length >= 6 && pass.length <= 16 ){
				flag = true;
			} else {
				this.pass.parent().css( {
					borderBottomColor : "#f12526"
				} );
				$( ".tip_02" ).css( {
					display : "block"
				} );
				this.pass.parent().find( "b" ).attr( "class", "error" ).css( {
					display : "block"
				} );
				flag = false;
				this.mask.css( {
					display : "block"
				} );
				return;
			};


			// 获取cookie
			let sCookie = $.cookie( user );
			let obj = JSON.parse( sCookie );
			// 模拟登录成功
			let num = Math.random();
			if( flag ){
				if( obj.userphone === user && obj.password === pass ){
					this.tip.children().css( {
						display : "none"
					} );
					this.user.parent().find( "b" ).attr( "class", "success" ).css( {
						display : "block"
					} );
					this.pass.parent().find( "b" ).attr( "class", "success" ).css( {
						display : "block"
					} );
					let _s = self;
					setTimeout( function(){
						_s.location.href= "http://localhost:8888/index.html";
					}, 500 );
				} else {
					$( ".tip_03" ).css( {
						display : "block"
					} );
					this.pass.parent().find( "b" ).attr( "class", "error" ).css( {
						display : "block"
					} );
					this.user.parent().find( "b" ).attr( "class", "error" ).css( {
						display : "block"
					} );
				};
			};
		};
		allow_sub(){

		};
	};
	return new Inspect();
} );