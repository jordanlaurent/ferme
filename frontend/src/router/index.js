import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'
import PageProto from '../views/PageProto.vue'
import Profil from '../views/Profil.vue'
import ListAnnonces from '../views/ListAnnonces.vue'
import Contact from '../views/Contact.vue'
import TelechargerVotrePrototype from '../views/TelechargerVPrototype.vue'
Vue.use(VueRouter)

const routes = [
{
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion,
  },{
    path: '/Inscription',
    name: 'Inscription',
   component: Inscription,
  },{
    path: '/Prototype',
    name: 'PageProto',
    component: PageProto,
  },{
    path: '/Profil',
    name: 'Profil',
    component: Profil,
  },{
    path: '/ListAnnonces',
    name: 'ListAnnonces',
    component: ListAnnonces,
  },{
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },{
    path: '/Poster-votre-annonce',
    name: 'Poster-votre-annonce',
    component: TelechargerVotrePrototype,
  },
  {
    path: '*', 
    redirect: '/'
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
