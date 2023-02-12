<template>
  <v-app>
    <div id="app">
      <v-app-bar app>
        <v-toolbar-title>KB마켓</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary right>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              KB마켓
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item :to="item.path" v-for="(item , index) in menuList" :key="index">
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>


      <v-main>
        <router-view/>
      </v-main>
    </div>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer : false,
        menuList : [
          { path : '/deal' , name : '중고거래'},
          { path: '/shop', name: '동네가게' },
        ]
      }
    }
  }
</script>

<style lang="scss">
/* @import '~@/assets/scss/index'; */
</style>
