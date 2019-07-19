<template>
	<main>
		<mt-header class="t" title="注册美食杰">
		  	<mt-button @click="back()" slot="left" class="l">返回</mt-button>
		  	<router-link to="/login" slot="right">
		  		<mt-button class="r">登录</mt-button>
	  	  	</router-link>
		</mt-header>
		
		<!--tab切换按钮-->
		<div class="nav">
			<mt-navbar v-model="selected">
			  	<mt-tab-item :class="{active:selected=='tab1'}" @click.native.prevent="selected = 'tab1'">手机注册</mt-tab-item>
			  	<mt-tab-item :class="{active:selected=='tab2'}" @click.native.prevent="selected = 'tab2'">邮箱注册</mt-tab-item>
			</mt-navbar>
		</div>	
		<!--tab切换内容-->
		<div class="nav_container">
			<mt-tab-container v-model="selected">
			  	<mt-tab-container-item id="tab1">
		  			<button class="num" id="code" @click.stop="gotime()">发送验证码</button>
		  			<form class="signbox" @submit.prevent="check()">
		  				
						<input type="text" id="num" placeholder="手机号" />
						<input type="password" id="pwd" placeholder="密码" />
						<input type="text" id="mycode" placeholder="验证码" />
						<br />
						<button class="res">注册</button>
					</form>
			  	</mt-tab-container-item>
			  	<mt-tab-container-item id="tab2">
			    	<form class="signbox" @submit.prevent="checks()">
						<input type="text" id="mail" placeholder="邮箱" />
						<input type="password" id="pwds" placeholder="密码" />
						<br />
						<button class="res">注册</button>
					</form>
			  	</mt-tab-container-item>
			</mt-tab-container>
		</div>
		
		<p class="ignore">忘记密码？</p>
		<div class="otherbox">
			<span class="qq">QQ登录</span>
			<span class="weibo">微博登录</span>
		</div>
		
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		name:'nav_container',
		data(){
			return{
				selected:'tab1'
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			gotime(){
				var tt = 60
				var timer=setInterval(()=>{
					tt--;
					code.disabled=true;
					code.innerText = tt+'s';
					if(tt==0){
						code.innerText = '重新发送';
						code.disabled=false;
						clearInterval(timer)
					}
				},1000)
			},
			check(){
				var a = true;
				if(num.value==""){
					Toast({
						message:'请先输入您手机号码~'
					});
					a = false
				}
				else if(!(/^[1][3,4,5,7,8][0-9]{9}$/).test(num.value)){
					Toast({
						message:'手机号码输入有误！'
					});
					a = false
				}
				else if(pwd.value==""){
					Toast({
						message:'亲，忘了设置密码啦~'
					});
					a = false
				}
				else if(!(/^(\w){6,20}$/).test(pwd.value)){
					Toast({
						message:'密码不能包含特殊字符噢~'
					});
					a = false
				}
				else if(mycode.value==""){
					Toast({
						message:'验证码不能为空！'
					});
					a = false
				}
				else{
					a = true
				}
				return a
			},
			checks(){
				var a = true;
				if(mail.value==""){
					Toast({
						message:'请先输入您邮箱账号~'
					});
					a = false;
				}
				else if(!(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/).test(mail.value)){
					Toast({
						message:'邮箱账号输入有误！'
					});
					a = false;
				}
				else if(pwds.value==""){
					Toast({
						message:'亲，忘了设置密码啦~'
					});
					a = false;
				}
				else if(!(/^(\w){6,20}$/).test(pwds.value)){
					Toast({
						message:'密码不能包含特殊字符噢~'
					});
					a = false;
				}
				else{
					a = true;
				}
				return a
			}
		}
	}
</script>

<style scoped>
	main{
		width: 100%;
	    height: 100%;
	    background-color: #f5f5f5;
	    position: fixed;
	}
	.t{
		height: 50px;
	    background: #fdfdfd;
	    padding: 0px 16px;
	    color: #000;
	    font-size: 18px;
	}
	.l{
	    background: url(../../assets/images/back_icon.png) left center no-repeat;
    	background-size: 19px 44px;
    	padding-left: 16px;
	}
	.l,.r{
		color: #ff5151;
		font-size: 16px;
	}
	/*tab切换*/
	.nav{
		width: 90%;
		margin: 16px auto;
	    border-radius: 2px;
	    overflow: hidden;
	    border: 1px solid #ff5151;
	    box-sizing: border-box;
	}
	.mint-tab-item{
		padding: 8px 0;
		font-size: 14px;
		color: #ff5151;
	}
	.active{
		background: #ff5151;
    	color: #fff;
	}
	/*表单*/
	.signbox{
		margin-top: 16px;
		position: relative;
	}
	.signbox input{
	    width: 100%;
		height: 44px;
	    background: #fdfdfd;
	    font-size: 16px;
	    padding: 10px 16px;
	    border: 0px;
	    box-sizing: border-box;
	    border-bottom: 1px solid #f5f5f5;
	}
	.num{
		/*content: '发送验证码';*/
		display: block;
		height: 30px;
	    line-height: 30px;
	    border-radius: 2px;
	    font-size: 14px;
	    color: #fff;
	    background: #ff5151;
	    padding: 0px 10px;
	    position: absolute;
	    right: 16px;
	    top: 23px;
	    z-index: 1;
	    border: none;
	    outline: none;
	}
	.res{
		width: 90%;
		height: 44px;
	    background: #ff5151;
	    font-size: 16px;
	    color: #fff;
	    margin-top: 16px;
	    border-radius: 2px;
	    border: 0px;
	    outline: none;
	}
	.ignore{
	    font-size: 14px;
		color: #999;
		line-height: 44px;
	}
	.otherbox{
	    width: 100%;
	    margin-top: 25px;
	}
	.otherbox span{
		width: 62px;
		display: inline-block;
	    margin: 0px 15px;
	    padding-top: 62px;
	    line-height: 46px;
	    font-size: 14px;
		background-size: 62px 62px;
	}
	.qq{
		background: url(../../assets/images/QQ_login.png) center top no-repeat;
	}
	.weibo{
		background: url(../../assets/images/weibo_login.png) center top no-repeat;
	}
</style>