<template>
	<main>
		<!--顶部标题栏-->
		<header class="topbar">
			<i class="add icon" @click="downshow()"></i>
			<router-link to="/search" class="find">
				<img src="../../assets/images/findbtn.png"/>
				搜索你感兴趣的
			</router-link>
			<router-link  to="/login"><i class="mail icon"></i></router-link>
			<!--add的二级菜单-->
			<div class="downmenu" v-show="show">
				<span></span>
				<ul>
					<li v-for="(item,index) in down">
						<img :src="item.pic"/>
						{{item.title}}
					</li>
				</ul>
			</div>
		</header>
		
		<!--导航轮播-->
		<nav class="nav">
		    <div class="navbar">
		    	<h2>今日</h2>
		    	<ul class="btn_list">
				  	<li class="t t1" v-for="(item,index) in navs">{{item.title}}</li>
			  	</ul>
		    </div>
		    <section class="con">
		    	<swiper :options="swiperOption" id="eat_data">
			        <swiper-slide v-for="(item,index) in eats" class="lists">
			        	<router-link :to="item.adr">
				       		<img :src="item.pic" class="simg"/>
				       		<p class="title">{{item.name}}</p>
				       		<p class="text"><a class="text_a">{{item.des}}</a></p>
			        	</router-link>
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			    </swiper>
		    </section>
		</nav>
		<!--推荐页面内容-->
		<div class="content">
			<!--图标菜单栏-->
			<div class="menu">
				<ul v-for="(m,i) in site" >
					<router-link :to="m.adr">
						<li class="menu_list" :style="{'background': 'url('+m.pic+') center top no-repeat','background-size': '100% auto'}">
							{{m.title}}
						</li>
	        		</router-link>
				</ul>
			</div>
			<h2 class="title1">今日推荐</h2>
			<div class="day">
				<router-link to="/rec_detail"><img :src="item.pic" v-for="(item,index) in day"/></router-link>
			</div>
			<div class="like">
				<div class="title2">
					<img src="../../assets/images/likelogo.png"/>
					<div class="like_title">
						<span class="like_t">猜你喜欢</span>
						<br />
						<span class="like_s">14:19为您更新</span>
					</div>
				</div>
				<ul>
					<li class="like_list" v-for="(item,index) in like">
						<img :src="item.pic"/>
						<span>{{item.title}}</span>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script >
	import $ from 'jquery'
	export default{
		data(){
			return{
				show:false,
				nowX:-355,
				swiperOption:{
		          slidesPerView: 2,
		          spaceBetween: 0,
		          slidesPerGroup: 2,
		          loop:true,
		          loopFillGroupWithBlank: true,
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          }
		        },
				navs:[],
				//兼容框架的动态加载的缺陷，这里的数据只是让loop知道加载的内容，
				//最终的数据还是通过json的更新显示
				eats:[
				{
					"adr":"/details",
					"pic":"./data/images/index/n1.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n2.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n3.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n4.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n5.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n6.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n7.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n8.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n9.jpg"
				},
				{
					"adr":"/details",
					"pic":"./data/images/index/n10.jpg"
				}
			],
				down:[],
				site:[],
				day:[],
				like:[]
			}
		},
		mounted(){
			this.$http.get('./data/reco_data.json')
			.then((res)=>{
				this.navs=res.data.navs
				this.eats=res.data.eats
				this.down=res.data.down
				this.site=res.data.site
				this.day=res.data.day
				this.like=res.data.like
				setTimeout(()=>{
					eat_data.children[0].children[eat_data.children[0].children.length-1].innerHTML=eat_data.children[0].children[3].innerHTML
					eat_data.children[0].children[eat_data.children[0].children.length-2].innerHTML=eat_data.children[0].children[2].innerHTML
					eat_data.children[0].children[0].innerHTML=eat_data.children[0].children[eat_data.children[0].children.length-4].innerHTML
					eat_data.children[0].children[1].innerHTML=eat_data.children[0].children[eat_data.children[0].children.length-3].innerHTML
				},20)
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		},
		methods:{
			downshow(){
				this.show=!this.show
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
	.icon{
		height: 44px;
	    width: 52px;
	    position: absolute;
	    display: block;
	    top: 0px;
	}
	.add{
	    left: 0px;
	    background: url(../../assets/images/addbtn.png) center no-repeat;
	    background-size: 52px 44px;
	}
	.mail{
	    right: 0px;
	    background: url(../../assets/images/mailbtn.png) center no-repeat;
	    background-size: 52px 44px;
	}
	.find{
		height: 32px;
	    line-height: 32px;
	    background: #f5f5f5;
	    color: #aaa;
	    border-radius: 2px;
	    margin: 0px 52px;
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
	/*add的二级菜单*/
	.downmenu{
		position: absolute;
	    top: 44px;
	    left: 10px;
	    border-radius: 4px;
	}
	.downmenu span{
		position: absolute;
	    top: 0px;
	    left: 10px;
	    border-left: 5px solid transparent;
	    border-right: 5px solid transparent;
	    border-bottom: 7px solid #333;
	}
	.downmenu ul{
		margin-top: 7px;
	    border-radius: 4px;
	    background: #333;
	}
	.downmenu ul li{
		height: 48px;
	    line-height: 48px;
	    color: #fff;
	    font-size: 16px;
	    border-bottom: 1px solid rgba(255,255,255,0.1);
	    padding-right: 16px;
	    display: block;
	}
	.downmenu ul li img{
		height: 30px;
	    width: 30px;
	    display: block;
	    margin: 9px 4px 9px 6px;
	    display: inline-block;
	    vertical-align: top;
	}
	/*轮播导航*/
	.nav{
		padding-top:44px;
	}
	.navbar{
		display: block;
	    padding: 20px 0px 20px;
	    position: relative;
	    height: 22px;
	    width: 100%;
	    text-align: left;
	}
	.navbar h2{
	    line-height: 22px;
	    font-size: 20px;
	    display: inline-block;
	    margin-left: 15px;
	    font-weight: 900;
	}
	.btn_list{
		height: 22px;
		line-height: 24px;
	    display: inline-block;
	    position: absolute;
	    left: 65px;
	    width: 265px;
	}
	.t{
		font-size: 14px;
	    font-weight: 400;
	    color: #666;
	    line-height: 22px;
	    margin-right: 16px;
	}
	/*轮播*/
	.con{
		position: relative;
	}
	.swiper-container{
	    margin: 0px 2.666666vw;
	    text-align: left;    
	    z-index: 0;
	    position:static;
	    overflow: auto;
	    overflow-x: hidden;
	}
	.swiper-slide{
		box-sizing: border-box;
    	padding: 0px 1.233333vw;
	}
	.simg{
		width: 100%;
		border-radius: 7px;
	    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	    background-color: #f8f8f8;
	}
	.title{
		font-size: 18px;
		line-height: 28px;
	    font-weight: 600;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    padding: 12px 0px 2px;
	}
	.text{
		width: 100%;
		font-size: 14px;
	   	overflow: hidden;    
		text-overflow: ellipsis; 
		white-space: nowrap; 
	}
	.text_a{
	    background: #fde8e6;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets{
		bottom: auto;
		top: -40px;
		left: -15px;
	}
	/*图标菜单栏*/
	.content{
		width: 93.75%;
	    margin: 0px auto;
	    padding-top: 24px;
	    position: relative;
	}
	.menu_list{
	    vertical-align: top;
	    padding-top: 19%;
	    width: 19%;
	    margin: 0px 3%;
	    line-height: 32px;
	    font-size: 12px;
	    color: #333;
	    float: left;
	}
	/*今日推荐*/
	.title1{
		font-size: 18px;
	    line-height: 40px;
	    padding-top: 14px;
	    clear: both;/*清除li浮动的影响*/
	}
	.day img{
		width: 100%;
		margin-bottom: 3%;
	}
	/*猜你喜欢*/
	.like{
	    margin-bottom: 52px;
	}
	.title2{
		padding: 24px 0px 14px;
	}
	.title2 img{
		height: 30px;
	    width: 30px;
		display: inline-block;
	    vertical-align: top;
	}
	.like_title{
		display: inline-block;
	    vertical-align: top;
	    height: 30px;
	    padding-left: 4px;
	    text-align: left;
	}
	.like_t {
		font-size: 18px;
		line-height: 20px;
	    margin-top: -1px;
	}
	.like_s{
		font-size: 10px;
		line-height: 12px;
	    color: #999;
	}
	.like_list{
		width: 49%;
		margin-bottom: 2%;
		position: relative;
	}
	.like_list img{
		width: 100%;
	}
	.like_list span{
	    width: 100%;
		height: 32px;
	    display: block;
	    position: absolute;
	    bottom: 0px;
	    left: 0px;
	    font-size: 14px;
	    color: #fff;
	    text-shadow: 0px 1px 0px rgba(0,0,0,0.7);
	    overflow: hidden;    
	    text-overflow: ellipsis;
	    white-space: nowrap;
		background: url(../../assets/images/bg.png) center no-repeat;
	    background-size: 100% auto;
	}
</style>
<style>
	.swiper-pagination-bullet {
	    width: 38px;
	    height: 21px;
	    display: inline-block;
	    border-radius: 0;
	    background: none;
	    opacity: 0;
	    outline: none;
	}
	.swiper-pagination-clickable .swiper-pagination-bullet {
	    cursor: none;
	}
	.swiper-wrapper{
		z-index: 0;
	}
</style>