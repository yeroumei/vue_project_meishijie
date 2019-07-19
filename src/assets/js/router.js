import VueRouter from 'vue-router'

import firstbar from '../../components/index/firstbar.vue'
import recommend from '../../components/index/recommend.vue'
import discover from '../../components/index/discover.vue'
import eatingwords from '../../components/index/eatingwords.vue'
import my from '../../components/index/my.vue'
import search from '../../components/others/search.vue'
import classify from '../../components/others/classify.vue'
import video from '../../components/others/video.vue'
import details from '../../components/others/details.vue'
import rec_detail from '../../components/others/rec_detail.vue'
import login from '../../components/others/login.vue'
import register from '../../components/others/register.vue'
import news from '../../components/others/news.vue'
export default new VueRouter({
	routes:[
		{
			path:'/',
			component:firstbar,
			redirect:'/recommend',
			children:[
				{
					path:'/recommend',
					component:recommend
				},
				{
					path:'/discover',
					component:discover
				},
				{
					path:'/eatingwords',
					component:eatingwords
				},
				{
					path:'/my',
					component:my
				},
			]
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/classify',
			component:classify
		},
		{
			path:'/video',
			component:video
		},
		{
			path:'/details',
			component:details
		},
		{
			path:'/rec_detail',
			component:rec_detail
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/news',
			component:news
		}
	]
})
