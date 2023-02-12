<template>
  <v-container>
    <h2 class="text-center pt-8">중고거래 인기매물</h2>
    <v-row no-gutters class="pt-4">
      <v-col class="pa-2" cols="6" v-for="(item) in itemList" :key="item.id">
        <v-card class="item-wrap" :to="`/deal/${item.id}`">
          <v-img height="200px" :src="item.thumnail"></v-img>
          
          <v-card-title>
            <div class="text-truncate">{{ item.title }}</div>
          </v-card-title>
          
          <v-card-text>
            <div>{{ item.price }}원</div>
            <div class="text-truncate line2">{{ item.user.location }}</div>
            <v-row no-gutters>
              <v-col class="text-truncate font-12" cols="6">
                <span>관심</span><span>{{ item.like }}</span>
              </v-col>
              <v-col class="text-truncate" cols="6">
                <span>채팅</span><span>{{ item.chat }}</span>
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
    name: 'DealList',
    data () {
      return {
        itemList : [
          {
            id : 'item01',
            thumnail: 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg',
            title: '아이맥 m1 Apple 2021 아이맥 24',
            price: 1200000,
            user: {
              nickname: '국민',
              location: '김포시 운양동'
            },
            like : 24,
            chat : 10
          },
          {
            id : 'item02',
            thumnail: 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg',
            title: '아이맥 m1 Apple 2021 아이맥 24',
            price: 1200000,
            user: {
              nickname: '국민',
              location: '김포시 운양동'
            },
            like : 24,
            chat : 10
          },
        ]
      }
    },
    mounted() {

    },
    methods: {
      
    }
  }
</script>
