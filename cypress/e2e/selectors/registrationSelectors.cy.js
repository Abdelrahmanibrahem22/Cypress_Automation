module.exports={
name: '#firstName',    
usernameField: '#login',
phone:'[type="tel"]',
country:'#country',
contryFlag:'.selected-flag',
searchBox:'.search-box',
passwordField: '#password',
confirmationPassword:'#passwordConfirm',
registerButton:'[type="submit"]',
successRegister:'//*[@id="__next"]/div[1]/div[1]/div[2]/div[1]/div/div[1]/div',
googleButton:'[class="ant-btn ant-btn-link flex h-12 cursor-pointer items-center justify-center rounded-2xl bg-[#F4F7FE] text-black hover:bg-[#F4F7FE] hover:text-black focus:bg-[#F4F7FE] focus:text-black active:bg-[#F4F7FE] active:text-black"]',
gotologin:'//*[@id="__next"]/div[1]/div/div/div[1]/div[1]/form/button',
alertInvalidEmail:'#login_help',//البريد الإلكتروني  غير صحيح
alertInvalidpassword:'#password_help',//يجب أن  تتضمن كلمة المرور - في أقل تقدير -  8 أحرف، بها حرف كبير واحد على الأقل، وأحد الأرقام، وأحد الرموز ولا تحتوي على مسافات.
alertWrongConfiramtionPassword:'#passwordConfirm_help',//كلمة المرور وتأكيد كلمة المرور غير متطابقان
alertEmptyName:'#firstName_help',//يجب إدخال  الاسم بالكامل
alertEmptyEmail:'#login_help',//يجب إدخال  عنوان البريد الإلكتروني
alertEmptyPassword: '#password_help',//يجب إدخال  كلمة المرور
alertEmptyConfiramtionPassword:'#passwordConfirm_help',//يجب إدخال  تأكيد كلمة المرور
successLogin:'.ant-alert ant-alert-success ant-alert-with-description',////*[@id="__next"]/div[1]/div[1]/div[2]/div[1]



}