import Vue from 'vue'
import {createRouter , createWebHistory} from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditCar from '@/components/EditCar'
import AddCar from '@/components/AddCar'
import search from '@/components/search'
import ImageList from '@/components/ImageList'
import TypemoteurList from '@/components/TypemoteurList'
import TypeVoitureList from '@/components/TypeVoitureList'
import MarqueList from '@/components/MarqueList'
import EmailForum from "@/components/EmailForum";
import RegisterForum from "@/components/RegisterForum";
import menu from '@/components/menu';
import adminMailForum from '@/components/adminMailForum';
import EmailRegister from '@/components/EmailRegister';
import affichage from '@/components/affichage';
import AddMarque from '@/components/AddMarque';
import Editmarque from '@/components/Editmarque';
import AddTypeMoteur from '@/components/AddTypeMoteur';
import EditTypeMoteur from '@/components/EditTypeMoteur';
import AddTypeVoiture from '@/components/AddTypeVoiture';
import EditTypeVoiture from '@/components/EditTypeVoiture';
import CarAdd from '@/components/CarAdd';
import AdminDashboard from '@/components/AdminDashboard';


    const routes = [
      
        {
          path: '/s',
          name: 'search',
          component: search
      },
        {
            path: '/edit/:id',
            name: 'EditCar',
            component: EditCar
        },
        {
          path: '/editM/:id',
          name: 'Editmarque',
          component: Editmarque
        },
        {
          path: '/editTm/:id',
          name: 'EditTypeMoteur',
          component: EditTypeMoteur
        },
        {
          path: '/editTv/:id',
          name: 'EditTypeVoiture',
          component: EditTypeVoiture
        },
        {
            path: '/create',
            name: 'AddCar',
            component: AddCar
        },
        {
            path: '/i',
            name: 'ImageList',
            component: ImageList
        },
       
        {
            path: '/tm',
            name: 'TypemoteurList',
            component: TypemoteurList
        },
        
        
        {
            path: '/tv',
            name: 'TypeVoitureList',
            component: TypeVoitureList
        },
        
        {
            path: '/ma',
            name: 'MarqueList',
            component: MarqueList
        },
        
        {
          path: '/e',
          name: 'EmailForum',
          component: EmailForum
      },
      {
          path: '/r',
          name: 'RegisterForum',
          component: RegisterForum
      },
      {
          path: '/me',
          name: 'menu',
          component: menu
      },
      {
          path: '/ae',
          name: 'adminMailForum',
          component: adminMailForum
      },
      {
          path: '/ef',
          name: 'EmailRegister',
          component: EmailRegister
      },
 
      {
        path: '/affi',
        name: 'affichage',
        component: affichage
    },
    {
      path: '/am',
      name: 'AddMarque',
      component: AddMarque
  },
  {
    path: '/atv',
    name: 'AddTypeVoiture',
    component: AddTypeVoiture
},
{
  path: '/atm',
  name: 'AddTypeMoteur',
  component: AddTypeMoteur
},
 
{
  path: '/ca',
  name: 'CarAdd',
  component: CarAdd
},
{
  path: '/ad',
  name: 'AdminDashboard',
  component: AdminDashboard
},

    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

