<template>
    <div>
        <div ng-app="bootstrpConf">
 
       <nav class="navbar navbar-expand-lg navbar-light bgnav fixed-top" id="mainNav">
    <div class="container">
        <img src="../assets/img/utkala_logo1.webp" class="mr-1"/>
      <a class="navbar-brand" href="#page-top" style="font-size:15px; color: orange;">UTKALA GHANA ASSOCIATION</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#specialIni'">Special Initiatives</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#staff'">Our Staff</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#events">Events</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#news">News/Announcements</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        <!-- jumbotron -->
        <header id="home" class="top-hero jumbotron-fluid p-b-3 bg-faded">
            <div class="container animated fadeInUp">
            <h1 class="display-2">Welcome to Utkala Ghana Association</h1>
            <p class="lead m-t-1">In Unity, We Prosper</p>
            <p class="lead m-t-1 m-b-2">Support Our Community Help us build our temple in Accra! Any donation amount will go a long way</p>
            <button  class="btn btn-lg btn-warning m-t-1" data-target="#signup_form_modal">DONATE</button>
            <!-- <button type="button" class="btn btn-lg btn-dark m-t-1" v-scroll-to="'#speakers'">Learn More</button> -->
            </div>
        </header>

        <section id="specialIni" class="banner speakers p-y-3">
            <div class="wrapper">
            <h2 class="m-b-2 display-5 text-uppercase">SPECIAL INITIATIVES</h2>
            
            </div>
        </section>
        
        <section id="staff" class="banner learn p-y-3">
            <Staff />
        </section>
        
        <div id="gallery" class="bg-light p-y-3">
            <Carousel />
        </div>

        <div id="news" class="bg-light p-y-3">
            <News />
        </div>
       
       
       <footer class="bg-light py-5">
            <div class="container">
              <div class="small text-center text-muted">&copy; 2019 by Utkala Association Ghana</div>
            </div>
      </footer>
        </div>   
    </div>
</template>

<script>
import Staff from '@/components/Staff.vue'
import Carousel from '@/components/Carousel.vue'
import News from '@/components/News.vue'
export default {
    components: {
      Staff,
      Carousel,
      News
    }
}
</script>

<style scoped lang="scss">
    $color-white: #fff;
    $color-antiwhite: #EDF2F4;
    $color-coolgray: #8D99AE;
    $color-gunmetal: #2B2D42;
    $color-imperialred: #EF233C;
    $color-candyred: #D90429;
    @mixin bp-sm {
      @media only screen and (max-width: 768px) {
        @content;
      }
    }

html {
  font-size: 14px;
}

.animated {
  animation-duration: 500ms;
}

.btn {
  border-radius: 2px;
}

.btn.btn-danger {
  border-color: $color-candyred;
  background-color: $color-imperialred;
}

.btn.btn-primary {
  border-color: $color-gunmetal;
  background-color: $color-gunmetal;
}

.btn.btn-default:hover {
  background-color: #fafafa;
}

.top-hero {
  background-color: #fafafa;
  background-image: linear-gradient(rgba($color-gunmetal, .75), rgba($color-gunmetal, .75)), url('../assets/img/pic1.jpg');
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  // min-height: 800px;
  height: 100vh;
  padding-top: 125px;
  
  
  display: flex;
  align-items: center;
  
  h1 {
    // color: $color-candyred;
    color: rgb(146, 101, 19);
    text-shadow: 0 1px 1px rgba(0, 0, 0, .5);
    font-weight: bold;
    text-transform: uppercase;
    width: 50%;
    letter-spacing: -1px;
    line-height: .9;
  }
  p {
    color: $color-antiwhite;
  }
  @include bp-sm {
    min-height: 400px;
    padding-top: 50px;
    h1 {
      font-size: 36px;
      margin-top: 50px;
    }
  }
}



.banner {
  background-position: center;
  background-size: cover;
  // background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // min-height: 400px;
  // height: 100vh;
  
  .wrapper {
    text-align: center;
  }
  
  @include bp-sm {
    min-height: 400px;
    h1,
    h2 {
      font-size: 20px;
    }
  }
  &.speakers {
    background-color: $color-candyred;
  }
  &.speakers {
    background-image: linear-gradient(rgba($color-candyred, .45), rgba($color-candyred, .45)), url("https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?dpr=1&auto=compress,format&fit=crop&w=1199&h=764&q=80&cs=tinysrgb&crop=&bg=");
  }
  
}


.bgnav{
  background-color: rgba(240, 255, 255, 0.555);
}

.nav-link {
  font-weight: bolder;
}
</style>