<template>
<div>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" style="color: white" href="#">Madakoraa for Business</a>
                    <div>
                        <ul class="nav navbar-nav ml-lg-auto">
                            <li class="nav-item">
                                <router-link class="nav-link " to="#">
                                    Contact us
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/login">
                                    Sign in
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container mb-8">
            <div class="row align-items-center">
                <div class="col-lg p-0 mt-5">
                    <card class="work mt-5">
                        <div class="px-lg-3">
                            <h2 class="display-3 py-4">
                            Now you can setup your company
                            </h2>
                            <div class="form-row">                    
                                <div class="form-group col-md-12">
                                    <label for="role">Type Of Business</label>
                                    <select class="form-control" v-model="setupinfo.typeOfBus">
                                        <option value="" selected hidden disabled>-- select --</option>                        
                                        <option value="Restaurant">Restaurant</option>
                                        <option value="Pharmacy">Pharmacy</option>
                                        <option value="Laundry">Laundry</option>
                                        <option value="Printer">Printer</option>
                                    </select> 
                                </div> 
                            </div>

                            <div class="form-row">            
                                <b-form-group class="col-md-6">
                                    <label>Choose your Working Days:</label>
                                    <!-- <div class="text-center"> -->
                                        <b-form-checkbox @change="toggleAll"> Select All</b-form-checkbox> <br>
                                    <!-- </div> -->

                                <b-form-checkbox-group
                                    id="wdays"
                                    v-model="setupinfo.workingdays"
                                    :options="days"
                                    name="wdays"
                                    class="ml-4"
                                    stacked
                                ></b-form-checkbox-group>
                                </b-form-group>
                                <b-form-group class="col-md-6">
                                    <label>Do you offer delivery services?</label>
                                    <b-form-checkbox class="my-3" v-model="setupinfo.deliveryOption" name="check-button" switch>
                                        Check this if you do
                                    </b-form-checkbox>
                                </b-form-group>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="stime">Working Hours - Start Time:</label>
                                    <b-form-timepicker v-model="setupinfo.workinghours.stime" locale="en"></b-form-timepicker>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="etime">Working Hours - End Time</label>
                                    <b-form-timepicker v-model="setupinfo.workinghours.etime" locale="en"></b-form-timepicker>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <div>
                                        <label for="tags-basic">Please enter all search tags for your company</label>
                                        <b-form-tags input-id="tags-basic" v-model="setupinfo.searchtags" class="mb-2"></b-form-tags>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div v-if="setupinfo.typeOfBus == 'Restaurant'">
                                    <div class="text-center">
                                        <h5>Setting Up Your Restaurant</h5>
                                        <small>NB: You can skip this part and setup completely after login</small>
                                    </div> 
                                    <div class="row no-gutters">
                                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2" v-for="(food, i) in foodMenuLocally" :key="i">
                                            <div class="card" >
                                            <img class="card-img-top w-full" height="149.16px" :src="food.url" alt="food">
                                            <div class="card-block text-center">
                                                <h4 class="card-title cut-text">{{food.foodName}}</h4>
                                                <p class="card-text">
                                                <b>GHS {{food.foodPrice}}</b>
                                                </p>
                                            </div>
                                            </div>
                                        </div> 
                                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2" style="margin: auto;">
                                            <div class="card menucard px-3" v-b-modal="'addfood'" v-b-tooltip.hover title="Add Food Menu">
                                                <!-- <font-awesome-icon class="card-img-top w-full" style="height:149.16px;" icon="plus-circle"/> -->
                                            <img class="card-img-top w-full" height="149.16px" src="../../assets/img/foodmenu2.svg" icon="plus-circle" alt="food image">
                                            <div class="card-block text-center">
                                                <h4 class="card-title cut-text">Click to add Menu</h4>
                                                <!-- <p class="card-text">
                                                <b>Click</b>
                                                </p> -->
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <b-modal id="addfood" :hide-footer="true" :hide-header="true" centered>
                                        <div class="card shadow-none border-0">
                                            <div class="card-header bg-white pb-1">
                                                <div class="text-center m-2">
                                                    <h3>Add Food Menu</h3>
                                                </div>
                                            </div>
                                            <div class="card-body bg-secondary rounded px-lg-5 py-lg-4">
                                                <form role="form">
                                                    <div class="row justify-content-center mx-5 my-4">
                                                        <div class="col-xs-6 mr-5">
                                                            <div v-if="selectedFoodURL">
                                                                <div class="avatar-icon-wrapper avatar-icon-xl">
                                                                    <div class="avatar-icon">
                                                                        <img
                                                                            :src="selectedFoodURL"
                                                                            alt="">
                                                                            </div>
                                                                </div>
                                                            </div>
                                                            <div v-else>
                                                                <div class="avatar-icon-wrapper avatar-initials avatar-icon-xl">
                                                                <div class="avatar-icon text-white bg-warning">
                                                                    img
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <div class="upload-btn-wrapper">
                                                                <button class="btn btnFile">Add Photo</button>
                                                                <input class="form-control my-form" name="myfile" type="file"  id="file" accept="image/*" ref="file" @change="onFileChange">
                                                            </div>                
                                                        </div>
                                                    </div>
                                                    <b-form-group>
                                                        <b-input-group>
                                                            <b-form-input placeholder="Enter Food Name" v-model="foodMenuItem.foodName"></b-form-input>
                                                            <b-input-group-text slot="prepend">
                                                                <font-awesome-icon class="mx-auto" icon="user"/>
                                                            </b-input-group-text>
                                                        </b-input-group>
                                                    </b-form-group>
                                                    <b-form-group>
                                                        <b-input-group>
                                                            <b-form-input type="number" v-model="foodMenuItem.foodPrice" placeholder="Enter Price In GHS"></b-form-input>
                                                            <b-input-group-text slot="prepend">
                                                                <font-awesome-icon class="mx-auto" icon="phone-alt"/>
                                                            </b-input-group-text>
                                                        </b-input-group>
                                                    </b-form-group>
                                                    <div class="text-center">
                                                        <b-button variant="info" @click="addFoodMenu" class="my-4">Add Food Menu</b-button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </b-modal>                        
                                </div>
                                <div v-if="setupinfo.typeOfBus == 'Pharmacy'">
                                    <div class="text-center">
                                        <h5>Setting Up Your Pharmacy</h5>
                                        <small>NB: You can skip this part and setup completely after login</small>
                                    </div> 
                                </div>
                                
                                <div v-if="setupinfo.typeOfBus == 'Printer'">
                                    <div class="text-center mb-3">
                                        <h5>Setting Up Your Printing Company</h5>
                                        <small>NB: You can skip this part and setup completely after login</small>
                                    </div> 

                                        <div class="form-row">            
                                    
                                    <b-form-group class="col-md-6">
                                        <label>Select what your company does:</label>
                                        <!-- <div class="text-center"> -->
                                            <b-form-checkbox @change="togglePrint"> Select All</b-form-checkbox> <br>
                                        <!-- </div> -->

                                    <b-form-checkbox-group
                                        id="print"
                                        v-model="setupinfo.printingOptions"
                                        :options="printTypes"
                                        name="print"
                                        class="ml-4"
                                        stacked
                                    ></b-form-checkbox-group>
                                    </b-form-group>
                                    
                                    <b-form-group class="col-md-6">
                                        <label>Are you closer to a school, toggle if you are, this will help us advertise your services more?</label>
                                        <b-form-checkbox class="my-3" v-model="setupinfo.schoolLocality" name="check-button" switch>
                                            Check this if you are
                                        </b-form-checkbox>
                                    </b-form-group>
                                </div>

                                </div>
                                <div v-if="setupinfo.typeOfBus == 'Laundry'">
                                    <div class="text-center">
                                        <h5>Setting Up Your Laundry</h5>
                                        <small>NB: You can skip this part and setup completely after login</small>
                                        <b-modal id="addClothItem" :hide-footer="true" :hide-header="true" centered>
                                            <div class="card shadow-none border-0">
                                                <div class="card-header bg-white pb-1">
                                                    <div class="text-center m-2">
                                                        <h3>Add Type of Item</h3>
                                                    </div>
                                                </div>
                                                <div class="card-body bg-secondary rounded px-lg-5 py-lg-4">
                                                    <form role="form">
                                                        <b-form-group>
                                                            <b-input-group>
                                                                <b-form-input placeholder="Enter Cloth Name" v-model="clothItem.name"></b-form-input>
                                                                <b-input-group-text slot="prepend">
                                                                    <font-awesome-icon class="mx-auto" icon="user"/>
                                                                </b-input-group-text>
                                                            </b-input-group>
                                                        </b-form-group>
                                                        <b-form-group>
                                                            <b-input-group>
                                                                <b-form-input type="number" v-model="clothItem.price" placeholder="Enter Price In GHS"></b-form-input>
                                                                <b-input-group-text slot="prepend">
                                                                    <font-awesome-icon class="mx-auto" icon="phone-alt"/>
                                                                </b-input-group-text>
                                                            </b-input-group>
                                                        </b-form-group>
                                                        <div class="text-center">
                                                            <b-button variant="info" @click="addClothItem" class="my-4">Add Item</b-button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </b-modal> 

                                        <div class="card-header--actions">            
                                            <a href="javascript:void(0)" class="btn btn-sm text-primary btn-link" v-b-modal="'addClothItem'" style="font-size: 2rem;" v-b-tooltip.hover title="Add Cloth Item">
                                            <font-awesome-icon icon="plus-circle"/>
                                            <button class="btn">Add Cloth Item</button>
                                            </a>
                                        </div>
                                        <div class="row align-items-center no-gutters">
                                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 p-2" v-for="(cloth, i) in setupinfo.laundryOptions" :key="i">
                                                <div class="card px-3" style="height: 80px;">
                                                <div class="card-block text-center">
                                                    <h4 class="card-title cut-text">{{cloth.name}}</h4>
                                                    <p class="card-text">
                                                    <b>GHS {{cloth.price}}</b>
                                                    </p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                    <div class="row justify-content-around py-5">
                        <div class="col-xs-6">
                            <button class="btn btn-secondary" @click="$router.push('/register/companyinfo')">Previous</button>
                        </div>
                        <div class="col-xs-6">
                            <button class="btn btn-primary" @click="toLastSteps">Next</button>
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </div>
</div>
</div>

    </div>
</template>

<script>
import Card from '@/components/SignupComponents/Card.vue'

export default {
    data() {
        return {
            setupinfo: {
                typeOfBus: '',
                deliveryOption: false,
                schoolLocality: false,
                workingdays: [],
                workinghours: {},
                deliveryOption: '',
                foodMenu: [],
                printingOptions: [],
                laundryOptions: []
            },
            clothItem: {
                name: '',
                price: ''
            },
            foodMenuItem: {
                image: '',
                foodName: '',
                foodPrice: ''
            },
            days: ['Sundays', 'Monday', 'Tuesday', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'],
            printTypes: ['Digital Printing', 'Screen Printing', 'A4 Printing', 'A3 Printing', 'Flexography', 'Offset Printing'],
            selectedFoodURL: '',
            foodMenuLocally: []
        }
    },
    components: {
        Card
    },
    methods: {
        toLastSteps() {
            this.$store.dispatch('setSetupInfo', this.setupinfo)
            this.$router.push('/register/lastSteps')
        },
        onFileChange(e) {
            this.foodMenuItem.image = this.$refs.file.files[0]; 
            const file = e.target.files[0];
            // console.log(file)
            this.selectedFoodURL = URL.createObjectURL(file);
            // console.log(this.selectedFoodURL) //path to the local pic
            var fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            // fileReader.onload = (e) => {
            // let image = e.target.result
            // console.log(image)
            // } //this is for base 64 string
        },
        addFoodMenu() {
            let singleFoodMenu = new FormData()
            singleFoodMenu.append('image', this.foodMenuItem.image)
            // singleFoodMenu.append('foodName', this.foodMenuItem.foodName)
            // singleFoodMenu.append('fooPrice', this.foodMenuItem.foodPrice)

            //this is manipulation to push into an array to send to the backend
            this.setupinfo.foodMenu.push(singleFoodMenu)
            console.log(this.setupinfo.foodMenu)
            
           

            //this is the manipulation to display images for user
            this.foodMenuLocally.push({url: this.selectedFoodURL, foodName: this.foodMenuItem.foodName, foodPrice: this.foodMenuItem.foodPrice})
            // console.log(this.foodMenuLocally)

             this.foodMenuItem = {
                image: '',
                foodName: '',
                foodPrice: ''
            }
            this.selectedFoodURL = ''
            this.$bvModal.hide('addfood')
        },
        addClothItem() {
            this.setupinfo.laundryOptions.push(this.clothItem)

             this.clothItem = {
                name: '',
                price: ''
            }
            this.$bvModal.hide('addClothItem')

        },

        toggleAll(checked) {
            this.setupinfo.workingdays = checked ? this.days.slice() : []
        },

        togglePrint(checked) {
            console.log(checked)
            this.setupinfo.printingOptions = checked ? this.printTypes.slice() : []
        }
    }
}
</script>

<style scoped>
    .card {
        /* background: transparent; */
        opacity: 0.8;
    }
    .menucard{
        cursor: pointer;
    }
    .my-form {
        border: 0.5px solid black; 
        background-color: transparent; 
        width:80%;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .btnFile {
        border: 2px solid gray;
        color: gray;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }

    
</style>