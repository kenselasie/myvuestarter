<template>
    <div>
        <modal :name="modalname" :width="350" :height="170">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-xs-12">
                <p class="mx-3 my-3" style="font-size: 20px;">{{msg}}</p>
                <div class="text-center">
                    <button @click="action" class="btn btn-warning">YES</button>
                    <button @click="closeModal" class="btn">No</button>
                </div>
                </div>
            </div>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        modalname: String,
        msg: String,
        action: Function
    },
    methods: {
        closeModal() {
            this.$modal.hide(this.modalname);
        }
    }
}
</script>