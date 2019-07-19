<template>
	<main>
      	<router-view></router-view>
      	<ul class="navlist">
      		<li class="btns" v-for="(item,index) in list">
        		<router-link :to="item.adr">
        			<img :src="item.pics" class="act"/>
        			<img :src="item.pic"/>
        			{{item.word}}
        		</router-link>
        	</li>
      	</ul>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$http.get('./data/my_data.json')
			.then((res)=>{
				this.list=res.data.list
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
<style type="text/css">
	.navlist{
		position: fixed;
		width: 100%;
		height: 51px;
		bottom: 0;
		margin: 0 auto;
		background: #fefefe;
	    position: fixed;
	    z-index: 1;
	    border-top: 1px solid #eee;
	}
	.btns{
		float: left;
		width: 25%;
	}
	.btns a{
		font-size: 10px;
	    color: #868686;
	    line-height: 14px;
	}
	.btns img{
	    display: block;
	    margin: 3px auto 0px;
	    height: 30px;
	    width: 30px;
	}
	.router-link-exact-active{
		color: #ff4c39 !important;
	}
	.btns .act{
		display: none;
	}
	.btns .router-link-active .act{
		display:block;
	}
	.btns .router-link-active img{
		display: none;
	}
</style>