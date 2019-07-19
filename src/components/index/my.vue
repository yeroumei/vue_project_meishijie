<template>
	<main>
		<header class="top">
			<div class="bar">
				<router-link to="/login" class="user">
					<img class="userpic" src="../../assets/images/userpic.png"/>
					<h2 class="tologin">点击登录</h2>
				</router-link>
				<span class="des">美食杰，带你发现更多美食..</span>
			</div>
		</header>
		<ul>
			<li class="nav_li">
				<a href="#"><span>0</span> 关注</a>
			</li>
			<li class="nav_li">
				<a href="#"><span>0</span> 粉丝</a>
			</li>
			<li class="nav_li">
				<a style="border-right: 0;"><span>0</span> 菜谱</a>
			</li>
		</ul>
		<div class="xunzbox">
			<h2>荣誉勋章</h2>
			<ul class="xunz_ul">
				<li class="xunz_li" v-for="(item,index) in medal">
					<img :src="item.src"/>
				</li>
			</ul>
		</div>
		<mt-cell title="积分商城"  to="/login" is-link style="overflow: hidden;">
		  <span>免费兑换</span>
		  <img slot="icon" src="../../assets/images/gift.png" width="27" height="27">
		</mt-cell>
		<mt-cell title="消息通知"  to="/login" is-link style="overflow: hidden;" class="new">
		  <img slot="icon" src="../../assets/images/news.png" width="27" height="27">
		</mt-cell>
		
		<mt-cell title="我的发布"  to="/login" is-link style="overflow: hidden;">
		  <img slot="icon" src="../../assets/images/send.png" width="27" height="27">
		</mt-cell>
		<mt-cell title="我的收藏"  to="/login" is-link style="overflow: hidden;">
		  <img slot="icon" src="../../assets/images/love.png" width="27" height="27">
		</mt-cell>
		<mt-cell title="我的订单"  to="/login" is-link style="overflow: hidden;">
		  <img slot="icon" src="../../assets/images/label.png" width="27" height="27">
		</mt-cell>
		<mt-cell title="关于我们"  to="/login" is-link style="overflow: hidden;">
		  <img slot="icon" src="../../assets/images/us.png" width="27" height="27">
		</mt-cell>
	</main>
</template>

<script >
	export default{
		data(){
			return{
				medal:[]
			}
		},
		mounted(){
			this.$http.get('./data/my_data.json')
			.then((res)=>{
				this.medal=res.data.medal
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		},
		methods:{
			
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
	.top{
		width: 100%;
		padding-bottom: 40%;
		background: url(../../assets/images/mybg.png);
		background-size: 100%;
		position: relative;
	}
	.bar{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.user{
		width: 80%;
		margin: 5% auto 0px;
		text-align: left;
	    display: block;
	    position: relative;
	}
	.userpic{
		display: block;
	    width: 22%;
	    border: 3px solid rgba(255,255,255,0.5);
	    border-radius: 100%;
	    position: absolute;
	    left: 0px;
	    top: 0px;
	}
	.tologin{
		font-size: 18px;
		color: #fff;
		padding: 5% 0 0 27%;
	}
	.des{
		display: inline-block;
		color: #fff;
		text-align: left;
		padding-left: 10%;
		font-size: 14px;
		line-height: 28px;
	}
	.des:after{
		content: '美食杰DNA 0条>';
		height: 24px;
	    line-height: 22px;
	    border-radius: 16px;
	    color: #fff;
	    font-size: 12px;
	    border: 1px solid rgba(255,255,255,0.5);
	    background: rgba(255,255,255,0.2);
	    box-sizing: border-box;
	    display: inline-block;
	    padding: 0px 12px;
	    position: absolute;
	    right: 37%;
	    bottom: 20%;
	}
	.nav_li{
		width: 33.333333%;
		float: left;
		background: #fefefe;    
		margin-bottom: 10px;
	}
	.nav_li>a{
		display: inline-block;
		width: 100%;
	    vertical-align: top;
	    border-right: 1px solid #eee;
	    height: 24px;
	    line-height: 24px;
	    margin: 10px 0px;
	    font-size: 14px;
	    color: #999;
	    box-sizing: border-box;
	}
	.nav_li span{
		color: #ff4c35;
	}
	/*勋章*/
	.xunzbox{
		background: #fefefe;    
		width: 100%;
		overflow: hidden;
		text-align: left;
		margin-bottom: 10px;
	}
	.xunzbox>h2{
		font-size: 16px;
		padding-top: 6px;
		padding-left: 3.125%;
		line-height: 32px;
	}
	.xunz_ul{
		width: 100%;
		display: inline-block;
		padding: 0 3.125%;
		padding-bottom: 14px;

	}
	.xunz_li{
		float: left;
		height: 32px;
    	width: 38px;
    	margin-right: 12px;
	}
	.xunz_li img{
		width: 100%;
	}
	.mint-cell{
		min-height: 45px;
		text-align: left;
	}
	.mint-cell-value span{
		font-size: 12px;
		color: #FF4C35;
	}
	.new{
		margin: 10px 0;
	}
</style>
