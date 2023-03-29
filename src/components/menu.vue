<template>
<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100">  
<header>
<nav class="navbar navbar-expand-lg navigation-wrap">
  <div class="container">
    <a class="navbar-brand" href="#">
    <v-img
          :src="require('../assets/lgo.png')"
          
          contain
          height="90"
          width="90"
        class="nj"
        ></v-img>
        
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <!--span class="navbar-toggler-icon"></span>-->
      <i class="fas fa-stream navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
          <v-list-item-title class="nav-link">{{menu.title}}</v-list-item-title>
      </v-list-item>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</header>
    
<section class="main">
<div class="container-fluid px-0 top-banner">
<div class="container">

<div class="col-lg-5 col-md-6">
<h1>Welcome to <br> Our <span>Car Location </span> Service </h1>

<p>Voyagez à votre façon en choisissant parmi notre collection de voitures celle adaptée à vos besoins.</p>
<div class="mt-4">
<router-link :to="{name: 'CarList'}" class="custom-link">  <v-row class="my-custom-class"><button class="main-btn"> Get Started Now !<i class="fas fa-shopping-basket ps-3"></i></button></v-row></router-link>
</div>
</div>
</div>
</div>

</section>
</body>
</template>

<script>


export default {
    name:'menu',
    data() {
        return{
            menus:[
            {title:'Home',route:'me'},
            {title:'Service',route:'userMenu'},
            {title:'Space',route:'ae'},

            ]
        }
    },
}

</script>

<style scoped>


 :root{
     --primary-color:#950101;
     --secondry-color: #FF0000;
     --white-color: #fff;
     --text-color: #3E3636;
     
     --primary-front: 'Roboto','sans-serif';
     --secondry-text: 'Quicksand','sans serif';
 }
 body{
     font-family: var(--primary-font);
     font-size: 100%;
     font-weight: 400;
 }
 .navigation-wrap{
     position: fixed;
     width: 100%;
     left:0;
     z-index:1000;
     -webkit-transition:all 0.3s ease-out;
     transition:all 0.3 ease-out;

 }
 .nav-link{
     color: white;
     font-size: 0.9375rem;
     font-weight: 600;
     letter-spacing: 1px;
     text-transform: capitalize;
     
 }
 .nav-link:hover,
 .nav-link.active{
     color:#950101;
 }
 .navigation-wrap .nav-item{
     padding: 0 0.625rem;
     transition: all 0.3s linear;
 }
 .navbar-toggler:focus{
     outline:unset;
     border: unset;
     box-shadow:none;
 }
 
 .nj{
     
     border-radius: 100px;
    padding: 30px;
    
    
 }
 .custom-link{
     color: #000;
 }
 .top-banner{
     width:100%;
     background: url('http://cdn.shopify.com/s/files/1/0107/8955/2187/articles/how-to-keep-a-black-car-clean-the-ultimate-car-care-guide-821592_1024x1024.jpg?v=1661225494')no-repeat center;
     background-size: cover;
     padding: 16.875rem 0 9.375rem;
     height: 100vh;

 }

h1{
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 1px 0 6px #000;
}
 h1 span{
     color: #950101;
 }
 p{
     font-size: 15px;
     color: white;
     font-weight: 400;
     line-height: 1.75rem;
     letter-spacing: 1px;
 }
 .main-btn{
     display: inline-block;
     padding: 0.625rem 1.875rem;
     line-height: 1.5625rem;
     background-color: black;
     border: 0.1875rem solid #950101;
     color: white;
     font-size: 20px;
     font-weight: 600;
     text-transform: capitalize;
     border-radius: 0.5rem;
     box-shadow: 0px 2px 10px -1px rgb(0 0 0/ 19%);
     -webkit-transition: all .4s ease-out 0s;
     -o-transition: all .4s ease-out 0s;
     -moz-transition: all .4s ease-out 0s;
     transition: all .4s ease-out 0s;
 }
 .main-btn hover{
     background-color: transparent;
     color: #950101;
 }
 .nav-item{
     display: flex; 
     justify-content: center; 
     align-items: center;
 }
@media (max-width:991px){
    .text-content{
        width: 100%;
    }
    .navigation-wrap .navbar-brand img{
        height: 3.8125rem;
    }
    .navigation-wrap{
        text-align: center;
        background-color: #950101;
       
    }
    .navigation-wrap .nav-link{
        line-height: 1.875rem;
        color: black;
    }
     .navigation-wrap .nav-link{
        line-height: 1.875rem;
        color: black;
    }
    .top-banner{
        padding: 40% ;
    }
    
}
 </style>
