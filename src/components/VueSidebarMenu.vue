<template>
    <VuePerfectScrollbar >
        <sidebar-menu :menu="menu" />
    </VuePerfectScrollbar>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu"
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
  components: {
    SidebarMenu,
    VuePerfectScrollbar
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
        {
          title: "Charts",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              icon: "fa fa-chart-area",

              title: "Sub Link"
            },
             {
                href: "/",
                title: "Dashboard",
                icon: "fa fa-user"
            },
             {
                href: "/",
                title: "Dashboard",
                icon: "fa fa-user"
                },
          ]
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        }, {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },
         {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user"
        },

      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-sidebar-menu {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_rtl {}
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu .vsm--item.vsm--item_open {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link.vsm--link_active {}
.v-sidebar-menu .vsm--link.vsm--link_exact-active {}
.v-sidebar-menu .vsm--link.vsm--link_mobile-item {}
.v-sidebar-menu .vsm--link.vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link.vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--arrow.vsm--arrow_open {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--list {}
.v-sidebar-menu .vsm--dropdown>.vsm--list {}
.v-sidebar-menu .vsm--mobile-item {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {}
</style>