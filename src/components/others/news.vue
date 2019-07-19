<template>
	<main>
		<!--顶部标题栏-->
		<header class="topbar">
			<i class="back" @click="back()"></i>
			<span class="t">饮食新闻</span>
		</header>
		<nav class="navbar">
			<ul>
				<li class="btns" @click="show='new_1'" :class="{active:show=='new_1'}">饮食健康</li>
				<li class="btns" @click="show='new_2'" :class="{active:show=='new_2'}">功能性调理</li>
				<li class="btns" @click="show='new_3'" :class="{active:show=='new_3'}">人群膳食</li>
				<li class="btns" @click="show='new_4'" :class="{active:show=='new_4'}">疾病调理</li>
				<li class="btns" @click="show='new_5'" :class="{active:show=='new_5'}">肺腑调理</li>
				<li class="btns" @click="show='new_6'" :class="{active:show=='new_6'}">烹饪技巧</li>
			</ul>
		</nav>
		<!--轮播-->
		<div class="lunbo">
			<mt-swipe :auto="3000">
			  <mt-swipe-item v-for="(item,index) in swipers">
			  	<img :src="item.pic" class="pic" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<component :is='show'></component>
		<a class="more">点击加载更多</a>
	</main>
</template>

<script>
	import new_1 from '../../components/news/new_1.vue'
	import new_2 from '../../components/news/new_2.vue'
	import new_3 from '../../components/news/new_3.vue'
	import new_4 from '../../components/news/new_4.vue'
	import new_5 from '../../components/news/new_5.vue'
	import new_6 from '../../components/news/new_6.vue'
	export default{
		data(){
			return{
				show:"new_1",
				swipers:[]
			}
		},
		components:{
			'new_1':new_1,
			'new_2':new_2,
			'new_3':new_3,
			'new_4':new_4,
			'new_5':new_5,
			'new_6':new_6
		},
		mounted(){
			this.$http.get('./data/news_data.json')
			.then((res)=>{
				this.swipers=res.data.swipers
			})
			.catch(()=>{
				
			})
			.finally(()=>{

			})
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	/*顶部标题栏*/
	.topbar{
		height: 44px;
    	width: 100%;    
    	background: #fefefe;
    	position: fixed;
   		top: 0px;
   		z-index: 1;
	}
	.back{
		height: 44px;
	    min-width: 35px;
	    position: absolute;
	    display: block;
	    top: 0px;
	    left: 0px;
	    background: url(../../assets/images/back_icon2.png) center no-repeat;
	    background-size: auto 44px;
	}
	.t{
	    font-size: 18px;
	    color: #000;
	    line-height: 44px;
	    text-align: center;
	}
	/*导航条*/
	.navbar{
		width: 100%;
		height: 44px;
		box-sizing: border-box;
    	position: fixed;
    	left: 0;
    	top: 44px;
		overflow-x: scroll;
		background: #fefefe;
		z-index: 1;
	}
	.navbar::-webkit-scrollbar {height: 0 !important}
	.navbar>ul{
		width: 600px;
		overflow: hidden;
	}
	.btns{
		float: left;
		width: 100px;
		line-height: 44px;
		font-size: 14px;
	}
	.active{
		color: #ff4c35;
	}
	/*轮播*/
	.lunbo{
		padding-top: 88px;
		width: 100%;
		background: #F5F5F5;	
	}
	.pic{
		width: 100%;
	}
	/*点击加载更多*/
	.more{
		height: 50px;
	    line-height: 50px;
	    font-size: 16px;
	    color: #ff5151;
	    text-align: center;
	    display: block;
	    background: #F5F5F5;	
	}
</style>
<style>
	/*轮播高度自适应*/
	.mint-swipe-items-wrap{
		padding-bottom: 56%;
	}
	.mint-swipe-indicators{
		bottom: 3px;
	}
</style>