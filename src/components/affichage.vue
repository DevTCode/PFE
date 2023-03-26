<template>
  <div class="container" style="background: #f3f5f2; height: 100%;">
    <div class="row pept-4">
      <div class="col-6 px-2" v-for="item in items" :key="item.id">
        <div class="px-2 pb-2 pt-3 bg-white w-100 ab-3" style="border-radius: 15px;">
          <v-img :src="item.image" alt="" style="height: 200px; object-fit: cover; width:50%;"></v-img>
          <p class="text-center at-2 ab-e" style="font-weight: bold; font-size: 110%;"> N°{{item.id}}</p>
          <p class="text-center at-1 ab-e" style="font-weight: 400;font-size: 110%;">{{item.typevoiture}}</p>
          <p class="text-center at-1 ab-e" style="font-weight: 400;font-size: 110%;">{{item.typemoteur}}</p>
          <p class="text-center at-1 ab-e" style="font-weight: 400;font-size: 110%;">{{item.marque}}</p>

          <button class="btn btn-success at-2" style="width: 100%; border-radius: 12px;">
            <i class="fa fa-shopping-bag wr-2" aria-hidden="true"></i>
            voiture à louer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  id: "1",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.gettm();
  },
  methods: {
    async gettm() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/z");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>