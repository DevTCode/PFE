<template>
  <div>
    <label for="car-brand">Marque de voiture :</label>
    <select id="car-brand" v-model="selectedBrand">
      <option value="">Sélectionnez une marque</option>
      <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.libelle }}</option>
    </select>
    
  <v-card
    class="mx-auto"
    width="256"
  >
    <v-layout>
      <v-navigation-drawer permanent absolute>
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@google.com"
          >
            <template v-slot:append>
              <v-btn
                size="small"
                variant="text"
                icon="mdi-menu-down"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 354px;"></v-main>
    </v-layout>
  </v-card>

  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      brands: [],
      selectedBrand: ''
    };
  },
  created() {
    this.getCarBrands();
  },
  methods: {
    async getCarBrands() {
      const response = await axios.get('http://localhost:8000/api/car-brands');
      this.brands = response.data;
    }
  }
};
</script>
