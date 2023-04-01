<template>
    <body>
<div class="d-flex" id="wrapper">
<div id="sidebar-wrapper">
<div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom" style="color:white">
<i class="bi bi-car-front-fill" style="color:#950101"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>DriveGo</div>
<div class="list-group list-group-flush my-3">
<router-link :to="{name: 'AdminDashboard'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold" style="color:#950101;background-color:white"><i class="bi bi-car-front"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>All</a></router-link>
<router-link :to="{name: 'MarqueList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-ev-front-fill"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Marques</a></router-link>
<router-link :to="{name: 'TypemoteurList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i  class="bi bi-text-wrap"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Types de Moteur</a></router-link>
<router-link :to="{name: 'TypeVoitureList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-text-paragraph"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Types de Voiture</a></router-link>
<a href="#" style="color:red" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i style="color:red" class="bi bi-box-arrow-right"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Logout</a>
</div>
</div>
<div id="page-content-wrapper">
<nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
<div class="d-flex align-items-center">
<i class="bi bi-list-task" style="font-size: 2rem;color:black"></i>
<i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
<h2 class="fs-2 m-0" style="color:black;font-family:cursive">Dashboard</h2>

</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
<li class="nav-item-dropdown">
<a href="#" class="nav-link dropdown-toggle second-text fw-bold" id="navbarDropdown">
<i class="bi bi-person" style="color:black;font-size:20px"></i>admin</a>

</li>
</ul>
</div>
</nav>
<div class="container-fluid px-4">
<br>
<h3 class="cr">All Cars</h3>
<br><br>
<router-link :to="{name: 'AddCar'}" class="custom-link">  <v-row class="my-custom-class" justify="center"><button class="main-btn"> Add Car <i class="fas fa-shopping-basket ps-3"></i></button></v-row></router-link>
</div>
<br><br>
<table class="table" align="center" style="display: table;
  margin: auto;width:90%;height=20px;border: 2px solid black">
  <thead>
    <tr>
      <th scope="col" style="color : black">image</th>
      <th scope="col" style="color : black">Marque</th>
      <th scope="col" style="color : black">Type de moteur</th>
      <th scope="col" style="color : black">Type de voiture</th>
      <th scope="col" style="color : black">prix</th>
      <th scope="col" style="color : black">disponibilite</th>
      <th scope="col" style="color : black">numero de chassis</th>
      <th scope="col" style="color : black">options</th>
    </tr>
  </thead>
  <tbody>
  
    <tr v-for="item in items" :key="item.id" >
        
        <td style="color : black"><img src="https://images.caradisiac.com/images/1/3/5/9/191359/S0-dacia-duster-a-quoi-ressemble-la-nouvelle-version-de-base-686492.jpg" style="width:76px;height=76px"></td>
        <td style="color : black" ><b>{{ item.typevoiture  }}</b></td>
        <td style="color : black" ><b>{{  item.typemoteur }}</b></td>
        <td style="color : black" ><b>{{  item.marque  }}</b></td>
        <td style="color : black"><b>{{ item.Prix }}</b></td>
        <td style="color : black"><b>{{ item.z }}</b></td>
        <td style="color : black"><b>{{ item.numero_chassis }}</b></td>
        <td >
        <button type="button" class="btn" @click="deleteCar(item.id)"> <v-btn variant="flat" color="error"> <i class="bi bi-trash3-fill"></i>Delete</v-btn></button>
        <router-link :to="{name: 'EditCar' , params:{id:item.id}}"> <v-btn variant="flat" color="black"><i class="bi bi-pencil-square"></i>Edit</v-btn></router-link>
        
        </td>
      </tr>
  </tbody>
</table>
<br><br>
  <div class="text-center">
    <v-pagination style="color:black" v-model="page" :length="3" rounded="circle"></v-pagination>
</div>
</div>
</div>
    </body>

</template>


<script>
import axios from 'axios';
//import { reactive } from 'vue';
//import LaravelVuePagination from 'laravel-vue-pagination'

export default {
     name:"CarList",
    
     data(){
         return {
             items:[],
        }
    },
      
     
     created(){
         this.getCars();
         
     },
     methods:{
        async getCars(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/all');
                 this.items = response.data;
                 console.log(response.data);
             } catch (error) {
                 console.log(error);
             }
         } ,
         async deleteCar(id){
              try {
                await axios.delete('http://127.0.0.1:8000/api/cars/'+id);
                  this.getCars();
              } catch (error) {
                   console.log(error);
              }
         },
     
        
}
}
</script>
<style scoped>
:rout {
    --main-bg-color: black;
    --main-text-color: #950101;
    --second-text-color: white;
    --second-bg-color: grey;
}
.primary-text{
    color: var(--main-text-color);
}
.second-text{
    color: var(--second-text-color);
}
.primary-bg{
    background-color: var(--main-bg-color);
}

.secondry-bg{
    background-color: var(--second-bg-color);
}
.rounded-full{
    border-radius: 100%;
}
#wrapper{
    overflow-x: hidden;
   background-color: black;
   height: 812px;
}
#sidebar-wrapper{
    min-height: 100vh;
    margin-left: -15rem;
    transition: margin 0.25s ease-out;
}
#sidebar-wrapper .sidebar-heading{
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
}
#sidebar-wrapper .list-group{
    width:15rem;
}
#page-content-wrapper{
    min-width: 100vw;
    background-color: white;
}

#wrapper.toggled #sidebar-wrapper{
    margin-left: 0;
}
#menu-toggle{
    cursor: pointer;
}
.list-group-item{
    border: none;
    padding: 20px 30px;
    width: 100%;
    color: white;
    background-color: black;

}
#navbarDropdown{
    font-size: 18px;
    color: black;
}
.list-group-item.active{
    background-color: transparent;
    color:var(--main-text-color);
    font-weight: bold;
    border: none;
}
.cr{
    color: #950101;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 50px;
    
}
 .main-btn{
     display: inline-block;
     padding: 0.625rem 1.875rem;
     line-height: 1rem;
     background-color: black;
    
     color: white;
     font-size: 20px;
     font-weight: 300;
     text-transform: capitalize;
     border-radius: 2rem;
     box-shadow: 0px 2px 10px -1px rgb(0 0 0/ 19%);
     -webkit-transition: all .4s ease-out 0s;
     -o-transition: all .4s ease-out 0s;
     -moz-transition: all .4s ease-out 0s;
     transition: all .4s ease-out 0s;
     
 }
 .main-btn hover{
     background-color: transparent;
     color: black;
 }
@media(min-width:768px){
    #sidebar-wrapper{
        margin-left: 0;
    }
    #page-content-wrapper{
        min-width: 0;
        width: 100%;
      
    }
    #wrapper.toggled #sidebar-wrapper{
        margin-left: -15rem;
    }
    .custom-link{
        color: black;
    }
}
</style>