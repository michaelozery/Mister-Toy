<template>
  <nav class="AppNav">
    <v-navigation-drawer v-model="drawerCopy"
    app 
    class="secondary darken-3">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: ["drawer"],
  data() {
    return {
      drawerCopy: null,
      links: [
        {
          icon: "homepage",
          text: "Homepage",
          route: "/"
        },
        {
          icon: "store",
          text: "Store",
          route: "/toy"
        }
      ]
    };
  },
  // created() {
  //     this.drawerCopy = this.drawer

  // },
  watch: {
    drawer(before) {
      this.drawerCopy = before;
    }
  }
};
</script>