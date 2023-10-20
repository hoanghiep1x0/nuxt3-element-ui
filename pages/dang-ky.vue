<template>
    <div>
      <div class="container-fluid p-0">
        <div class="row m-0">
          <div
            class="col-xl-5 b-center bg-size"
            :style="{ backgroundImage: 'url(' + img + ')' }"
            style="
              background-size: cover;
              background-position: center center;
              display: block;
            "
          >
            <img
              class="bg-img-cover bg-center"
              src="~/assets/images/login/3.jpg"
              alt="looginpage"
              style="display: none"
            />
          </div>
          <div class="col-xl-7 p-0">
            <div class="login-card">
              <div>
                <div>
                  <a class="logo">
                    <img
                      class="img-fluid for-light"
                      src="~/assets/images/logo/logo.png"
                      alt="looginpage"
                    />
                    <img
                      class="img-fluid for-dark"
                      src="~/assets/images/logo/logo_dark.png"
                      alt="looginpage"
                    />
                  </a>
                </div>
                <div class="login-main">
                  <form class="theme-form">
                    <h4>{{ $t("Create your account") }}</h4>
                    <p>{{ $t("Enter your personal details to create account") }}</p>
                    <!-- <div class="form-group">
                      <label class="col-form-label pt-0">Your Name</label>
                      <div class="row g-2">
                        <div class="col-6">
                          <input
                            class="form-control"
                            type="text"
                            required=""
                            placeholder="First name"
                          />
                        </div>
                        <div class="col-6">
                          <input
                            class="form-control"
                            type="text"
                            required=""
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div> -->
                    <div class="form-group">
                      <label class="col-form-label">{{ $t("Email Address") }}</label>
                      <input
                        class="form-control"
                        type="email"
                        required=""
                        placeholder="Test@gmail.com"
                      />
                    </div>
                    <div class="form-group">
                      <label class="col-form-label">{{ $t("Password") }}</label>
                      <div class="form-input position-relative">
                        <input
                          class="form-control"
                          :type="active ? 'password' : 'text'"
                          name="login[password]"
                          required=""
                          placeholder="*********"
                        />
                        <div class="show-hide">
                          <span :class="active ? 'show' : 'hide'" @click.prevent="show">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group mb-0">
                      <div class="checkbox p-0">
                        <p class="m-0">
                          <input id="checkbox1" type="checkbox" />
                          <label class="mx-2" for="checkbox1"
                            >{{ $t("Agree with")
                            }}<a class="ms-2" href="#">{{ $t("Privacy Policy") }}</a></label
                          >
                        </p>
                      </div>
                      <button class="btn btn-primary btn-block">
                        {{ $t("Create Account") }}
                      </button>
                    </div>
                    <!-- <h6 class="text-muted mt-4 or">Or signup with</h6>
                    <div class="social mt-4">
                      <div class="btn-showcase">
                        <a class="btn btn-light" href="#">
                          <vue-feather class="txt-linkedin" type="linkedin"></vue-feather>
                          LinkedIn </a
                        ><a class="btn btn-light" href="#">
                          <vue-feather class="txt-twitter" type="twitter"></vue-feather
                          >twitter </a
                        ><a class="btn btn-light" href="#">
                          <vue-feather class="txt-fb" type="facebook"></vue-feather>facebook
                        </a>
                      </div>
                    </div> -->
                    <p class="mt-4 mb-0">
                      {{ $t("Already have an account") }}?
                      <router-link class="ms-2" tag="a" to="dang-nhap">
                        {{ $t("Login") }}
                      </router-link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import img from "~/assets/images/login/3.jpg";
  definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        // login to
        navigateAuthenticatedTo: '/',
    },
})

  const active = ref(true);
  
  const show = () => {
    active.value = !active.value;
  };
  </script>
  