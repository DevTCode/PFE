import Vue from 'vue'
import {createRouter , createWebHistory} from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditCar from '@/components/EditCar'
import voitures from '@/components/voitures';
import Cars from '@/components/Cars';
import Contact from '@/components/Contact';
import pic4 from '@/components/pic4';
import AddCar from '@/components/AddCar';
import m from '@/components/m';
import facture from '@/components/facture';
import tv from '@/components/tv';
import test from '@/components/test';
import search from '@/components/search'
import ImageList from '@/components/ImageList'
import TypemoteurList from '@/components/TypemoteurList'
import TypeVoitureList from '@/components/TypeVoitureList'
import MarqueList from '@/components/MarqueList'
import EmailForum from "@/components/EmailForum";
import RegisterForum from "@/components/RegisterForum";
import menu from '@/components/menu';
import ImaShw from '@/components/ImaShw';
import ImShow from '@/components/ImShow';
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
import UploadPic from '@/components/UploadPic';
import EditImage from '@/components/EditImage';
import clientCrud from '@/components/clientCrud';
import EditClient from '@/components/EditClient';
import locations from '@/components/locations';
import loc from '@/components/loc';
    const routes = [
      
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
        path: '/t',
        name: 'test',
        component: test
    },
      {
        path: '/ec/:id',
        name: 'EditClient',
        component: EditClient
    },
      {
        path: '/cl',
        name: 'clientCrud',
        component: clientCrud
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
  path: '/facture',
  name: 'facture',
  component: facture
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
  path: '/ca',
  name: 'CarAdd',
  component: CarAdd
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

    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
