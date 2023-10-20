<template>
    <div>
      <div class="page-wrapper">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-12">
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
                    <form class="theme-form" @submit.prevent="">
                      <h4>{{ $t("Create Your Password") }}</h4>
                      <div class="form-group">
                        <label class="col-form-label">{{ $t("New Password") }}</label>
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
                      <div class="form-group">
                        <label class="col-form-label">Retype Password</label>
                        <input
                          class="form-control"
                          type="password"
                          name="login[password]"
                          required=""
                          placeholder="*********"
                        />
                      </div>
                      <div class="form-group mb-0">
                        <button class="btn btn-primary btn-block">{{ $t("Done") }}</button>
                      </div>
                      <p class="mt-4 mb-0">
                        {{ $t("Don't have account") }}?
                        <router-link class="ms-2" tag="a" to="dang-ky">
                          {{ $t("Create Account") }}
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
    </div>
  </template>
  
  <script setup>

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        // login to
        navigateAuthenticatedTo: '/profile',
    },
})

  const { locale, t } = useI18n();
  const active = ref(true);
  const show = () => !active.value;
  </script>
  