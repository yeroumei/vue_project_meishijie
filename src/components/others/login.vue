<template>
	<main id="m">
		<mt-header class="t" title="登录美食杰">
		  	<mt-button @click="back()" slot="left" class="l">返回</mt-button>
		  	<router-link to="/register" slot="right">
		  		<mt-button class="r">注册</mt-button>
	  	  	</router-link>
		</mt-header>
		<form class="loginbox"  action="#" @submit.prevent="check()">
			<input type="text" id="num" value="" placeholder="手机号/邮箱/用户名" />
			<input type="password" id="pwd" value="" placeholder="密码" />
			<br />
			<button>登录</button>
			<p>忘记密码？</p>
		</form>
		<div class="otherbox">
			<span class="qq">QQ登录</span>
			<span class="weibo">微博登录</span>
		</div>
	</main>
</template>

<script >
	import { Toast } from 'mint-ui';
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			check(){
				var num = document.getElementById('num').value;
				var pwd = document.getElementById('pwd').value;
				var tips = document.getElementsByClassName('tip')
				if(num == null || num == ""){
					Toast({
						message:'请先输入您的用户名~'
					});
					return false
				}
				if(pwd == null || pwd == ""){
					Toast({
						message:'亲，忘了输密码咯~'
					});
					return false
				}
				else{
					return true
				}
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
	.sign{
	    padding: 0px 16px;
	    right: 0px;
	}
	.loginbox{
		margin-top: 16px;
	}
	.loginbox input{
	    width: 100%;
		height: 44px;
	    background: #fdfdfd;
	    font-size: 16px;
	    padding: 10px 16px;
	    border: 0px;
	    box-sizing: border-box;
	    border-bottom: 1px solid #f5f5f5;
	}
	.loginbox button{
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
	.loginbox p{
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
