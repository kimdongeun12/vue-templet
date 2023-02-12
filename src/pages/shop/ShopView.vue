<template>
  <v-container>
    <h2 class="text-center pt-8">중고거래 인기매물</h2>
    <v-row no-gutters class="pt-4">
      <v-col class="pa-2" cols="6">
        <v-card class="item-wrap">
          <v-img height="200px" src="https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_640.jpg"></v-img>
          
          <v-card-title>
            <div class="text-truncate">Cafe BadilicoCafe BadilicoCafe Badilico</div>
          </v-card-title>
          
          <v-card-text>
            <div>가격</div>
            <div class="text-truncate line2">지역</div>
            <v-row no-gutters>
              <v-col class="text-truncate font-12" cols="6">
                <span>관심</span><span>24</span>
              </v-col>
              <v-col class="text-truncate" cols="6">
                <span>채팅</span><span>24</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pa-2" cols="6">
        <v-card class="item-wrap">
          <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          
          <v-card-title>
            <div class="text-truncate">Cafe BadilicoCafe BadilicoCafe Badilico</div>
          </v-card-title>
          
          <v-card-text>
            <div>가격</div>
            <div class="text-truncate line2">지역</div>
            <v-row no-gutters >
              <v-col class="text-truncate" cols="6">
                <span>관심</span><span>24</span>
              </v-col>
              <v-col class="text-truncate" cols="6">
                <span>채팅</span><span>24</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MainView',
    mounted() {

    },
    methods: {
      
    }
  }
</script>
