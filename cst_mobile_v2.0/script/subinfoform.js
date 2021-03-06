$(function() {
	$.mvalidateExtend({
        phone:{
            required : true,   
            pattern : /^0?1[3|4|5|8][0-9]\d{8}$/,
            each:function(){
               
            },
            descriptions:{
                required : '<div class="field-invalidmsg">请输入手机号码</div>',
                pattern : '<div class="field-invalidmsg">您输入的手机号码格式不正确</div>',
                valid : '<div class="field-validmsg">正确</div>'
            }
        }
    });
    $("#form").mvalidate({
        type:1,
        onKeyup:true,
        sendForm:true,
        firstInvalidFocus:false,
        valid:function(event,options){
            //点击提交按钮时,表单通过验证触发函数
            //alert("验证通过！接下来可以做你想做的事情啦！");
            //window.open("./subinfo-in.html");
            $(".subinfo_in").show();
            event.preventDefault();
        },
        invalid:function(event, status, options){
            //点击提交按钮时,表单未通过验证触发函数
        },
        eachField:function(event,status,options){
            //点击提交按钮时,表单每个输入域触发这个函数 this 执向当前表单输入域，是jquery对象
        },
        eachValidField:function(val){},
        eachInvalidField:function(event, status, options){},
        conditional:{
            confirmpwd:function(){
                return $("#pwd").val()==$("#confirmpwd").val();
            }
        },
        descriptions:{
            username:{
                required : '请输入您的姓名'
            },
            age : {
                required : '请输入年龄',
                pattern : '你输入的年龄格式不正确'
            },
            password:{
                 required : '请输入密码'
            },
            confirmpassword:{
                required : '请再次输入密码',
                conditional : '两次密码不一样'
            },
            address:{
                required : '请选择地址'
            },
            intro:{
                required : '请输入个人介绍'
            },
            favourite:{
                required : '请选择个人爱好'
            },
            sex:{
                required : '请选择性别'
            }
        }
    });
	
})
