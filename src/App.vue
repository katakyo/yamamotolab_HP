<template>
  <v-app>
   <header>
      <v-app-bar app color = "white">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-img
        class="mx-2"
        src="@/assets/Logo1.png"
        max-height="48"
        max-width="100"
        contain
      ></v-img>
        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
            <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item v-for="(menuItem, index) in menuItems" :key="index">
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
       </v-navigation-drawer>
    </header>
  </v-app>
</template>
 
<script>
import constants from './styles/common/constants' // 今回追加
 
export default {
  data () {
    return {
      drawer: false,
      menuItems: constants.menuItems // 今回追加
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import "./styles/common/_mixin.scss";
.v-avatar {
  width:100%;
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display: none;
  @include display_pc {
    display: block !important;
  }
}
</style>