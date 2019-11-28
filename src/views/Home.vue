<template>
  <div class="home">
    <h1>This is my Vue Starter</h1>
    <p>
     <button @click="snotify()" class="btn btn-primary">Test Snotify</button>
    </p>
    <p>
     <button @click="modal()" class="btn btn-info">Test Modal</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
 
 methods: {
   snotify() {
     this.$snotify.info("Snotify is perfect!", 'Testing!!', {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        position: "centerTop"
    })
   },

   modal() {
    //  bootbox.alert("Your message here…")
   }
 }
}
</script>
