<template>
  <nav
    class="z-10 fixed bottom-0 w-screen px-4 py-2 flex flex-row justify-center items-baseline bg-white"
    style="box-shadow: 0 -8px 24px 0 rgba(0,0,0,0.1)"
  >
    <div class="navbar-items w-full max-w-2xl flex flex-row justify-center items-center">
      <NavbarItem
        v-for="(item, index) in navbarItems"
        :key="index"
        :title="item.title"
        :to="item.to"
        :exact="item.exact"
        class="mx-3 sm:mx-5"
      >
        <template #icon>
          <FontAwesomeIcon :icon="item.icon" />
        </template>
      </NavbarItem>
    </div>
  </nav>
</template>

<script>
import {
  faHome,
  faBell,
  faChartLine,
  faNewspaper,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

import NavbarItem from './NavbarItem'

export default {
  components: {
    NavbarItem
  },
  data () {
    return {
      navbarItems: [
        {
          title: 'Home',
          to: '/',
          exact: true,
          icon: faHome
        },
        {
          title: 'Pesan',
          to: '/notifications',
          icon: faBell
        },
        {
          title: 'Data',
          to: '/data',
          icon: faChartLine
        },
        {
          title: 'Berita',
          to: '/articles?tab=jabar',
          icon: faNewspaper
        },
        {
          title: 'FAQ',
          to: '/faq',
          icon: faQuestionCircle
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/* purgecss start ignore */
.navbar-items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
/* purgecss end ignore */
</style>
