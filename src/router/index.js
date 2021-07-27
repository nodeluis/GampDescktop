import Vue from 'vue'
import VueRouter from 'vue-router'

//escritorio virtual

//escritorio virtual end

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children:[{
      path: '/',
      component: () => import('../views/virtualDescktop/HomeVD.vue'),
      children:[{
        path: '',
        name: 'InitVD',
        component: () => import('../views/virtualDescktop/sessionrouter/InitVD.vue'),
      },
      {
        path: '/newdocument',
        name: 'NewDocumentVD',
        component: () => import('../views/virtualDescktop/sessionrouter/NewDocumentVD.vue'),
      },
      {
        path: '/pendients',
        name: 'PendientsVD',
        component: () => import('../views/virtualDescktop/sessionrouter/PendientsVD.vue'),
      },
      {
        path: '/finisheds',
        name: 'Finished',
        component: () => import('../views/virtualDescktop/sessionrouter/Finished.vue'),
      },
      {
        path: '/changekey',
        name: 'ChangeKey',
        component: () => import('../views/virtualDescktop/sessionrouter/ChangeKey.vue'),
      },
      {
        path: '/reports',
        name: 'Reports',
        component: () => import('../views/virtualDescktop/sessionrouter/Reports.vue'),
      },
      {
        path: '/reportderivation',
        name: 'ReportDerivation',
        component: () => import('../views/virtualDescktop/sessionrouter/ReportDerivation.vue'),
      },
      {
        path: '/reportderivationcounsel',
        name: 'ReportDerivationCouncel',
        component: () => import('../views/virtualDescktop/sessionrouter/ReportDerivationCouncel.vue'),
      },
      {
        path: '/reportderivationlegal',
        name: 'ReportDerivationLegal',
        component: () => import('../views/virtualDescktop/sessionrouter/ReportDerivationLegal.vue'),
      },
      {
        path: '/searchbydate',
        name: 'SearchByDate',
        component: () => import('../views/virtualDescktop/sessionrouter/SearchByDate.vue'),
      },
      {
        path: '/result',
        name: 'ResultSearch',
        component: () => import('../views/virtualDescktop/sessionrouter/ResultSearch.vue'),
      },]
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
