<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <!-- // a condition to render a global loader based on the value of getLoading.loadingState -->
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['getLoading'])
  }

}
</script>
