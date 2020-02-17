<template>
<body id="page-top">
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bgnav fixed-top" id="mainNav">
    <div class="container-fluid">
      <img class="navbar-brand m-0" height="100px" src="../assets/img/utkala_logo1.webp" />
      <a
        class="navbar-brand"
        href="#page-top"
        style="font-size:20px; color: orange;"
      >UTKALA GHANA ASSOCIATION</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Founding Members</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">News/Announcements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Masthead -->
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <transition
            appear
            name="custom-classes-transition"
            enter-active-class="animated slideInUp slow"
          >
            <h1 class="text-white font-weight-bold">Welcome to Utkala Ghana Association</h1>
          </transition>
          <hr class="divider my-4" />
        </div>
        <div class="col-lg-8 align-self-baseline" style="color: orange;">
          <h2 class="text-white-75 font-weight-light mb-4">In Unity, We Prosper</h2>
          <div class="mb-4">
            <h3>Support Our Community Help us build our temple in Accra! Any donation amount will go a long way</h3>
          </div>
          <button
            @click="donate"
            class="btn btn-lg py-3 px-5"
            style="background-color: #ED932F;"
          >DONATE</button>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <!-- <transition appear name="custom-classes-transition" enter-active-class="animated bounceInDown"> -->
  <section class="page-section bg-dark" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="text-white mt-0">About UAG</h2>
          <hr class="divider light my-4" />
          <h3
            class="text-white-50 mb-4"
          >We are a small group belonging to the eastern state of Odisha in India who are here in Ghana for different reasons but have a common bond that gives us strength to uphold the unique Odia culture.</h3>
          <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Read more</a>
        </div>
      </div>
    </div>
  </section>
  <!-- </transition> -->

  <!-- Services Section -->
  <section class="page-section" id="services">
    <div class="container">
      <h2 class="text-center mt-0">At Your Service</h2>
      <hr class="divider my-4" />
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="ri-building-line ri-4x text-success mb-4"></i>
            <h3 class="h4 mb-2">Sturdy Themes</h3>
            <p class="text-muted mb-0">this is a paragraph, a nice paragraph, a nice paragraph</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="ri-building-line ri-4x text-success mb-4"></i>
            <h3 class="h4 mb-2">Up to Date</h3>
            <p class="text-muted mb-0">a nice paragraph</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="ri-building-line ri-4x text-success mb-4"></i>
            <h3 class="h4 mb-2">Ready to Publish</h3>
            <p class="text-muted mb-0">this is a paragraph, a nice paragraph, a nice paragraph</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="ri-building-line ri-4x text-success mb-4"></i>
            <h3 class="h4 mb-2">Made with Love</h3>
            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">Let's Get In Touch!</h2>
          <hr class="divider my-4" />
          <p class="text-muted mb-5">Get in touch with Utkala Ghana Association today!</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="fname">First Name</label>
              <input type="email" class="form-control" id="fname" />
            </div>
            <div class="form-group col-md-6">
              <label for="lname">Last Name</label>
              <input type="text" class="form-control" id="lname" />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-success">Send Message</button>
          </div>
        </form>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i class="ri-phone-line ri-4x mb-3 text-muted"></i>
          <div>+233 026 431 4342</div>
        </div>
        <div class="col-lg-4 mr-auto text-center">
          <i class="ri-mail-line ri-4x mb-3 text-muted"></i>
          <a class="d-block" href="mailto:kennedyadzoyi@gmail.com">info@uaghana.com</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-light py-5">
    <div class="container">
      <div class="small text-center text-muted">&copy; 2019 by Utkala Association Ghana</div>
    </div>
  </footer>
</body>
</template>

<script>
export default {
  methods: {
    donate() {
      window.open("https://www.interpayafrica.com/openmerchant/utkalaghana");
    }
  }
};
</script>
<style scoped>
nav {
  width: 100vw;
}
header.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 72px);
  background: linear-gradient(
      to bottom,
      rgba(212, 211, 211, 0.082) 0%,
      rgba(75, 75, 75, 0.521) 100%
    ),
    url("../assets/img/picc2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

header.masthead h1 {
  font-size: 2.25rem;
}

@media (min-width: 992px) {
  header.masthead {
    height: 100vh;
    min-height: 40rem;
    padding-top: 72px;
    padding-bottom: 0;
  }
  header.masthead p {
    font-size: 1.15rem;
  }
  header.masthead h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1200px) {
  header.masthead h1 {
    font-size: 3.5rem;
  }
}

.page-section {
  padding: 8rem 0;
}

hr.divider {
  max-width: 3.25rem;
  border-width: 0.2rem;
  border-color: #28a745;
}
.bgnav {
  background-color: #09403a;
}

.nav-link {
  font-weight: bolder;
}
</style>