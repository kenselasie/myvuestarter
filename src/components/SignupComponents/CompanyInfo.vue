<template>
    <div>
                <!-- <div class="row justify-content-center mx-5 my-5">
                    <div class="col-xs-6 mr-5">
                        <div v-if="url">
                            <div class="avatar-icon-wrapper avatar-icon-xl">
                                <div class="avatar-icon">
                                    <img
                                        :src="url"
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
                            <button class="btn btnFile mt-2">Add Company Photo</button>
                            <input class="form-control my-form" name="myfile" type="file"  id="file" accept="image/*" ref="file" @change="companyInfoImage">
                        </div>                
                    </div>
                </div> -->

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
                            Now let's get your company information.
                            </h2>
                            <div class="form-group">
                                <label for="cname">Company Name:</label>
                                <input type="text" class="form-control" id="cname" placeholder="Enter Company Name" v-model="companyinfo.cname">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <label for="email">Company Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter Company Email" v-model="companyinfo.cemail">
                                </div>
                                
                                <div class="form-group col-6">
                                    <label for="phoneno">Company Phone number</label>
                                    <div class="row">
                                        <div class="col-4">
                                            <select name="phone-code" id="phone-code" class="form-control">
                                            <option value="+233">+233 GH</option>
                                            <option value="+234">+234 NGN</option>
                                            </select>
                                        </div>
                                        <div class="col-8">
                                        <input type="number" class="form-control" placeholder="Enter Company Number" id="phoneno" v-model="companyinfo.cphoneno">    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="location">Company Adress</label>
                                    <input type="text" class="form-control" id="location" placeholder="Enter Company Location" v-model="companyinfo.location.address">
                                </div>
                            
                                <div class="form-group col-md-6">
                                    <label for="role">Select Your Region</label>
                                    <select class="form-control" v-model="companyinfo.location.region">
                                        <option value="" selected hidden disabled>-- select --</option>                        
                                        <option value="Greater Accra">Greater Accra</option>
                                        <option value="Volta">Volta</option>
                                        <option value="Oti">Oti</option>
                                        <option value="Ashanti">Ashanti</option>
                                        <option value="Bono">Bono</option>
                                        <option value="Bono East">Bono East</option>
                                        <option value="Ahafo">Ahafo</option>
                                        <option value="Western">Western</option>
                                        <option value="Western North">Western North</option>
                                        <option value="Eastern">Eastern</option>
                                        <option value="Central">Central</option>
                                        <option value="Northern">Northern</option>
                                        <option value="Savannah">Savannah</option>
                                        <option value="North East">North East</option>
                                        <option value="Upper East">Upper East</option>
                                        <option value="Upper West">Upper West</option>s                          
                                    </select> 
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6 mt-4">
                                   
                                    <b-button pill variant="outline-primary" @click="getLocation">
                                        <span class="btn-wrapper--label">Get Current Location</span>
                                        <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="location-arrow"/>
                                        </span>
                                    </b-button>
                                </div>
                                

                                <div class="form-group col-md-6">
                                    <label for="desc">Short Description Of Company</label>
                                    <input type="text" class="form-control" id="desc" placeholder="Description" v-model="companyinfo.description">
                                </div>
                            </div>
                            
                            <div class="row justify-content-around py-5">
                                <div class="col-xs-6">
                                    <button class="btn btn-secondary" @click="$router.push('/register/userinfo')">Previous</button>
                                </div>
                                <div class="col-xs-6">
                                    <button class="btn btn-primary" @click="toLastSteps">Next</button>
                                </div>
                            </div>

                            <!-- <small class="py-2" >By clicking "Submit" I agree that Serenity or its representatives may contact me by email, phone, or SMS at the email address or number I provide, including for marketing purposes and that my information will be used in accordance with Serenity's <a href="#">Privacy Policy</a>.</small> -->

                        </div>
                        
                    </card>
                </div>
                <div class="col-lg mt-lg-9 px-lg-5 mt-5">
                    <div class="container">
                        <div class="row justify-content-center">
                        <div class="col-1 p-1"><i class="fa fa-arrow-right"></i></div>
                        <div class="col-10 ">
                            <h2>Save loads of time on expensing</h2>
                            <p style="font-size: 18px;">No receipts or headaches. Put everyone on one team account.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-1 p-1"><i class="fa fa-arrow-right"></i></div>
                        <div class="col-10 ">
                            <h2>Arrange and pay for others’ rides</h2>
                            <p style="font-size: 18px;">Coordinate easily from the web – even if riders don’t have a smartphone.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-1 p-1"><i class="fa fa-arrow-right"></i></div>
                        <div class="col-10 ">
                            <h2>Increase foot traffic</h2>
                            <p style="font-size: 18px;">Use vouchers to create marketing campaigns that bring people to your door.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-1"></div>
                        <div class="col-10 ">
                            <p style="font-size: 18px;"><a href="#">Have questions?</a></p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
import http from '@/services/Base.js' 
import {mapGetters} from 'vuex'
import Card from '@/components/SignupComponents/Card.vue'

export default {
    data() {
        return {
            url: '',
            companyinfo: {
                cimage: '',
                cname: '',
                cemail: '',
                cphoneno: '',
                location: {
                    lng: '',
                    lat: '',
                    region: '',
                    address: ''
                },
                description: ''
            }
        }
    },
    components: {
        Card
    },
    methods: {
        companyInfoImage(e) {
            this.companyinfo.cimage = this.$refs.file.files[0]; 
            const file = e.target.files[0];
            // console.log(file)
            this.url = URL.createObjectURL(file);
            // console.log(this.url) //path to the local pic
            var fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            // fileReader.onload = (e) => {
            // let image = e.target.result
            // console.log(image)
            // } //this is for base 64 string
        },
        toLastSteps() {
            this.$store.dispatch('setCompanyInfo', this.companyinfo)
            this.$router.push('/register/laststeps')

        },
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else { 
                console.log("Geolocation is not supported by this browser.")
            }
        },
         showPosition(position) {                  
            this.companyinfo.location.lat = position.coords.latitude
            this.companyinfo.location.lng = position.coords.longitude
        },

    }
}
</script>

<style scoped>
    .card {
        /* background: transparent; */
        opacity: 0.8;
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