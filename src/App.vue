<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
  //  setTimeout(() => {
    //  window.onload = function(){
      document.getElementById('app').style.opacity = 0;
      // }
  //  }, 5000)
 }
}
</script>
