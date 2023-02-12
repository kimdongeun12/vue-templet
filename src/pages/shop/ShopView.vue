<template>
  <v-container>
    <h2 class="text-center pt-8">동네가게</h2>
    <v-list three-line>
      <v-list-item v-for="(item, index) in itemLists" :key="index">
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: 'MainView',
    data () {
      return {
        itemLists: [
          {
            avatar: 'https://cdn.pixabay.com/photo/2018/09/10/09/21/haejangguk-3666599_960_720.jpg',
            title: '감자탕',
            subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          {
            avatar: 'https://cdn.pixabay.com/photo/2017/01/06/16/46/sushi-1958247_960_720.jpg',
            title: '은행골',
            subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          {
            avatar: 'https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935__340.jpg',
            title: '네네치킨',
            subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          {
            avatar: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__340.jpg',
            title: '도미노피자',
            subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          {
            avatar: 'https://media.istockphoto.com/id/844466876/ko/%EC%82%AC%EC%A7%84/%EB%B9%A0%EB%A5%B8-%ED%83%84%EC%88%98%ED%99%94%EB%AC%BC-%EC%8B%9D%ED%92%88.jpg?b=1&s=170667a&w=0&k=20&c=fa0AYj3uvMgOILuZoY-9IZG5MG5Csn0sIZYt-wpjs0o=',
            title: '맘스터치',
            subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
        ],
      }
    },
    mounted() {

    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
.v-list-item {
  & + .v-list-item {
    border-top: 1px solid #bdbdbd;
  }
}
</style>