import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvestorTerms from '../views/InvestorTermsView.vue'
import IssuerTerms from '../views/IssuerTermsView.vue'
import TCForm from '../views/TCFormView.vue'
import FranceDEFrench from '../views/FranceDEFrench.vue'
import FranceFREnglish from '../views/FranceFREnglish.vue'
import FranceFRFrench from '../views/FranceFRFrench.vue'
import GermanyDEEnglish from '../views/GermanyDEEnglish.vue'
import GermanyDEGerman from '../views/GermanyDEGerman.vue'
import ItalyDEItalian from '../views/ItalyDEItalian.vue'
import ItalyITEnglish from '../views/ItalyITEnglish.vue'
import ItalyITItalian from '../views/ItalyITItalian.vue'
import SpainDESpanish from '../views/SpainDESpanish.vue'
import SpainESEnglish from '../views/SpainESEnglish.vue'
import SpainESSpanish from '../views/SpainESSpanish.vue'


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
    path: '/France/DE/FrenchTerms',
    name: 'FranceDEFrenchTerms',
    component: FranceDEFrench,
  },
  {
    path: '/France/FR/EnglishTerms',
    name: 'FranceFREnglishTerms',
    component: FranceFREnglish,
  },
  {
    path: '/France/FR/FrenchTerms',
    name: 'FranceFRFrenchTerms',
    component: FranceFRFrench,
  },
  {
    path: '/Germany/DE/EnglishTerms',
    name: 'GermanyDEEnglishTerms',
    component: GermanyDEEnglish,
  },
  {
    path: '/Germany/DE/GermanTerms',
    name: 'GermanyDEGermanTerms',
    component: GermanyDEGerman,
  },
  {
    path: '/Italy/DE/ItalianTerms',
    name: 'ItalyDEItalianTerms',
    component: ItalyDEItalian,
  },
  {
    path: '/Italy/IT/EnglishTerms',
    name: 'ItalyITEnglishTerms',
    component: ItalyITEnglish,
  },
  {
    path: '/Italy/IT/ItalianTerms',
    name: 'ItalyITItalianTerms',
    component: ItalyITItalian,
  },
  {
    path: '/Spain/DE/SpanishTerms',
    name: 'SpainDESpanishTerms',
    component: SpainDESpanish,
  },
  {
    path: '/Spain/ES/EnglishTerms',
    name: 'SpainESEnglishTerms',
    component: SpainESEnglish,
  },
  {
    path: '/Spain/ES/SpanishTerms',
    name: 'SpainESSpanishTerms',
    component: SpainESSpanish,
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
