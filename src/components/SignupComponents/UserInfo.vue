<template>
    <div>
            <!-- <div class="row justify-content-center mx-5 my-5">
                <div class="col-xs-6 mr-5">
                    <div v-if="localurl">
                        <div class="avatar-icon-wrapper avatar-icon-xl">
                            <div class="avatar-icon"><img :src="localurl"
                                    alt=""></div>
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
                        <button class="btn btnFile mt-2">Add Profile Photo</button>
                        <input class="form-control my-form" name="myfile" type="file"  id="file" accept="image/*" ref="file" @change="userProfileImage">
                    </div>                
                </div>
            </div> -->   
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
                                    <button class="btn btn-primary" @click="toCompanyInfo">Next</button>
                                </div>
                            </div>
                        </div>
                        
                    </card>
                </div>
                <div class="col-lg mt-lg-9 px-lg-5">
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
import BaseInput from '@/components/SignupComponents/BaseInput.vue'
import Card from '@/components/SignupComponents/Card.vue'

export default {
    data() {
        return {
            localurl: '',
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
             errInpMessages: {
                companyName: null,
                phoneNumber: null,
                webSite: null,
                companyAddress: null,
            }
        }
    },
    
    components: {
        BaseInput,
        Card
    },
    methods: {
        userProfileImage(e) {
            this.userinfo.image = this.$refs.file.files[0]; 
            const file = e.target.files[0];
            // console.log(file)
            this.localurl = URL.createObjectURL(file);
            // console.log(this.url) //path to the local pic
            var fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            // fileReader.onload = (e) => {
            // let image = e.target.result
            // console.log(image)
            // } //this is for base 64 string
        },
        toCompanyInfo() {
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
            //save owner to store
            this.$store.dispatch('setUserInfo', owner)
            this.$router.push('/register/companyinfo')
            
        }

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