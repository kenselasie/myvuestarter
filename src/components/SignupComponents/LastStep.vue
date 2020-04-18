<template>
    <div>
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
                    <card class="work mt-5">
                        <div class="px-lg-3">
                            <h2 class="display-3 py-4">
                            Please crosscheck and the click sign up button
                            </h2>
                            <div class="form-group">
                                <label for="fname">First Name:</label>
                                <input type="text" class="form-control" id="fname" placeholder="Enter First Name">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <label for="lname">Last Name:</label>
                                    <input type="text" class="form-control" id="lname" placeholder="Enter Last Name">
                                </div>
                                <div class="form-group col-6">
                                    <label for="othernames">Other Names:</label>
                                    <input type="text" class="form-control" id="othernames" placeholder="Enter Other Names">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email">
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
                                        <input type="number" class="form-control" id="phoneno" >
                                    </div>
                                </div>
                            </div>
                             <div class="form-group">
                                <label for="location">Your Location</label>
                                <input type="text" class="form-control" id="location" placeholder="Your Location" >
                            </div>

                            <div class="form-group">
                            <label for="pass">Password</label>
                                <input type="password" class="form-control" id="pass" placeholder="Password">
                            </div>

                            <!-- <small class="py-2" >By clicking "Submit" I agree that Serenity or its representatives may contact me by email, phone, or SMS at the email address or number I provide, including for marketing purposes and that my information will be used in accordance with Serenity's <a href="#">Privacy Policy</a>.</small> -->

                            <div class="row justify-content-center py-4">
                                <div class="col-xs-12">
                                    <button class="btn btn-primary" @click="toCompanyInfo">Next</button>
                                </div>
                            </div>
                        </div>
                        
                    </card>
                </div>
                <div class="col-lg mt-lg-9 px-lg-5">
                    <div class="container">
                        <card class="work mt-5">
                        <div class="px-lg-3">
                            <h2 class="display-3 py-4">
                            Now let's get your company information.
                            </h2>
                            <div class="form-group">
                                <label for="cname">Company Name:</label>
                                <input type="text" class="form-control" id="cname" placeholder="Enter Company Name">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-6">
                                    <label for="email">Company Email:</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter Company Email">
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
                                        <input type="number" class="form-control" placeholder="Enter Company Number" id="phoneno">    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="location">Company Adress</label>
                                    <input type="text" class="form-control" id="location" placeholder="Enter Company Location">
                                </div>
                            
                                <div class="form-group col-md-6">
                                    <label for="role">Select Your Region</label>
                                    <select class="form-control" >
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
                                    <input type="text" class="form-control" id="desc" placeholder="Description">
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
                </div>
            </div>
        </div>
    </div>

        <button class="btn btn-first" @click="signup">Sign</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import http from '@/services/Base.js' 
import Card from '@/components/SignupComponents/Card.vue'

export default {
    computed: {
        ...mapGetters(['getSetupInfo', 'getCompanyInfo', 'getUserInfo'])
    },

    components: {
        Card
    },
    created() {
        console.log(this.getSetupInfo)
        console.log(this.getCompanyInfo)
        console.log(this.getUserInfo)
    },
    methods: {
        signup(){
           let payload = {
              Owner: this.getUserInfo,
              comp_name: this.getCompanyInfo.cname,
              comp_email: this.getCompanyInfo.cemail,
              description: this.getCompanyInfo.description,
              location: this.getCompanyInfo.location,
              comp_logo: this.getCompanyInfo.cimage,
              typeOfBus: this.getSetupInfo.typeOfBus,
              isSetup: false
            //   foodOptions: this.getSetupInfo.foodMenu,
            //   working_days: this.getSetupInfo.workingdays,
            //   working_hours: this.getSetupInfo.workinghours,
            //   deliveryOption:this.getSetupInfo.deliveryOption, 
            //   schoolLocality: this.getSetupInfo.schoolLocality, 
            //   printingOptions: this.getSetupInfo.printingOptions, 
            //   laundryOptions: this.getSetupInfo.laundryOptions,
            //   searchtags: this.getSetupInfo.searchtags
           }
            console.log(payload)

            http()
            .post("/company/", payload)
            .then(({ data }) => {
                alert(data) 
            })
            .catch(err => {
               alert(err)
            })
            
      }
    }
}
</script>

<style>

</style>