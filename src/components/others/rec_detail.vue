<template>
	<main>
		<header>
			<img class="toppic" v-for="(item,index) in toppic" :src="item.src" />
		</header>
		<section  class="cons">
			<div v-for="(item,index) in toppic">
				<h1>{{item.title}}</h1>
				<p>{{item.des}}</p>
				<p>{{item.say}}</p>
			</div>
			<div class="list" v-for="(item,index) in cons">
				<h2>/ {{item.title}} /</h2>
				<p>{{item.des}}</p>
				<ul>
					<li class="others" v-for="(i,k) in item.tip">
						<img class="pic" :src="i.pic">
						<a class="info">
							<strong class="title">{{i.goods}}</strong>
							<img class="user" :src="i.userpic">
							<span class="name">{{i.name}}</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<footer>
			<button class="foot">打开美食杰app，查看全部评论</button>
		</footer>
		<nav class="bot">
			<img class="icon" src="../../assets/images/iconmsj_181.png" />
			<p class="last">做菜只用美食杰</p>
			<router-link to="/recommend"><button class="open">立即打开</button></router-link>
		</nav>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				toppic:[],
				cons:[]
			}
		},
		mounted(){
			this.$http.get('./data/details_data.json')
			.then((res)=>{
				this.toppic=res.data.toppic
				this.cons=res.data.cons
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		}
	}
</script>

<style scoped>
	main{
		
	}
	.toppic{
		width: 100%;
	}
	.cons{
		width: 93.5%;
		margin: 16px auto;
	    text-align: left;
	}
	.cons h1{
		font-size: 22px;
	    font-weight: 700;
	    color: #1b1b1b;
	    line-height: 36px;
	    margin: 0px 4px;
	}
	.cons p{
		font-size: 14px;
	    color: #383838;
	    line-height: 25px;
	    padding: 12px 4px 0px;
	}
	.list h2{
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	    padding: 12px 4px 0px;
	}
	.others{
		float: left;
		width: 50%;
		padding: 17px 4px;
		box-sizing: border-box;
	}
	.pic{
		width: 100%;
	}
	.info{
		overflow: hidden;
		display: block;
		width: 100%;
		border: 1px solid #F5F5F5;
		margin-bottom: 50px;
	}
	.title{
		display: block;
	    height: 39px;
	    line-height: 36px;
	    box-sizing: border-box;
	    padding: 3px 10px 0px;
	    font-size: 18px;
	    color: #000;
	    font-weight: 500;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.user{
		height: 23px;
    	width: 23px;
		float: left;
		border-radius: 50%;
	    padding: 0px 10px;
	}
	.name{
	    color: #383838;
	    line-height: 23px;
	    font-size: 13px;
	    overflow: hidden;
	    vertical-align: middle;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	footer{
		overflow: hidden;
		width: 100%;
	    border-top: 8px solid #F5F5F5;
		margin-bottom: 60px;
	}
	.foot{
		height: 37px;
	    line-height: 37px;
	    margin: 30px auto;
	    background: #f04848;
	    color: #fff;
	    font-size: 14px;
	    line-height: 37px;
	    border-radius: 19px;
	    border: 0;
	    padding: 0 20px;
	}
	.bot{
		height: 60px;
	    width: 100%;
	    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);
	    background: #fff;
	    position: fixed;
	    left: 0px;
	    bottom: 0px;
	}
	.icon{
		height: 38px;
	    width: 38px;
	    display: inline-block;
	    float: left;
	    margin: 11px 22px 11px 34px;
	}
	.last{
		float: left;
		color: #000;
	    font-size: 16px;
	    line-height: 60px;
	    display: inline-block;
	}
	.open{
		height: 28px;
	    width: 86px;
	    color: #fff;
	    line-height: 23px;
	    font-size: 14px;
	    background: #f04848;
	    display: block;
	    border-radius: 3px;
	    float: right;
	    margin-right: 27px;
	    margin-top: 16px;
	    border: 0;
	}
</style>