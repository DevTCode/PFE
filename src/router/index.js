import Vue from 'vue'
import {createRouter , createWebHistory} from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditCar from '@/components/EditCar'
import voitures from '@/components/voitures';
import  VehiculeS from  '@/components/VehiculeS.vue';
import Cars from '@/components/Cars';
import Contact from '@/components/Contact';
import pic4 from '@/components/pic4';
import ai from '@/components/ai';
import AddCar from '@/components/AddCar';
 import EmailForum from '@/components/EmailForum';
//import   SearchCl from  '@/components/SearchCl.vue'
import  LoginClient from  '@/components/LoginClient.vue'
import ClientAuth from  '@/components/ClientAuth.vue'

import ProfileClient from  '@/components/ProfileClient.vue'

import ReserverLoc from  '@/components/ReserverLoc.vue'
import m from '@/components/m';
import facture from '@/components/facture';
import tv from '@/components/tv';
import ModifierU from '@/components/ModifierU';
import ImageList from '@/components/ImageList'
import TypemoteurList from '@/components/TypemoteurList'
import TypeVoitureList from '@/components/TypeVoitureList'
import MarqueList from '@/components/MarqueList'
import menu from '@/components/menu';
import ImaShw from '@/components/ImaShw';
import ImShow from '@/components/ImShow';
import adminMailForum from '@/components/adminMailForum';
import fact from '@/components/fact';
import AddMarque from '@/components/AddMarque';
import Editmarque from '@/components/Editmarque';
import AddTypeMoteur from '@/components/AddTypeMoteur';
import EditTypeMoteur from '@/components/EditTypeMoteur';
import AddTypeVoiture from '@/components/AddTypeVoiture';
import EditTypeVoiture from '@/components/EditTypeVoiture';
import AdminDashboard from '@/components/AdminDashboard';
import UploadPic from '@/components/UploadPic';
import EditImage from '@/components/EditImage';
import locations from '@/components/locations';
import loca from '@/components/loca';
    const routes = [
   /*   
        {
          path: '/s',
          name: 'search',
          component: search
      },
        
      {
        path: '/locations',
        name: 'locations',
        component: locations
    },
      
    {
      path: '/loc',
      name: 'loc',
      component: loc
  },
  
  {
    path: '/chercher',
    name: 'SearchCl',
    component: SearchCl 
  },
  
  */
 
  {
    path: '/profile',
    name: 'ProfileClient',
    component:   ProfileClient
  },

  {
    path: '/auth',
   name: 'ClientAuth',
   component: ClientAuth
 },
 
 {
  path: '/login',
 name: 'LoginClient',
 component: LoginClient
},
{
  path: '/voiture',
  name: 'VehiculeS',
  component: VehiculeS
},
 
 {
  path: '/z/:id',
  name: 'ReserverLoc',
  component: ReserverLoc
},

{
  path: '/editu/:id',
  name: 'ModifierU',
  component: ModifierU 
},
    {
      path: '/locations',
      name: 'locations',
      component: locations
  },
  {
    path: '/loca',
    name: 'loca',
    component: loca
},
     
    {
      path: '/pic4',
      name: 'pic4',
      component: pic4
  },
      {
        path: '/h',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
      path: '/ai',
      name: 'ai',
      component: ai
  },
  
    {
      path: '/fact/:id',
      name: 'fact',
      component: fact
  },
    {
      path: '/m2',
      name: 'm',
      component: m
  },
  {
    path: '/tv2',
    name: 'tv',
    component: tv
},
{
  path: '/facture/:id',
  name: 'facture',
  component: facture
},
{
  path: '/ae',
  name: 'adminMailForum',
  component: adminMailForum
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
          path: '/ei/:id',
          name: 'EditImage',
          component: EditImage
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
            path: '/up',
            name: 'UploadPic',
            component: UploadPic
        },
        {
          path: '/c',
          name: 'Cars',
          component: Cars
      },
        {
            path: '/ma',
            name: 'MarqueList',
            component: MarqueList
        },
        
   
      {
          path: '/me',
          name: 'menu',
          component: menu
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
  path: '/v',
  name: 'voitures',
  component: voitures
},

{
  path: '/co',
  name: 'Contact',
  component: Contact
},

{
  path: '/ad',
  name: 'AdminDashboard',
  component: AdminDashboard
},
{
  path: '/is',
  name: 'ImaShw',
  component: ImaShw
},
{
  path: '/iso',
  name: 'ImShow',
  component: ImShow
},

{
  path: '/emf',
  name: 'EmailForum',
  component: EmailForum
},
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
