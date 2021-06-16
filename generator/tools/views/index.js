var typograph = `
\nimport Typograf from 'typograf';
\nlet Tp = new Typograf({locale: ['ru', 'en-US']});
\nVue.directive("typograph", {
  bind: (el) => {
    if (process.browser) {
      let element = el;  
      element.innerHTML = Tp.execute(el.innerHTML);
    }
  }
});
`;

var app = `
<template>
  <Resize>
    <router-view></router-view>
  </Resize>
</template>
<script>
import Resize from '@/components/common/Resize.vue';
export default {
	name: 'App',
	components: {
		Resize
	}
};
</script>`;

var router = `
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
	path: '/',
	name: 'home',
	component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router`;

var store = `
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules
});
`;

var homePage = `
<template>
    <div class="home-page"></div>
</template>

<script>
    export default {
        name: 'HomePage',
    }
</script>
`;

module.exports = {
  typograph,
  app,
  router,
  store,
  homePage
};