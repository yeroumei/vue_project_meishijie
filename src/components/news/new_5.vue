<template>
	<main>
		<ul class="cons">
			<li class="lists" v-for="(item,index) in new5">
				<router-link to="/details">
					<img class="pic" :src="item.src"/>
					<div class="text">
						<h2>{{item.title}}</h2>
						<p>{{item.des}}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				new5:[]
			}
		},
		mounted(){
			this.$http.get('./data/news_data.json')
			.then((res)=>{
				this.new5=res.data.new5
			})
			.catch(()=>{
				
			})
			.finally(()=>{
				
			})
		}
	}	
</script>

<style>
	.cons{
		overflow: hidden;
		width: 100%;
		background: #f5f5f5;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.lists{
		width: 100%;
		margin: 0 auto;
	    padding: 10px 5%;
	    box-sizing: border-box;
	    border-bottom: 1px solid #e6e6e6;
	}
	.pic{
		float: left;
		width: 26%;
	}
	.text{
		width: 70%;
		float: right;
		text-align: left;
		padding-left: 10px;
	}
	.text h2{
		font-size: 16px;
		line-height: 22px;
		color: #000;
	}
	.text p{
		font-size: 14px;
	    line-height: 18px;
	    color: #ababab;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
</style>