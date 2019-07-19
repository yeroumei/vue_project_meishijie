<template>
	<main>
		<mt-header class="t" fixed title="发现最热门">
		  <mt-button class="mail" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<!--图标菜单-->
			<ul class="find_top">
				<li class="fbtn" v-for="(item,index) in finds">
					<router-link to="/news">
						<img :src="item.src"/>
					</router-link>
				</li>
			</ul>
			<!--热门视频-->
			<div class="hot_video" v-for="(item,index) in hotvideo">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<div class="hot_item">
					<div class="item_t">
						<img :src="item.user">
						<span>{{item.tip}}</span>
						<em>{{item.time}}</em>
					</div>
					<div class="hot_c">
						<img :src="item.pic"/>
						<div class="info">
							<strong>{{item.des}}</strong>
							<em>{{item.look}}</em>
							<span></span>
						</div>
					</div>
				</div>
			</div>
			<!--点击最高-->
			<div class="hot_video" v-for="(item,index) in btntop">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<div class="hot_item">
					<img class="item_pic" :src="item.pic"/>
					<div class="item_text">
						<strong>{{item.name}}</strong>
						<span class="sctag" v-for="i in item.tips">{{i}}</span>
						<span class="heatinfo">{{item.hot}}</span>
					</div>
				</div>
			</div>
			<!--点击最多-->
			<div class="hot_video" v-for="(item,index) in btnmore">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<div class="hot_item">
					<img class="item_pic" :src="item.pic"/>
					<div class="item_text">
						<strong>{{item.name}}</strong>
						<div class="starts">
							<img v-for="n in item.num" src="../../assets/images/starts.png"/>
						</div>
						<span class="cp_info1" v-for="txt in item.info">{{txt}}</span>
					</div>
				</div>
			</div>
			<!--活动-->
			<div class="hot_video" v-for="(item,index) in acts">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<a class="mydate">
					<img :src="item.pic" />
				</a>
			</div>
			<!--收藏最多-->
			<div class="hot_video" v-for="(item,index) in lovemore">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<a class="shows_img">
					<img v-for="src in item.pic" :src="src" />
				</a>
				<p class="mymenu">{{item.des}}</p>
			</div>
			<!--热门视频-->
			<div class="hot_video" v-for="(item,index) in hotvideo">
				<div class="hot_t">{{item.title}}</div>
				<span class="hot_tag">{{item.label}}</span>
				<div class="hot_item">
					<div class="item_t">
						<img :src="item.user">
						<span>{{item.tip}}</span>
						<em>{{item.time}}</em>
					</div>
					<div class="hot_c">
						<img :src="item.pic"/>
						<div class="info">
							<strong>{{item.des}}</strong>
							<em>{{item.look}}</em>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</main>
</template>

<script >
	export default{
		data(){
			return{
				finds:[],
				hotvideo:[],
				btntop:[],
				btnmore:[],
				acts:[],
				lovemore:[]
			}
		},
		mounted(){
			this.$http.get('./data/discover_data.json')
			.then((res)=>{
				this.finds=res.data.finds
				this.hotvideo=res.data.hotvideo
				this.btntop=res.data.btntop
				this.btnmore=res.data.btnmore
				this.acts=res.data.acts
				this.lovemore=res.data.lovemore
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		}
	}
</script>
<style scoped>
	.t{
		height: 44px;
		background: #fefefe;
		font-size: 18px;
    	color: #000;
    	padding: 0;
	}
	.mail{
		height: 44px;
	    width: 52px;
	    background: url(../../assets/images/mailbtn.png) center no-repeat;
	    background-size: 52px 44px;
	}
	/*网页内容*/
	.content{
		padding: 44px 0 51px 0;    
	    text-align: left;
		background: #f5f5f5;
	}
	.find_top{
		width: 100%;
	    background: #fefefe;
	    text-align: center;
	    padding: 0px 1.5625% 3.125%;
	    box-sizing: border-box;
	    border-bottom: 1px solid #ddd;
	}
	.fbtn{
		display: inline-block;
	    width: 25%;
	    vertical-align: top;
	    padding: 0px 5px;
	    box-sizing: border-box;
	}
	.fbtn img{
		display: inline-block;
		width: 100%;

	}
	.hot_video{
		background: #fefefe;
	    border-top: 1px solid #ddd;
	    border-bottom: 1px solid #ddd;
	    margin-top: 10px;
	}
	.hot_t{
		padding: 2px 3.125% 0px;
	    height: 38px;
	    line-height: 38px;

	}
	.hot_tag{
		display: inline-block;
	    height: 18px;
	    line-height: 18px;
	    font-size: 12px;
	    color: #01a1ea;
	    border: 1px solid #01a1ea;
	    border-radius: 2px;
	    margin-left: 3.125%;
	    padding: 0px 4px;
	}
	.hot_item{
		padding: 10px 3.125%;
	}
	.item_t{
		height: 30px;
	    line-height: 30px;
	    margin-bottom: 10px;
	}
	.item_t img{
	    height: 30px;
	    float: left;
	}
	.item_t span{
	    font-size: 14px;
	    padding-left: 10px;
	}
	.item_t em{
	    font-size: 10px;
	    color: #999;
	    float: right;
	    font-style: normal;
	}
	.hot_c{
		width: 100%;
    	position: relative;
	}
	.hot_c img{
		display: block;
    	width: 100%;
	}
	.info{
		display: block;
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    left: 0px;
	    top: 0px;
	    background: url(../../assets/images/videobg.png) center no-repeat;
	    background-size: 100% 100%;
	}
	.info strong{
	    width: 70%;
	    height: 24px;
		color: #fff;
	    line-height: 24px;
	    position: absolute;
	    left: 14px;
	    bottom: 32px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-weight: normal;
	}
	.info em{
		color: #fff;
	    line-height: 24px;
	    font-size: 10px;
	    position: absolute;
	    left: 14px;
	    bottom: 10px;
	    font-style: normal;
	}
	.info span{
		display: block;
	    height: 30px;
	    width: 40px;
	    position: absolute;
	    right: 14px;
	    bottom: 20px;
	    background: url(../../assets/images/videobtn.png) center no-repeat;
	    background-size: 100% 100%;
	}
	.item_pic{
		width: 30%;
	    display: inline-block;
	    margin-right: -5px;
	}
	.item_text{
		width: 70%;
	    padding-left: 10px;
	    display: inline-block;    
	    vertical-align: top;
	    text-align: left;
	    box-sizing: border-box;
	}
	.item_text strong{
	    height: 23px;
		font-size: 15px;
	    line-height: 23px;
	    white-space: nowrap;    
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.starts{
		height: 14px;
    	margin: 3px auto 4px;
	}
	.starts img{
		display: inline-block;
	    vertical-align: top;
	    height: 14px;
	    width: 14px;
	    margin-right: 3px;
	}
	.cp_info1{
		height: 20px;
	    line-height: 20px;
	    font-size: 12px;
	    color: #999;
	    padding-left: 16px;
    	display: block;
	}
	.cp_info1:nth-of-type(1){
    	background: url(../../assets/images/cp2.png) 0px 3px no-repeat;
		background-size: 14px 14px;
	}
	.cp_info1:nth-of-type(2){
    	background: url(../../assets/images/cp1.png) 0px 3px no-repeat;
		background-size: 14px 14px;
	}
	.shows_img{
		display: block;
		padding-top: 5px;
	}
	.shows_img img{
	    vertical-align: top;
	    width: 33%;
	    padding: 5px;
	    box-sizing: border-box;
	    margin-right: -4px;
	}
	.mymenu{
		font-size: 15px;
	    line-height: 32px;
	    padding-bottom: 8px;
	    text-align: center;
	}
	.mydate{
		display: block;
		 width: 93.75%;
		 padding: 10px 0;
		 margin: 0 auto;
	}
	.mydate img{
		width:100%;
	}
	.sctag{
		display: inline-block;
	    height: 24px;
	    line-height: 24px;
	    background: #f5f5f5;
	    padding: 0px 6px;    
	    margin: 6px 4px 6px 0px;
	    font-size: 12px;
	    float: left;
	    color: #666;
	}
	.heatinfo{
		color: #999;
		height: 20px;
	    font-size: 13px;
	    display: block;
	    line-height: 20px;
	    clear: left;
	}
</style>
