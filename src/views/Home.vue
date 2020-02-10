<template>
  <div class="home">
  </div>
      <h1 class="text-center">This is my Vue Starter</h1>
      <div class="row">
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
   }
 },

 
}
</script>
