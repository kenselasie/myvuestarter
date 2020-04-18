<template>  
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <div class="col-lg p-0">
                    <form>
                    <card class="work mt-5">
                        <div class="px-lg-3">
                            <h2 class="display-5 py-4">
                            Let's get your personal information.
                            </h2>
                            <div class="form-group">
                                <label for="fname">First Name:</label>
                                <input type="text" class="form-control" id="fname" placeholder="Enter First Name" v-model="userinfo.fname">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <label for="lname">Last Name:</label>
                                    <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" v-model="userinfo.lname">
                                </div>
                                <div class="form-group col-6">
                                    <label for="othernames">Other Names:</label>
                                    <input type="text" class="form-control" id="othernames" placeholder="Enter Other Names" v-model="userinfo.othernames">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" v-model="userinfo.email">
                            </div>
                            <div class="form-group">
                                <label for="phoneno">Phone number</label>
                                <div class="row">
                                    <div class="col-4">
                                        <select name="phone-code" id="phone-code" class="form-control">
                                        <option value="+233">+233 GH</option>
                                        <option value="+234">+234 NGN</option>
                                        </select>
                                    </div>
                                    <div class="col-8">
                                        <input type="number" class="form-control" id="phoneno" v-model="userinfo.phoneno">
                                    </div>
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="location">Your Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Your Location" v-model="userinfo.location">
                            </div>

                            <div class="form-group">
                            <label for="pass">Password</label>
                                <input type="password" class="form-control" id="pass" placeholder="Password" v-model="userinfo.password">
                            </div>

                            <!-- <small class="py-2" >By clicking "Submit" I agree that Serenity or its representatives may contact me by email, phone, or SMS at the email address or number I provide, including for marketing purposes and that my information will be used in accordance with Serenity's <a href="#">Privacy Policy</a>.</small> -->

                            <div class="row justify-content-center py-4">
                                <div class="col-xs-12">
                                    <button class="btn btn-primary" @click.prevent="unmaskCompanyInfo">Continue...</button>
                                </div>
                            </div>
                        </div>
                    </card>
                    </form>                        
                </div>
                <div class="col-lg mt-lg-9 px-lg-5">
                    <div class="container">
                        <div class="col-lg p-0 mt-5">
                            <form>
                            <fieldset id="myFieldset" :disabled="toggleDisabled">
                            <card class="work mt-5">
                                <div class="px-lg-3">
                                    <h2 class="display-5 py-4">
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
                                        <div class="form-group col-12">
                                            <label for="desc">Short Description Of Company</label>
                                            <input type="text" class="form-control" id="desc" placeholder="Description" v-model="companyinfo.description">
                                        </div>
                                    </div>
                                    
                                    <div class="row justify-content-around py-5">
                                        <div class="col-xs-12">
                                            <button class="btn btn-primary" @click.prevent="signup">Sign up</button>
                                        </div>
                                    </div>

                                    <!-- <small class="py-2" >By clicking "Submit" I agree that Serenity or its representatives may contact me by email, phone, or SMS at the email address or number I provide, including for marketing purposes and that my information will be used in accordance with Serenity's <a href="#">Privacy Policy</a>.</small> -->

                                </div>       
                            </card>
                            </fieldset>
                            </form>
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
import BaseInput from '@/components/SignupComponents/BaseInput.vue'
import Card from '@/components/SignupComponents/Card.vue'

export default {
    data() {
        return {
            toggleDisabled: 'disabled',
            userinfo: {
                image: '',
                fname: '',
                lname: '',
                othernames: '',
                email: '',
                phoneno: '',
                location: '',
                password: '',
                isadmin: '1'
            },
            companyinfo: {
                cimage: '',
                cname: '',
                cemail: '',
                cphoneno: '',
                location: {
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
        unmaskCompanyInfo() {
            //check for validity of this field

            
            
            //unmask company profile
            document.getElementById("myFieldset").disabled = false
        },

        signup() {
            let owner = {
                logo: '',
                email: this.userinfo.email,
                firstname: this.userinfo.fname,
                lastname: this.userinfo.lname,
                username: this.userinfo.fname +' '+ this.userinfo.lname,
                othernames: this.userinfo.othernames,
                phone: this.userinfo.phoneno,
                location: this.userinfo.location,
                password: this.userinfo.password,
                isadmin: this.userinfo.isadmin,
            }

            let payload = {
                Owner: owner,
                comp_name: this.companyinfo.cname,
                comp_email: this.companyinfo.cemail,
                description: this.companyinfo.description,
                location: this.companyinfo.location,
                isSetup: false
            }

            console.log(payload)

            http()
            .post("/company/", payload)
            .then(({ data }) => {
                alert('sucess') 
                this.$router.push('/login')

            })
            .catch(err => {
                this.$snotify.success("Signed up successfully", 'Success', {
                    timeout: 2000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    position: "centerTop"
                })
                this.$router.push('/login')

            })
        }

    }
}
</script>

<style scoped>
    .card {
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