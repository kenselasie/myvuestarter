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
        <button @click="sweetModal()" class="btn btn-success">Sweet Modal</button>
      </div>
      <div class="col-xs-3">
        <button @click="pushNotifcation()" class="btn btn-danger">Push Notification</button>
      </div>
    </div>

    <ConfirmModal :action="snotify" modalname="testModal" msg="This is a test modal" />
  </div>
</template>

<script>

import Swal from 'sweetalert2/dist/sweetalert2.js'
import ConfirmModal from "../components/ConfirmModal.vue";

export default {
  components: {
    ConfirmModal
  },
  methods: {
    snotify() {
      this.$snotify.info("Snotify is perfect!", "Testing!!", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        position: "centerTop"
      });

      this.$modal.hide("testModal");
    },

    modal() {
      this.$modal.show("testModal");
    },
    sweetModal() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },

    pushNotifcation() {
      if (!Notification) {
        alert("Hello aasdsddsds!");
        return;
      }

      if (Notification.permission !== "granted")
        Notification.requestPermission();

      var notification = new Notification("Madakoraa", {
        icon: "../assets/img/madakoraa/144x144.png",
        body: "This is a testing of the push notification!"
      });

      notification.onclick = function() {
        window.open("https://twitter.com/mehedih_");
      };
    }
  }
};
</script>
