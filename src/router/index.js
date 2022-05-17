import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvestorTerms from '../views/InvestorTermsView.vue'
import IssuerTerms from '../views/IssuerTermsView.vue'
import TCForm from '../views/TCFormView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/termsandconditionsform',
    name: 'termsandconditionsform',
    component: TCForm,
  },
  {
    path: '/IssuerTerms',
    name: 'IssuerTerms',
    component: IssuerTerms,
  },
  {
    path: '/InvestorTerms',
    name: 'InvestorTerms',
    component: InvestorTerms,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
