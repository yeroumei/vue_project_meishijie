<template>
	<main>
		<!--顶部标题栏-->
		<header class="topbar">
			<i class="back" @click="back()"></i>
			<router-link to="/search" class="find">
				<img src="../../assets/images/findbtn.png"/>
				搜索任何你想要的
			</router-link>
		</header>
		<div class="content">
			<nav>
				<ul class="site_bar">
					<li @click="show=index" :class="{active:show==index}" v-for="(item,index) in sites" class="site_btns">
						<img class="site_img" :src="item.src" />
						<span class="site_s">{{item.des}}</span>
					</li>
				</ul>
			</nav>
			<section>
				<div class="cons" v-show="show==index" v-for="(item,index) in all">
					<ul>
						<li class="cons_list" v-for="(i,n) in item.con">
							<img :src="i.pic"/>
							<span>{{i.name}}</span>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</main>
</template>
<script>
export default{
	data(){
		return{
			show:0,
			sites:[],
			all:[]
		}
	},
	mounted(){
		this.$http.get('./data/classify_data.json')
		.then((res)=>{
			this.sites=res.data.sites
			this.all=res.data.all
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
	.find{
		height: 32px;
	    line-height: 32px;
	    background: #f5f5f5;
	    color: #aaa;
	    border-radius: 2px;
	    margin-left: 52px;
	    margin-right: 10px;
	    font-size: 14px;
	    display: block;
	    position: relative;
	    top: 6px; 
	}
	.find img{
	    height: 14px;
	    width: 14px;
	    margin: 9px 4px 0px 0px;
	}
	.content{
		padding: 50px 0;
	}
	/*侧边导航栏*/
	.site_bar{
		width: 26.6666667%;
		height: 95vh;
		background-color: #fdfdfd;
		float: left;
		position: fixed;
		overflow-y: scroll; 
	}
	.site_bar::-webkit-scrollbar { width: 0 !important }
	.site_btns{
		width: 100%;
		display: block;
		padding: 16px 0;
	}
	.site_img{
		width: 30%;
	}
	.site_s{
		display: block;
		font-size: 14px;
		line-height: 34px;
	}
	/*分类详情*/
	.cons{
		width: 73.3333333%;
		float: right;
	}
	.cons_list{
		width: 33.3333333%;
		float: left;
		font-size: 12px;
		padding: 10px;
    	box-sizing: border-box;
	}
	.cons_list img{
		width: 100%;
	}
	.active{
		background-color: #f5f5f5;
	}
</style>