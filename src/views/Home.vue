<template>
  <div class="home">

    <div class="container">
    <h1 >This is my Vue Starter</h1>
      <div class="row justify-content-center">
        <div class="col-sm-4">
          <button @click="snotify()" class="btn btn-primary">Test Snotify</button>
        </div>
        <div class="col-sm-4">
          <button @click="modal()" class="btn btn-info">Test Modal</button>  
        </div>
        <div class="col-sm-4">
          <button @click="something()" class="btn btn-success">Test Something</button>  
        </div>
      </div>
    </div>
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
