<template>


  <body id="f">
  <br><br><br>
    <section class="form">
    <div class="container">
    <div class="row no-gutters" style="width:1300px">
    <div class="col-lg-5">
    <v-img :src="require('../assets/imm.jpg')" contain class="h" style="width:320px"></v-img>
    </div>
    <div class="col-lg-7">
    <v-img
          :src="require('../assets/lgo.png')" contain height="30%" width="26%" class="n"></v-img>
          
    <v-form @submit.prevent="submit" >
  
  
      <v-col cols="auto">
        <h4 style="color:white;font-weight:600;font-size:30px">image</h4>
      </v-col>
      
   
    
    
        <div class="container" >
        <form @submit.prevent="submit">
        <v-file-input label="File input" v-on:change="onChange" @change="previewImage" variant="filled" prepend-icon="mdi-camera" style="color:white"></v-file-input>
        
        <br><br>
      <img :src="imageUrl" v-if="imageUrl" style="width:200px">
         </form>
       </div>
   <br>
    
    <v-btn class="btn1 mt-3 mb-5"> <b class="b">Modifier</b></v-btn>
    
    </v-form>
    </div>
    </div>
    </div>
  
    </section>
  
  </body>  
</template>

<script>
import axios from 'axios';
export default {
    name: "EditImage.vue",
    data(){
        return{
         imageUrl: '',
    }

},
methods: {
    previewImage(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
      onChange:function(e){
         var images =  e.target.files[0];
         console.log("selected file", e.target.files[0])
         var fd = new FormData();
         fd.append('image', images);
         axios.post(`http://localhost:8000/api/ima/${this.$route.params.id}`,fd).then(res=>{
         console.log(res.data)
         this.image=res.data;
         
         
      })
     },
     
    }
}
</script>


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
     background-image: url('https://wallpapercave.com/wp/wp6071422.jpg');
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
    color: #950101;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 40px;
    
}
 .main-btn{
     display: inline-block;
     padding: 0.625rem 1.875rem;
     line-height: 1rem;
     background-color: white;
    
     color: black;
     font-size: 20px;
     font-weight: 600;
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


