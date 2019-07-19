<template>
	<main style="background-color: #f6f6f6;">
		<header class="topbar">
			<i class="back" @click="back()"></i>
			<form action="" class="find">
				<input type="text" id="in" placeholder="菜谱名、食材名">
				<input type="submit" id="sec" value="搜索">
			</form>
		</header>
		<section class="content">
			<p class="tips">请输入要搜索的关键字</p>
			<div class="like">
				<h2 class="title1">猜你喜欢</h2>
				<!--跨域引入广告-->
				<iframe width="353" frameborder="0" height="106" scrolling="no" src="//pos.baidu.com/s?hei=106&amp;wid=353&amp;di=u2985812&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;dtm=HTML_POST&amp;ps=186x11&amp;col=zh-CN&amp;cmi=0&amp;cfv=0&amp;dri=0&amp;prot=2&amp;par=375x667&amp;tpr=1563171446197&amp;pss=375x1171&amp;chi=5&amp;dc=3&amp;tcn=1563171446&amp;drs=1&amp;cdo=0&amp;dis=0&amp;cpl=0&amp;cec=UTF-8&amp;psr=375x667&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;pis=-1x-1&amp;ari=2&amp;ccd=24&amp;dai=1&amp;pcs=375x667&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;tlm=1563171446&amp;cce=true&amp;exps=111000,117008,110011&amp;cja=false&amp;ant=0"></iframe>
				<iframe width="353" frameborder="0" height="106" scrolling="no" src="//pos.baidu.com/s?hei=106&amp;wid=353&amp;di=u2985814&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;tpr=1563171446197&amp;dai=2&amp;ari=2&amp;col=zh-CN&amp;cja=false&amp;cfv=0&amp;cdo=0&amp;cpl=0&amp;pcs=375x667&amp;ps=294x11&amp;pis=-1x-1&amp;ccd=24&amp;cmi=0&amp;ant=0&amp;dri=0&amp;drs=1&amp;tcn=1563171446&amp;cce=true&amp;pss=375x1279&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;prot=2&amp;chi=5&amp;tlm=1563171446&amp;dtm=HTML_POST&amp;exps=111000,116008,110011&amp;dc=3&amp;psr=375x667&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;dis=0&amp;cec=UTF-8&amp;par=375x667"></iframe>
			</div>
			<!--下午茶推荐-->
			<div class="dinner">
				<router-link to="/recommend">
					<h2 class="title1">下午茶推荐	<span class="goto"></span></h2>
				</router-link>
				<ul>
					<li class="tui_li"  v-for="(item,index) in eat">
						<div class="picbox">
							<img :alt="item.des" :src="item.src"/>
						</div>
						<p>{{item.des}}</p>
					</li>
				</ul>
				<iframe width="353" frameborder="0" height="106" scrolling="no" src="https://pos.baidu.com/s?hei=106&amp;wid=353&amp;di=u2985816&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;cce=true&amp;chi=5&amp;par=375x667&amp;ps=603x11&amp;dis=0&amp;dc=3&amp;ari=2&amp;exps=111000,110011&amp;dri=0&amp;cja=false&amp;dtm=HTML_POST&amp;pis=-1x-1&amp;col=zh-CN&amp;tpr=1563171446197&amp;pss=375x1387&amp;ant=0&amp;tlm=1563171446&amp;psr=375x667&amp;prot=2&amp;drs=1&amp;tcn=1563171446&amp;pcs=375x667&amp;cfv=0&amp;ccd=24&amp;cmi=0&amp;cpl=0&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;cdo=0&amp;cec=UTF-8&amp;dai=3&amp;ltr=https%3A%2F%2Fm.meishij.net%2F"></iframe>
			</div>
			<!--热门分类-->
			<div class="classify">
				<router-link to="/recommend">
					<h2 class="title1">热门分类	<span class="goto"></span></h2>
				</router-link>
				<ul class="list_ul">
					<li class="list_li" v-for="(item,index) in hot"><a>{{item.name}}</a></li>					
				</ul>
				<iframe width="353" frameborder="0" height="106" scrolling="no" src="https://pos.baidu.com/s?hei=106&amp;wid=353&amp;di=u2985817&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;cpl=0&amp;cmi=0&amp;ari=2&amp;pis=-1x-1&amp;ant=0&amp;chi=5&amp;col=zh-CN&amp;dri=0&amp;dis=0&amp;par=375x667&amp;ccd=24&amp;tpr=1563171446197&amp;tlm=1563171446&amp;cja=false&amp;cce=true&amp;ps=948x11&amp;exps=111000,116008,110011&amp;dc=3&amp;pss=375x1495&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;psr=375x667&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;dtm=HTML_POST&amp;cdo=0&amp;cfv=0&amp;drs=1&amp;pcs=375x667&amp;dai=4&amp;tcn=1563171446&amp;prot=2&amp;cec=UTF-8"></iframe>
				<iframe width="353" frameborder="0" height="106" scrolling="no" src="https://pos.baidu.com/s?hei=106&amp;wid=353&amp;di=u2985818&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;cce=true&amp;chi=5&amp;pcs=375x667&amp;tcn=1563171446&amp;dri=0&amp;tpr=1563171446197&amp;cmi=0&amp;prot=2&amp;pis=-1x-1&amp;col=zh-CN&amp;ant=0&amp;par=375x667&amp;cpl=0&amp;ari=2&amp;cja=false&amp;ps=1056x11&amp;cdo=0&amp;cfv=0&amp;dtm=HTML_POST&amp;drs=1&amp;tlm=1563171446&amp;dis=0&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;cec=UTF-8&amp;pss=375x1603&amp;psr=375x667&amp;exps=111000,115008,110011&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;dai=5&amp;dc=3&amp;ccd=24"></iframe>
			</div>	
			<!--热门推荐-->
			<div class="recom">
				<router-link to="/recommend">
					<h2 class="title1">热门推荐	<span class="goto"></span></h2>
				</router-link>
				<ul>
					<li class="recom_li" v-for="(item,index) in recommend1">
						<img class="recom_img" :src="item.src"/>
						<p class="recom_title">{{item.title}}</p>
						<span class="recom_s">{{item.look}}</span>
					</li>
					<li class="recom_li">
						<iframe width="345" frameborder="0" height="90" scrolling="no" src="https://pos.baidu.com/s?hei=90&amp;wid=345&amp;di=u2985819&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;exps=111000,116008,110011&amp;dai=6&amp;dri=0&amp;cpl=0&amp;cja=false&amp;chi=5&amp;dc=3&amp;pis=-1x-1&amp;ari=2&amp;pss=375x1711&amp;tcn=1563171446&amp;drs=1&amp;ccd=24&amp;tpr=1563171446197&amp;dis=0&amp;pcs=375x667&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;psr=375x667&amp;tlm=1563171446&amp;prot=2&amp;ant=0&amp;cce=true&amp;cec=UTF-8&amp;cmi=0&amp;cfv=0&amp;ps=1459x15&amp;cdo=0&amp;dtm=HTML_POST&amp;par=375x667&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;col=zh-CN"></iframe>
					</li>
					<li class="recom_li">
						<iframe width="345" frameborder="0" height="90" scrolling="no" src="https://pos.baidu.com/s?hei=90&amp;wid=345&amp;di=u2985820&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=c751b4c4de90a7b513e86de0a3640eae&amp;prot=2&amp;ccd=24&amp;dtm=HTML_POST&amp;cja=false&amp;psr=375x667&amp;dai=7&amp;cec=UTF-8&amp;cpl=0&amp;dis=0&amp;ant=0&amp;ari=2&amp;chi=5&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;tcn=1563171446&amp;pcs=375x667&amp;pis=-1x-1&amp;cmi=0&amp;tlm=1563171446&amp;ps=1552x15&amp;dc=3&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;cce=true&amp;par=375x667&amp;tpr=1563171446197&amp;cfv=0&amp;drs=1&amp;cdo=0&amp;pss=375x1803&amp;dri=0&amp;col=zh-CN&amp;exps=111000,110011"></iframe>
					</li>
					<li class="recom_li">
						<p class="last_title">下酒菜，做给最爱的爸爸</p>
						<img class="last" v-for="(item,index) in recommend2" :src="item.src"/>
					</li>
					<li class="recom_li">
						<iframe width="345" frameborder="0" height="90" scrolling="no" src="https://pos.baidu.com/s?hei=90&amp;wid=345&amp;di=u2985821&amp;ltu=https%3A%2F%2Fm.meishij.net%2Fsearch.php&amp;psi=55e0434685dbd42f68dde8aff4c558f3&amp;cja=false&amp;dtm=HTML_POST&amp;ant=0&amp;col=zh-CN&amp;tcn=1563176304&amp;cdo=0&amp;drs=1&amp;prot=2&amp;psr=375x667&amp;pss=375x2254&amp;pis=-1x-1&amp;dis=0&amp;ti=%E7%BE%8E%E9%A3%9F%E6%9D%B0%E8%8F%9C%E8%B0%B1%E6%90%9C%E7%B4%A2%20-%20%E7%BE%8E%E9%A3%9F%E6%9D%B0%E7%A7%BB%E5%8A%A8%E7%89%88&amp;exps=111000,110011&amp;tpr=1563176304196&amp;cce=true&amp;ccd=24&amp;dai=8&amp;ari=2&amp;cfv=0&amp;cec=UTF-8&amp;cmi=0&amp;cpl=0&amp;tlm=1563176304&amp;dri=0&amp;pcs=375x667&amp;dc=3&amp;chi=5&amp;ps=1893x15&amp;ltr=https%3A%2F%2Fm.meishij.net%2F&amp;par=375x667"></iframe>
					</li>
					<li class="recom_li" v-for="(item,index) in recommend3">
						<img class="recom_img" :src="item.src"/>
						<p class="recom_title">{{item.title}}</p>
						<span class="recom_s">{{item.look}}</span>
					</li>
				</ul>
			</div>	
		</section>
	</main>
</template>

<script >
	export default{
		data(){
			return{
				show:true,
				eat:[],
				hot:[],
				recommend1:[],
				recommend2:[],
				recommend3:[]
			}
		},
		mounted(){
			this.$http.get('./data/sch_data.json')
			.then((res)=>{
				this.eat=res.data.eat
				this.hot=res.data.hot
				this.recommend1=res.data.recommend1
				this.recommend2=res.data.recommend2
				this.recommend3=res.data.recommend3
			})
			.catch(()=>{
				
			})
			.finally(()=>{

			})
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			del(){
				this.show=!this.show
			}
		}
	}
</script>
<style scoped>
	.topbar{
		height: 44px;
    	width: 100%;    
    	background: #fefefe;
    	position: fixed;
   		top: 0px;
   		text-align: center;
   		z-index: 1;
	}
	.back{
		height: 44px;
	    width: 60px;
	    background: url(../../assets/images/bgbtn.png) -160px 0px no-repeat;
	    background-size: 400px 400px;
	    position: absolute;
	    left: 0px;
	    top: 0px;
	    z-index: 100;
	}
	.find{
		height: 44px;
	    padding: 6px 75px 6px 60px;
	    box-sizing: border-box;
	    width: 100%;
	}
	.find input{
		width: 100%;
		height: 32px;
		box-sizing: border-box;
		font-size: 14px;
		border-radius: 2px;
		border: 0;
		display: block;
		outline: none;
	}
	#in{
	    background: #eee;
	    color: #333;
	    padding: 4px 8px;
	}
	#sec{
		width: 55px;
	    background: #ff4c39;
	    color: #fff;
	    line-height: 32px;
	    text-align: center;
	    position: absolute;
	    right: 15px;
	    top: 6px;
	}
	/*网页内容*/
	.content{
		padding-top: 44px;
	}
	.tips{
		background: #fff;
		height: 64px;
	    color: #666;
		border-bottom: 1px solid #eee;
	    line-height: 64px;
	}
	/*猜你喜欢*/
	.like,.dinner,.classify,.recom{
		background: #fff;
		padding: 0 14px;
		margin-top: 10px;
		overflow: hidden;
		border-top: 1px solid #eee;
	}
	.title1{
		padding: 25px 0 10px;
		font-size:20px;
		font-weight:normal;
		text-align: left;
	}
	.tui_li{
		width: 32.18%;
		float: left;
		margin-right: 6px;
		position: relative;
	}
	.tui_li:nth-of-type(3n){
		margin-right: 0;
	}
	.picbox{
		width: 100%;
	    overflow: hidden;
	    padding-top: 75%;
	    position: relative;
	}
	.tui_li img{
		width: 100%;
	    margin-top: -12.5%;
	    position: absolute;
	    left: 0px;
	    top: 0px;
	    font-size: 12px;
	}
	.tui_li p{
		margin: 3px 0 12px 0;
	}
	/*晚餐推荐*/
	.goto{
		display: inline-block;
		float: right;
		width: 10%;
		height: 30px;
		background: url(../../assets/images/next.png) right center no-repeat;
		background-size: 6px 11px;
	}
	/*热门分类*/
	.list_li{
		/*width: 24%;*/
		float: left;
	}
	.list_li a{
		display: inline-block;
		padding: 10px 15px;
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 3em;
	}
	/*热门推荐*/
	.recom_li{
		width: 100%;
		padding: 14px 0;
		text-align: left;    
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.recom_img{
		width: 32%;
		float: left;
	}
	.recom_title{
		float: right;
		width: 65%;
		font-size: 18px;
		padding: 4px 0;
	}
	.recom_s{
		color: #999;
		font-size: 14px;
		float: right;
		padding: 4px 0;
		width: 65%;
	}
	.last{
		width: 32%;
		margin-right: 2px;
	}
	.last_title{
		font-size: 17px;
	    line-height: 24px;
	    padding-bottom: 6px;
	    color: #333;
	    clear: right;
	}
	.last:nth-of-type(3){
		margin-right: 0;
	}
</style>
