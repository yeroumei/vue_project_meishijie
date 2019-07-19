<template>
	<main>
		<header class="head">
			<router-link to="/recommend"><span class="t_l btn">< 美食杰 </span></router-link>
			<router-link to="/classify"><span class="t_r btn">菜谱分类 ></span></router-link>
		</header>
		<section>
			<p class="bg" v-for="(item,index) in top" :style="{'background': 'url('+item.bgpic+') center /cover no-repeat','background-size': 'cover'}"></p>
			<div class="title" v-for="(item,index) in top">
				<h2 class="name">{{item.title}}</h2>
				<span class="look">{{item.look}}</span>
				<ul>
					<li class="tips" v-for="(i,d) in item.tip"><a href="">{{i.tips}}</a></li>
				</ul>
			</div>
			<div class="comment" v-for="(item,index) in user">
				<div class="user">
					<img :src="item.userpic" />
					<p>{{item.name}}</p>
					<span>{{item.tip}}</span>
				</div>
				<p class="text">{{item.des}}</p>
			</div>
			<div class="box">
				<h2>
					评分
					<p class="stars">
						<span class="on s_l" v-for="n in 3"></span><span class="on s_r" v-for="n in 2"></span>
					</p>
				</h2>
				<ul class="icon_ul">
					<li class="icon_li">
						<i class="icon"></i>其他工艺
					</li>
					<li class="icon_li">
						<i class="icon"></i>甜味
					</li>
					<li class="icon_li">
						<i class="icon"></i>< 10分钟
					</li>
					<li class="icon_li">
						<i class="icon"></i>较低热量
					</li>
				</ul>
				<h2>
					主料
					<span class="no">未知</span>
				</h2>
				<p class="text_p"><span>火龙果</span>1个、<span>芒果</span>1个、<span>香蕉</span>1只</p>
				<h2>
					辅料
				</h2>
				<p class="text_p">草莓6个、橙子1个、酸奶适量、奇异果1个、蓝莓1盒</p>
			</div>
			<ul>
				<li class="steps" v-for="(item,index) in step">
					<h2>{{item.title}}</h2>
					<img :src="item.pic"/>
					<p>{{item.des}}</p>
				</li>
			</ul>
			<div class="steps">
				<h2>水果酸奶冰棒成品图</h2>
				<div class="picbox">
					<img v-for="(item,index) in pics" v-show="tabs==index" :src="item.src"/>
				</div>
				<ul class="btnbox">
					<li v-for="(item,index) in btns" class="picbtn" v-on:click="changeTab(index)" :class="{active:tabs==index}">
						<img :src="item.src"/>
					</li>
				</ul>
			</div>
		</section>
		<p class="foot">原创菜谱创建时间：2019-07-07 22:29:00</p>
		<br />
		<br />
		<button class="topbtn" ref="totop" @click="goTop()"></button>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				tabs:1,
				isTop:true,
				timer:null,
				step:[],
				user:[],
				top:[],
				pics:[],
				btns:[]
			}
		},
		mounted(){
			this.needScroll()
			this.$http.get('./data/details_data.json')
			.then((res)=>{
				this.step=res.data.step
				this.user=res.data.user
				this.top=res.data.top
				this.pics=res.data.pics
				this.btns=res.data.btns
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				window.removeEventListener('scroll', this.goTop); 

			})
		},
		methods:{
			changeTab(a){
	            this.tabs=a;
	     	},
		     needScroll(){
		     	let clientHeight = document.documentElement.clientHeight
		     	let ototop = this.$refs.totop
		     	window.onscroll = function () {
		     		let osTop = document.documentElement.scrollTop || document.body.scrollTop
			        if (osTop >= clientHeight) {
			          ototop.style.opacity = '1'
			        } else {
			          ototop.style.opacity = '0'
			        }
			        if (!this.isTop) {
			          clearInterval(this.timer)
			        }
			        this.isTop = false
			    }
			},
			goTop () {
		      	let self = this
		      	self.timer = setInterval(function () {
		        	let osTop = document.documentElement.scrollTop || document.body.scrollTop
		        	let ispeed = Math.floor(-osTop / 5)
		        	document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
		        	self.isTop = true
		        	if (osTop === 0) {
		          		clearInterval(self.timer)
		        	}
		      	}, 30)
		    }
	    }
	}
</script>
<style scoped>
	.head{
		height: 45px;
		width: 100%;
		position: fixed;
		z-index: 1;
	}
	.btn{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		border-radius: 15px;
		padding: 0 12px;
		background: rgba(0,0,0,0.5);
		color: #fff;
		font-size: 14px;
		position: absolute;
		bottom: 0;
	}
	.t_l{
		left: 4%;
	}
	.t_r{
		right: 4%;
	}
	.bg{
		width: 100%;
		padding-bottom: 60%;
	}
	.title{
		text-align: left;
		padding: 20px;
	    background-color: #fff4d6;
	}
	.name{
		font-size: 24px;
		font-weight: 900;
	    line-height: 32px;
	}
	.look{
		display: block;
		font-size: 12px;
		color: #666;
		padding: 8px 0 16px 0;
	}
	.tips a{
		font-size: 12px;
		color: #eaa46e;
		line-height: 20px;
		text-decoration: underline;
		margin-right: 6px;
	}
	.comment{
		padding: 5px 20px;
		text-align: left;
		box-sizing: border-box;
		position: relative;
	}
	.user{
		padding: 10px 0;
		position: relative;
	}
	.user>img{
		display: inline-block;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		float: left;
	}
	.user>p{
		font-size: 14px;
		color: #666;
		padding-left: 50px;
		line-height: 22px;
	}
	.user>span{
		font-size: 12px;
		color: #999;
		padding-left: 10px;    
		line-height: 18px;
	}
	.user::after{
		content: '关注';
	    display: inline-block;
		height: 26px;
	    line-height: 26px;
		font-size: 14px;
	    border: 1px solid #ff4c39;
	    color: #ff4c39;
	    padding: 0px 15px;
	    border-radius: 14px;
	    position: absolute;
	    right: 0;
	    top: 16px;
	}
	.text{
		padding: 6px 0;
		font-size: 18px;
	}
	.comment:after{
		content: '';
		display: block;
		width: 200%;
		height: 1px;
		background: #e2e2e2;
		position: absolute;
		left: -50%;
		bottom: 0;
		transform: scale(0.5);
	}
	.box{
		padding: 0 20px;
		text-align: left;
		box-sizing: border-box;
		position: relative;
	}
	.box:before{
		content: '';
		display: block;
		width: 48px;
	    height: 80px;
	    position: absolute;
	    top: 0px;
	    right: 20px;
	    background: url(../../assets/images/bgbtn.png) 0px -24px no-repeat;
	    background-size: 400px 400px;
	}
	.box>h2{
		display: inline-block;
		height: 36px;
		font-size: 16px;
		font-weight: 900;
		line-height: 36px;
		padding-top: 20px;
	}
	.stars{
		height: 21px;
	    line-height: 21px;
	    margin-top: 6px;
	    display: inline-block;
	    vertical-align: top;
	    margin-left: 15px;
	}
	.on{
		display: inline-block;
		width: 21px;
		height: 21px;
		margin-right: 4px;
	}
	.s_l{
		background: url(../../assets/images/bgbtn.png);
		background-size: 300px 300px;
    	background-position: 0px -78px;
	}
	.s_r{
		background: url(../../assets/images/bgbtn.png);
		background-size: 300px 300px;
    	background-position: -21px -78px;
	}
	.icon_ul{
		width: 100%;
		padding-top: 2px;
	}
	.icon_li{
		width: 40%;
		height: 24px;
		color: #666;
		vertical-align: top;
	}
	.icon{
		display: inline-block;
		background: url(../../assets/images/bgbtn.png) no-repeat;
		background-size: 400px 400px;
		height: 24px;
		width: 24px;
		margin-right: 4px;
		vertical-align: top;
	}
	.icon_li:nth-of-type(1) .icon{
    	background-position: -1px -0px;
	}
	.icon_li:nth-of-type(2) .icon{
    	background-position: -25px -0px;
	}
	.icon_li:nth-of-type(3) .icon{
    	background-position: -49px -0px;
	}
	.icon_li:nth-of-type(4) .icon{
    	background-position: -73px -0px;
	}
	/*辅料*/
	.no{
		display: inline-block;
		font-size: 14px;
		color: #999;
		font-weight: normal;
	}
	.text_p>span{
		display: inline-block;
		color: #ff4c39;
	}
	.steps{
		width: 100%;
	}
	.steps>h2{    
		height: 44px;
    	line-height: 44px;
		font-size: 19px;
		font-weight: normal;    
		margin: 30px 0px 10px;
	}
	.steps>img{
		width: 100%;	
	}
	.steps>p{
		padding: 16px 20px;
		font-size: 17px;
		text-align: left;
	}
	/*tab显示*/
	.picbox{
		width: 100%;
		padding-top: 66.666666%;
		box-sizing: border-box;
    	position: relative;
		overflow: hidden;
	}
	.picbox>img{
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.btnbox{
		overflow: hidden;
		padding: 20px;
	}
	.picbtn{
		width: 20vw;
		height: 20vw;
		float: left;
		display: inline-block;
		overflow: hidden;
		margin-right: 10px;
		box-sizing: border-box;
		opacity: 0.5;
		position: relative;
	}
	.picbtn>img{
		display: block;
		width: 100%;
		margin: auto;
		position: absolute;
	    left: 0px;
	    right: 0px;
	    bottom: 0px;
	    top: 0px;
	}
	.active{
		opacity: 1;
	}
	.foot{
		text-align: left;
		font-size: 12px;
	    color: #777777;
	    padding: 10px 0 10px 20px;
	}
	.topbtn{
		border: 0;
		outline: none;
	    position: fixed;
	     z-index: 200; 
	    right: 0px;
	    bottom: 0px;
	    background: url(../../assets/images/bgbtn.png) 0px -220px no-repeat;
	    background-size: 400px 400px;
	    height: 40px;
	    width: 25px;
	    opacity: 0;
	    transition: all 1s;
	}
</style>