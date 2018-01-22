define( [ "jquery", "cookie" ], function(){
	class DataTest{
		constructor(){
			this.init();
		};
		init(){
			// console.log(123);
			// 模拟验证码图片数组
			this.code_img = ["../images/register/001.jpg","../images/register/002.jpg","../images/register/003.jpg","../images/register/004.jpg","../images/register/005.jpg","../images/register/006.jpg","../images/register/007.jpg","../images/register/008.jpg","../images/register/009.jpg","../images/register/010.jpg","../images/register/011.jpg","../images/register/012.jpg","../images/register/013.jpg","../images/register/014.jpg","../images/register/015.jpg","../images/register/016.jpg","../images/register/017.jpg","../images/register/018.jpg","../images/register/019.jpg","../images/register/020.jpg","../images/register/021.jpg","../images/register/022.jpg","../images/register/023.jpg","../images/register/024.jpg","../images/register/025.jpg","../images/register/026.jpg","../images/register/027.jpg","../images/register/028.jpg","../images/register/029.jpg","../images/register/030.jpg","../images/register/031.jpg","../images/register/032.jpg","../images/register/033.jpg","../images/register/034.jpg","../images/register/035.jpg","../images/register/036.jpg","../images/register/037.jpg","../images/register/038.jpg","../images/register/039.jpg","../images/register/040.jpg","../images/register/041.jpg","../images/register/042.jpg","../images/register/043.jpg","../images/register/044.jpg","../images/register/045.jpg","../images/register/046.jpg","../images/register/047.jpg","../images/register/048.jpg","../images/register/049.jpg","../images/register/050.jpg"];
			// 模拟验证码
			this.code = ["7GS0","4ZK0","Y0VW","RKU9","7D3Y","6RER","Z3N2","5VPL","0KO6","SB2N","4WF2","9H38","29UB","W56B","8C3F","T08E","5H71","UH9Z","F7QV","1LD6","6WI3","0Z6N","L64G","3I3E","64O7","L6OK","0E9K","M5LQ","D0XU","9XGB","8XMG","53CF","RVP3","14DO","O6S0","4MRI","19BE","D1JT","6O9Z","P3HH","C67S","8KQL","T3IM","T5F4","4LQ4","MFU0","PH37","4LTQ","D37Y","S88W"];
			// 获取元素
			this.code_p = $( ".code_p" );
			this.code_e = $( ".code_e" );
			// 验证码
			this.is_code = $( ".code_input_p" );
			// 手机号
			this.is_phone = $( ".phone_p" );
			// 短信验证码
			this.is_msg = $( ".msg_p" );
			// 密码
			this.is_pass = $( ".pass_p1" );
			// 确认密码
			this.is_true_pass = $( ".pass_p2" );
			// 提交按钮
			this.submit_p = $( ".btn_p" );
			// 遮罩层
			this.mask_p = $( ".mask_p" );
			// 父级
			this.box_p = $( ".in_p" );
			// 设置定时器
			this.timer = null;
			this.timer1 = null;
			this.code_p.on( "click", $.proxy( this.change_code_p, this ) );
			this.code_e.on( "click", $.proxy( this.change_code_e, this ) );
			this.count = 1;
			// 定义正则
			this.reg_phone = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
			this.reg_msg = /^\d{6}$/ ;
			// 输入事件
			this.box_p.find( "input" ).on( "input", $.proxy( this.input_p, this ) );
			this.box_p.find( "input" ).on( "focus", $.proxy( this.focus_p, this ) );
			this.box_p.find( "input" ).on( "blur", $.proxy( this.blur_p, this ) );
			this.box_p.find( "em" ).on( "click", $.proxy( this.delete_p, this ) );
			this.submit_p.on( "click", $.proxy( this.test_p, this ) );
		};
		focus_p( e ){
			// clearTimeout( this.timer1 );
			this.box_p.find( e.target ).parent()
			.css( "border-bottom-color", "#000" )
			.find( "em" ).css( {
				backgroundPosition : "-20px -18px",
				display:"block"
			} );
			this.box_p.find( e.target ).parent().parent().find( ".error_tip" ).children().remove();
		};
		blur_p( e ){
			let _this = this;
			this.timer1 = setTimeout( function(){
				_this.box_p.find( e.target ).parent()
				.css( "border-bottom-color", "#ccc" )
				.find( "em" ).css( {
					display:"none"
				} );
			}, 300 );
		};
		change_code_p(){
			let _this = this;
			// 创建随机数
			this.num1 = Math.round( Math.random() * ( _this.code.length - 1 ) );
			this.code_p.attr( {
				src : _this.code_img[ _this.num1 ]
			} );
		};
		change_code_e(){
			let _this = this;
			// 创建随机数
			this.num2 = Math.round( Math.random() * ( _this.code.length - 1 ) );
			this.code_e.attr( {
				src : _this.code_img[ _this.num2 ]
			} );
		};
		delete_p( e ){
			clearTimeout( this.timer1 );
			this.box_p.find( e.target ).parent()
			.css( "border-bottom-color", "#ccc" )
			.find( "input" ).val( "" );
			this.box_p.find( e.target ).css( "display", "none" );
		};
		input_p(){
			let _this = this;
			clearTimeout( this.timer );
			this.timer = setTimeout( function(){
				let vcode = _this.is_code.val();
				let vphone = _this.is_phone.val();
				let vmsg = _this.is_msg.val();
				let vpass = _this.is_pass.val();
				let vtpass = _this.is_true_pass.val();
				// console.log(vcode,vphone,vmsg,vpass,vtpass)
				if( vcode && vphone && vmsg && vpass && vtpass ){
					_this.mask_p.css( "display", "none" );
				} else {
					_this.mask_p.css( "display", "block" );
				};
			}, 500 );
		};
		test_p(){
			clearTimeout( this.timer1 );
			let vcode = this.is_code.val().toUpperCase();
			let vphone = this.is_phone.val();
			let vmsg = this.is_msg.val();
			let vpass = this.is_pass.val();
			let vtpass = this.is_true_pass.val();
			this.flag = false;
			// 正则
			// 图形验证码
			if( vcode === this.code[ this.num1 ] ){
				this.flag = true;
				this.is_code.parent()
				.css( "borderBottomColor", "#4cd964" )
				.find( "em" ).css( {
					backgroundPosition : "-20px 0px",
					display : "block"
				} );
				this.count = 1;
			}else{
				this.flag = false;
				this.is_code.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				if( this.count == 1 ){
					this.errot_msg( "图形验证码错误" );
					this.change_code_p();
					this.is_code.parent().parent().find( ".error_tip" ).append( this.div, this.span );
					this.count = 0;
				};
				return;
			};


			// 手机号验证
			if( this.reg_phone.test( vphone ) ){
				// console.log("OK");
				this.flag = true;
				this.is_phone.parent()
				.css( "borderBottomColor", "#4cd964" )
				.find( "em" ).css( {
					backgroundPosition : "-20px 0px",
					display : "block"
				} );
			} else{
				// console.log("手机号no");
				this.flag = false;
				this.is_phone.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				this.errot_msg( "请填写手机号" );
				this.is_phone.parent().parent().find( ".error_tip" ).append( this.div, this.span );
				return;
			};
			// 密码
			if( vpass.length >= 6 && vpass.length <= 16 ){
				this.flag = true;
				this.is_pass.parent()
				.css( "borderBottomColor", "#4cd964" )
				.find( "em" ).css( {
					backgroundPosition : "-20px 0px",
					display : "block"
				} );

			} else {
				this.flag = false;
				this.is_pass.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				this.errot_msg( "密码少于6位或者大于16位" );
				this.is_pass.parent().parent().find( ".error_tip" ).append( this.div, this.span );
				return;
			};
			// 确认密码
			if( vpass === vtpass ){
				this.flag = true;
				this.is_true_pass.parent()
				.css( "borderBottomColor", "#4cd964" )
				.find( "em" ).css( {
					backgroundPosition : "-20px 0px",
					display : "block"
				} );
			} else {
				this.flag = false;
				this.is_true_pass.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				this.errot_msg( "两次输的密码不一致" );
				this.is_true_pass.parent().parent().find( ".error_tip" ).append( this.div, this.span );
				return;
			};


			// 短信验证码
			if( this.reg_msg.test( vmsg ) ){
				this.flag = true;			
				this.is_msg.parent()
				.css( "borderBottomColor", "#4cd964" )
				.find( "em" ).css( {
					backgroundPosition : "-20px 0px",
					display : "block"
				} );
			} else {
				// console.log("短信验证码错误")
				this.flag = false;
				this.is_msg.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				this.errot_msg( "短信验证码错误" );
				this.is_msg.parent().parent().find( ".error_tip" ).append( this.div, this.span );
				return;
			};

			// 注册提交
			if( this.flag ){
				let _this = this;
				this.flag_timer = setTimeout( function(){
					_this.true_p( vphone, vpass );
				}, 300 );
			};
		};
		true_p( userphone, password ){
			if( $.cookie( userphone ) ){
				this.flag = false;
				this.is_phone.parent()
				.css( "borderBottomColor", "#ff0700" )
				.find( "em" ).css( {
					backgroundPosition : "-20px -36px",
					display : "block"
				} );
				this.errot_msg( "用户名已存在!" );
				this.is_phone.parent().parent().find( ".error_tip" ).append( this.div, this.span );
				return;
			} else {
				let zh = '{"userphone":"'+userphone+'","password":"'+password+'"}';
				$.cookie( userphone , zh, {
				    expires:20,  
				    path:'/'
				} );　
				console.log( $.cookie(userphone) )
			};
		};
		errot_msg( str_msg ){
			this.div = $( "<div></div>");
			this.div.css( {
			    float: "left",
			    margin: "5px 0 0",
			    width: "14px",
			    height: "14px",
			    backgroundPosition:" -38px -14px",
			    backgroundImage:" url(../images/register/LoginIn-icon.png)",
				content: '""'
			} );
			this.span = $( "<span></span>" );
			this.span.css( {
			    float: "left",
			    display: "block",
			    marginLeft: "5px",
		        color: "#f12526",
		        lineHeight: "24px",
	            fontSize: "12px"
			} );
			this.span.html( str_msg );
		};
	};
	return new DataTest();
} );