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
                                        <img class="img-fluid for-light" src="~/assets/images/logo/logo.png"
                                            alt="looginpage" />
                                        <img class="img-fluid for-dark" src="~/assets/images/logo/logo_dark.png"
                                            alt="looginpage" />
                                    </a>
                                </div>
                                <div class="login-main">
                                    <form class="theme-form" @submit.prevent="">
                                        <h4>{{ $t("Reset Your Password") }}</h4>
                                        <div class="form-group">
                                            <label class="col-form-label">{{
                                                $t("Enter Your Email Address")
                                            }}</label>
                                            <div class="row">
                                                <div class="col-12 col-sm-12">
                                                    <input class="form-control mb-1" type="email" value="" />
                                                </div>
                                                <div class="col-12">
                                                    <div class="text">
                                                        <button class="btn btn-primary btn-block m-t-10">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-4">
                                            <span class="reset-password-link">{{ $t("If don't receive OTP")
                                            }}<a class="btn-link text-danger px-2" href="#">
                                                    {{ $t("Resend") }}</a></span>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-form-label pt-0">{{ $t("Enter OTP") }}</label>
                                            <div class="row">
                                                <div class="col">
                                                    <input class="form-control text-center opt-text" type="text" value="00"
                                                        maxlength="2" />
                                                </div>
                                                <div class="col">
                                                    <input class="form-control text-center opt-text" type="text" value="00"
                                                        maxlength="2" />
                                                </div>
                                                <div class="col">
                                                    <input class="form-control text-center opt-text" type="text" value="00"
                                                        maxlength="2" />
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="mt-4">{{ $t("Create Your Password") }}</h6>
                                        <div class="form-group">
                                            <label class="col-form-label">{{ $t("New Password") }}</label>
                                            <div class="form-input position-relative">
                                                <div class="form-input position-relative">
                                                    <input class="form-control" :type="active ? 'password' : 'text'"
                                                        name="login[password]" required="" placeholder="*********" />
                                                    <div class="show-hide">
                                                        <span :class="active ? 'show' : 'hide'" @click.prevent="show">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-form-label">{{ $t("Retype Password") }}</label>
                                            <input class="form-control" type="password" name="login[password]" required=""
                                                placeholder="*********" />
                                        </div>
                                        <div class="form-group mb-0">
                                            <!-- <div class="checkbox p-0">
                          <input id="checkbox1" type="checkbox" />
                          <label class="text-muted" for="checkbox1"
                            >Remember password</label
                          >
                        </div> -->
                                            <button class="btn btn-primary btn-block w-100">
                                                {{ $t("Done") }}
                                            </button>
                                        </div>
                                        <p class="mt-4 mb-0 text-center">
                                            {{ $t("Already have an password") }}?
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
    </div>
</template>
  
<script setup>
// import { useI18n, useLocalePath } from "#imports";
// const { locale, t } = useI18n();

definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        // login to
        navigateAuthenticatedTo: '/',
    },
})
const active = ref(true);
const show = () => !active.value;
</script>