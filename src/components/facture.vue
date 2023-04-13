<template>
  
</template>
<script>
import axios from 'axios';
export default{
  
    data(){
         return {
             idloc:'',
             idcar:'',
             total:'',
         }
    },
    created(){
         this.lc();
         this.calcul();
         this.saveFact();
        
     },
     methods:{
         async lc(){
  const l = `http://localhost:8000/api/lc/${this.$route.params.id}`;
  const response = await axios.get(l);
  return response.data[0].car_id;
  
},

async calcul(){
    
    
    
    const ap = `http://localhost:8000/api/calcul/${await this.getidloc()}/${await this.lc()}`;
    const response3 = await axios.get(ap);
    
    return response3.data[0].total;
    
},
async getidloc(){
    const b = this.$route.params.id;
    
    return b;
    
},

        async saveFact(){
             try {
                 const idcar = await this.lc();
                 const total = await this.calcul();
                 const idloc = await this.getidloc();
                 console.log(idcar)
                 console.log(idloc)
                 console.log(total)
                 await axios.post('http://127.0.0.1:8000/api/res',
                {
                 idloc,
                 idcar,
                 total,
                 });
                  this.$router.push('/ai');
                
             } catch (error) {
                 console.log(error);
             }
         } ,
          
    
},

}

</script>
