<template>
  <div>
    <div class="thumb-wrap">
      <VueSlickCarousel :arrows="true" :dots="true">
        <div v-for="(item , idx) in itemInfo.images" :key="idx">
          <v-img
            :lazy-src="item"
            height="400"
            :src="item"
          ></v-img>
        </div>
      </VueSlickCarousel>
    </div>
    <v-container>
      <v-row class="pb-4" no-gutters>
        <v-avatar color="primary" size="56">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        <div class="d-flex flex-column justify-center text-start pl-2">
          <p class="mb-0">{{ itemInfo.user.nickname }}</p>
          <p class="mb-0">{{ itemInfo.user.location }}</p>
        </div>
      </v-row>
      <hr style="background-color: #bdbdbd"/>
      <div class="pt-4">
        <div class="text-subtitle-1" color="#000000">{{ itemInfo.title }}</div>
        <div class="text-caption">{{ itemInfo.category }}</div>
        <div class="text-subtitle-2 pt-1" color="#000000">{{ itemInfo.price }}원</div>
        <div class="pt-1">{{ itemInfo.contents }}</div>
        <v-row class="pt-2" no-gutters>
          <v-col class="text-truncate font-12" cols="3">
            <span>관심</span><span>{{ itemInfo.like }}</span>
          </v-col>
          <v-col class="text-truncate" cols="3">
            <span>채팅</span><span>{{ itemInfo.chat }}</span>
          </v-col>
        </v-row>
        <div class="text-center pt-4">
          <v-btn rounded outlined color="#ff8a3d" width="100%" x-large>
            구매하기
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'DealDetail',
  components: { VueSlickCarousel },
  data() {
    return {
      itemInfo: {
        id: 'item01',
        user: {
          nickname : '국민',
          location : '김포시 운양동'
        },
        images: ['https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_960_720.jpg'],
        title: '아이맥 m1 Apple 2021 아이맥 24',
        category: '디지털기기',
        price: 1200000,
        contents: `풀박스 a급 m1 8core`,
        like: 24,
        chat: 10
      },
    }
  },
  mounted() {
    // 여기서 axios로 데이터를 호출하고
    // data에 담아주기
  }
}

</script>

<style lang="scss" scoped>
.thumb-wrap {
  ::v-deep { // 호출한 라이브러리 스타일 먹이기위해서 추가
    .slick-dots {
      bottom: 16px;
      padding-left: 0;
    }

  }
}
.item-info {
  border-top: 1px solid #bdbdbd;
}
</style>