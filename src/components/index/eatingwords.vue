<template>
	<main>
		<!--顶部标题栏-->
		<div class="topbar">
			<i class="add icon" @click="downshow()"></i>
			<span class="t">食话</span>
			<router-link  to="/login"><i class="adduser icon"></i></router-link>	
			<router-link  to="/search"><i class="search icon"></i></router-link>
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
		</div>
		<div class="content">
			<!--轮播-->
			<div class="lunbo">
				<mt-swipe :auto="3000">
				  <mt-swipe-item v-for="(item,index) in swipers">
				  	<img :src="item.pic" class="pic" />
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			
			<!--图标菜单栏-->
			<div class="menu">
				<ul v-for="(m,i) in site"  class="menu_list" >
					<li :style="{'background': 'url('+m.pic+') center no-repeat','background-size': '80% 80%'}">
						{{m.title}}
					</li>
				</ul>
			</div>
			<!--tab切换按钮-->
			<div class="nav">
				<mt-navbar v-model="selected">
				  	<mt-tab-item :class="{active:selected=='tab1'}" @click.native.prevent="selected = 'tab1'">最新</mt-tab-item>
				  	<mt-tab-item :class="{active:selected=='tab2'}" @click.native.prevent="selected = 'tab2'">最热</mt-tab-item>
				</mt-navbar>
			</div>
			<!--tab切换内容-->
			<div class="nav_container">
				<mt-tab-container v-model="selected">
				  	<mt-tab-container-item id="tab1">
				  		<div class="time">
				  			<div class="new" v-for="(item,index) in news">
				  				<a class="user"><img :src="item.idimg"/></a>
				  				<div class="shows">
				  					<a class="username">{{item.name}}</a>
				  					<br />
				  					<span>{{item.time}}</span>
				  					<a class="desk">{{item.page}}</a>
				  					<a class="shows_img">
				  						<p class="p_title">{{item.title}}</p>
				  						<img v-for="p in item.pic" :src="p" />
				  					</a>
				  				</div>
				  				<div class="zan">
				  					<img src="../../assets/images/love.png"><span style="margin-right: 5px;">{{item.love}}</span>
                					<img src="../../assets/images/say.png"><span>{{item.say}}</span>
				  				</div>
				  			</div>
				  		</div>
				  	</mt-tab-container-item>
				  	<mt-tab-container-item id="tab2">
				    	<div class="hot">
				  			<div class="new" v-for="(item,index) in hots">
				  				<a class="user"><img :src="item.idimg"/></a>
				  				<div class="shows">
				  					<a class="username">{{item.name}}</a>
				  					<br />
				  					<span>{{item.time}}</span>
				  					<a class="desk">{{item.page}}</a>
				  					<a class="shows_img">
				  						<p class="p_title">{{item.title}}</p>
				  						<img v-for="p in item.pic" :src="p" />
				  					</a>
				  				</div>
				  				<div class="zan">
				  					<img src="../../assets/images/love.png"><span style="margin-right: 5px;">0</span>
                					<img src="../../assets/images/say.png"><span>349</span>
				  				</div>
				  			</div>
				  		</div>
				  	</mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</main>
</template>

<script >
	export default{
		name:'nav_container',
		data(){
			return{
				selected:'tab1',
				show:false,
				down:[],
				swipers:[],
				site:[],
				news:[],
				hots:[]
			}
		},
		mounted(){
			this.$http.get('./data/eatwd_data.json')
			.then((res)=>{
				this.down=res.data.down
				this.swipers=res.data.swipers
				this.site=res.data.site
				this.news=res.data.news
				this.hots=res.data.hots
			})
			.catch(()=>{
				
			})
			.finally(()=>{

			})
		},
		methods:{
			downshow(){
				this.show=!this.show
			},
			changebtn(){
				
			}
		}
	}
	
</script>
<style scoped>
	main{
		background: #FFFFFF;
	}
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
	.adduser{
	    right: 0px;
	    background: url(../../assets/images/adduser.png) left center no-repeat;
    	background-size: 34px 44px;
	}
	.search{
	    right: 52px;
	    background: url(../../assets/images/search.png) center no-repeat;
    	background-size: 56px 44px;
	}
	.t{
	    font-size: 18px;
	    color: #000;
	    line-height: 44px;
	    text-align: center;
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
	/*网页内容*/
	.content{
		padding: 44px 0 51px 0;
	}
	/*轮播*/
	.lunbo{
		width: 100%;
		background: #F5F5F5;	
	}
	.pic{
		width: 100%;
	}
	/*图标菜单*/
	.menu_list{
		display: inline-block;
	    vertical-align: top;
	    width: 25%;
	    text-align: center;
	    padding: 10px;
	    box-sizing: border-box;
	    margin: 0;
	}
	.menu_list li{
		width: 100%;
	    padding-top: 100%;
	    height: 0;
	    display: block;
	    color: #333;
	    font-size: 12px;
	    line-height: 18px;
	}
	
	/*tab切换*/
	.nav{
		background: #fefefe;
	    padding: 20px 3.125%;
	    width: 100%;
	    box-sizing: border-box;
	}
	.mint-navbar{
		height: 30px;
	    margin: 16px auto 16px;
	    border: 1px solid #ff4c35;
	    border-radius: 6px;
	    display: inline-block;
	}
	.mint-tab-item{
		display: inline-block;
	    width: 80px;
	    font-size: 12px;
	    color: #ff4c35;
	    padding: 9px 0;
	}
	.active{
		background: #ff4c35;
		color: #fff;
	}
	/*动态展示*/
	.new{
		width: 100%;
	    border-bottom: 1px solid #f5f5f5;
	    padding: 15px 5%;
	    box-sizing: border-box;
	    position: relative;
	}
	.user img{
	    display: block;
		width: 30px;
	    height: 30px;
	    position: absolute;
	    top: 15px;
	    left: 5%;
	}
	.shows{
		display: inline-block;
	    width: 100%;
	    padding-left: 35px;
	    text-align: left;
	    box-sizing: border-box;
	}
	.shows span{
		color: #999;
	    font-size: 12px;
	}
	.username{
		color: #ff5151;
	    font-size: 14px;
	}
	.desk{
		color: #1995f5;
	    font-size: 12px;
	}
	.p_title{
		font-size: 16px;
	    line-height: 24px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
	}
	.shows_img img{
		display: inline-block;
	    vertical-align: top;
	    width: 33%;
	    padding: 5px;
	    box-sizing: border-box;
	    margin-right: -4px;
	}
	.zan{
		float: right;
		font-size: 12px;
		color: #aaa;
		line-height: 18px;
	}
	.zan img{
		height: 12px;
		width: 12px;
	    vertical-align: middle;
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
