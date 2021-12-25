import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import View from '@/views/View';
import Upload from '@/views/Upload';

Vue.use(Router);

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component: Home
		},
		{
			path:'/cats/my',
			component: View
		},
		{
			path:'/cats/new',
			component: Upload
		},
	]
})