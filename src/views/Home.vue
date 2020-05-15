<template>
  <div class="container">
      <h1 class="text-center">This is my Vue Starter</h1>
      <div class="row justify-content-between">
            <div class="col-xs-3">
              <button @click="snotify()" class="btn btn-primary">Test Snotify</button>
            </div>
            <div class="col-xs-3">
              <button @click="modal()" class="btn btn-info">Test Modal</button>  
            </div>
            <div class="col-xs-3">
              <button @click="something()" class="btn btn-success">Test Something</button>  
            </div>
            <div class="col-xs-3">
              <button @click="pushNotifcation()" class="btn btn-danger">Push Notification</button>  
            </div>
        </div>

    <ConfirmModal :action="snotify" modalname="testModal" msg="This is a test modal"/>
  </div>

</template>

<script>
import ConfirmModal from '../components/ConfirmModal.vue'

export default {
 components: {
   ConfirmModal
 },
 methods: {
   snotify() {
     this.$snotify.info("Snotify is perfect!", 'Testing!!', {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        position: "centerTop"
    })

    this.$modal.hide('testModal')

   },

   modal() {
    this.$modal.show('testModal')
   },

  pushNotifcation() {
    if (!Notification) {
        alert('Hello aasdsddsds!'); 
        return;
      }

      if (Notification.permission !== "granted")
        Notification.requestPermission();

      var notification = new Notification('Madakoraa', {
        icon: '../assets/img/madakoraa/144x144.png',
        body: "This is a testing of the push notification!",
      });

      notification.onclick = function () {
      window.open("https://twitter.com/mehedih_");      
    };
  }
  

 },

 
}
</script>
