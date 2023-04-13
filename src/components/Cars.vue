<template>
  <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          temporary
        >
<div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom" style="color:black" >
<i class="bi bi-car-front-fill" style="color:#950101"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>DriveGo</div>
<div class="list-group list-group-flush my-3">
<router-link :to="{name: 'AdminDashboard'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-car-front"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>All</a></router-link>
<router-link :to="{name: 'MarqueList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-ev-front-fill"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Marques</a></router-link>
<router-link :to="{name: 'TypemoteurList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i  class="bi bi-text-wrap" ></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Types de Moteur</a></router-link>
<router-link :to="{name: 'TypeVoitureList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-text-paragraph"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Types de Voiture</a></router-link>
<router-link :to="{name: 'ImageList'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-text-paragraph"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Images</a></router-link>
<router-link :to="{name: 'locations'}" class="custom-link"><a href="#" class="list-group-item list-group-item-action bg-transparen second-text fw-bold"><i class="bi bi-text-paragraph"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>Reservations</a></router-link>
<br><br><br><br><br><br>
<a href="#" style="color:red" class="list-group-item list-group-item-action bg-transparen second-text fw-bold" @click="logout"><i style="color:red" class="bi bi-box-arrow-right"></i><i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>se déconnecter</a>
</div>
 </v-navigation-drawer>
       <div id="page-content-wrapper" >
       <div class="container-fluid px-4">
          <div class="d-flex justify-center align-center h-100">
            <v-btn style="margin-right: 950px; margin-bottom: 20px;position: relative;background-color:black" @click.stop="drawer = !drawer">
                <i class="bi bi-list" style="color:white;font-size:30px"></i>
                <h5 style="color:white">ichraq assim</h5> 
                <header class="header" id="header">
                
        <div class="header_toggle"></div>
        <div class="header_img"> <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-user-image-179582665.jpg" alt=""> </div>
    
    </header>
    

 </v-btn>
  </div>  
  <br><br><br>
<h3 class="cr">Liste des voitures</h3>
<br>

<router-link :to="{name: 'AddCar'}" class="custom-link" style="color:white">  <v-row class="my-custom-class" justify="center"><button class="main-btn"> Ajouter voiture <i class="fas fa-shopping-basket ps-3"></i></button></v-row></router-link>

<br><br>
<table class="table" align="center" style="display: table;
  margin: auto;width:80%;margin-right: 80px;height=20px;border: 2px solid white;background-color:black;opacity:80%">
      <thead>
    <tr>
      <th scope="col" style="color : white">image</th>
       <th scope="col" style="color : white">Type de voiture</th>
        <th scope="col" style="color : white">Type de moteur</th>
      <th scope="col" style="color : white">Marque</th>
      <th scope="col" style="color : white">prix</th>
      <th scope="col" style="color : white">disponibilite</th>
      <th scope="col" style="color : white">numero de chassis</th>
      <th scope="col" style="color : white">options</th>
    </tr>
  </thead>
  <tbody>
  
    <tr v-for="item in items" :key="item.id" >
        
        <td><img :src="`http://localhost:8000/storage/images/${item.path}`" class="l" ></td>
        <td style="color : white" ><b>{{ item.typevoiture  }}</b></td>
        <td style="color : white" ><b>{{  item.typemoteur }}</b></td>
        <td style="color : white" ><b>{{  item.marque  }}</b></td>
        <td style="color : white"><b>{{ item.Prix }}</b></td>
        <td style="color : white"><b>{{ item.z }}</b></td>
        <td style="color : white"><b>{{ item.numero_chassis }}</b></td>
        <td >
        <button type="button" class="btn" @click="deleteCar(item.id)"> <v-btn variant="flat" color="error"> <i class="bi bi-trash3-fill"></i>Delete</v-btn></button>
        <router-link :to="{name: 'EditCar' , params:{id:item.id}}" style="color:white"> <v-btn variant="flat" color="white"><i class="bi bi-pencil-square"></i>Edit</v-btn></router-link>
        
        </td>
      </tr>
  </tbody>
</table>
<br>

 <div class="text-center">
   <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style="display:block">
   <i class="bi bi-chevron-left" style="color:red;font-weight:600;font-size:19px"></i><div class="btn-group me-2" role="group" aria-label="First group">
       <router-link :to="{name:'AdminDashboard'}" style="color:black"><v-btn>1</v-btn></router-link>
   </div>
   <div class="btn-group me-2" role="group" aria-label="Second group">
       <router-link :to="{name:'voitures'}" style="color:black"><v-btn>2</v-btn></router-link>
   </div>
   <div class="btn-group" role="group" aria-label="Third group">
       <router-link :to="{name:'Cars'}" style="color:black"><v-btn>3</v-btn></router-link>
   </div><i class="bi bi-chevron-right" style="color:red;font-size:19px"></i>
   </div>
      
</div>

</div>

          </div>
          
          
        
      </v-layout>
    </v-card>

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
              drawer: null,
        }
    },
      
  
     created(){
         this.getCars();
     },
     methods:{
     
        async getCars(){
             try {
                 const response = await axios.get('http://127.0.0.1:8000/api/c');
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
     
         async  logout() {
         localStorage.removeItem('token');
            this.$router.push('/me');
          
       
}
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
.header{
          width: 100%;
          height: 40px;
          position: fixed;
         
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          
          z-index: var(--z-fixed);
          transition: .5s
          }
 .header_toggle{
    color: var(--first-color);
    font-size:20px;
    cursor: pointer;
    
    padding:90px
}
.header_img{
width: 35px;
height: 35px;
display: flex;
 justify-content: center;
 border-radius: 50%;
  overflow: hidden
}
.header_img img{
width: 40px
 }
#wrapper{
    overflow-x: hidden;
   background-color: white;
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
    
  background-size: cover;
  height: 812px;

    background-image: url('https://wallpapercrafter.com/desktop/119635-Mazda-RX-Vision-concept-cars-car-vehicle-red-cars.jpg');
     background-repeat: no-repeat;
 
  background-position: center center;
}
    

.l{
    width: 80%;
    height: 55px;
    
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
    color: black;
    background-color: white;

}
#navbarDropdown{
    font-size: 18px;
    color: white;
}
.list-group-item.active{
    background-color: transparent;
    color:var(--main-text-color);
    font-weight: bold;
    border: none;
}
.cr{
    color: white;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 40px;
    
}
 .main-btn{
     display: inline-block;
     padding: 0.625rem 1.875rem;
     line-height: 1rem;
     background-color: white;
    
     color: #950101;
     font-size: 20px;
     font-weight: 600;
     text-transform: capitalize;
     border-radius: 2rem;
     box-shadow: 0px 2px 10px -1px white;
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
<style>
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
   background-color: white;
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
    
  background-size: cover;
  height: 812px;

    background-image: url('https://wallpapercrafter.com/desktop/119635-Mazda-RX-Vision-concept-cars-car-vehicle-red-cars.jpg');
     background-repeat: no-repeat;
 
  background-position: center center;
}
    

.l{
    width: 80%;
    height: 55px;
    
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
    color: black;
    background-color: white;

}
#navbarDropdown{
    font-size: 18px;
    color: white;
}
.list-group-item.active{
    background-color: transparent;
    color:var(--main-text-color);
    font-weight: bold;
    border: none;
}
.cr{
    color: white;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 40px;
    
}
 .main-btn{
     display: inline-block;
     padding: 0.625rem 1.875rem;
     line-height: 1rem;
     background-color: white;
    
     color: #950101;
     font-size: 20px;
     font-weight: 600;
     text-transform: capitalize;
     border-radius: 2rem;
     box-shadow: 0px 2px 10px -1px white;
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

