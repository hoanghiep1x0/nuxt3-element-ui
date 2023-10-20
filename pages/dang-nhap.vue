<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-5 b-center bg-size" :style="{ backgroundImage: 'url(' + img + ')' }"
                style="background-size: cover; background-position: center center; display: block">
                <img class="bg-img-cover bg-center" src="~/assets/images/login/3.jpg" alt="looginpage"
                    style="display: none" />
            </div>
            <div class="col-xl-7 p-0">
                <div class="login-card">
                    <div>
                        <div>
                            <a class="logo text-start">
                                <img class="img-fluid for-light" src="~/assets/images/logo/logo.png" alt="looginpage" />
                                <img class="img-fluid for-dark" src="~/assets/images/logo/logo_dark.png" alt="looginpage" />
                            </a>
                        </div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h4>{{ $t("Sign in to account") }}</h4>
                                <p>{{ $t("Enter your email & password to login") }}</p>
                                <div class="form-group">
                                    <label class="col-form-label">{{ $t("Email address") }}</label>
                                    <input class="form-control" type="email" required="" placeholder="Test@gmail.com" />
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">{{ $t("Password") }}</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" :type="active ? 'password' : 'text'"
                                            name="login[password]" required="" placeholder="*********" />
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
                                            <label for="checkbox1" class="px-2">
                                                {{ $t("Remember password") }}</label>
                                        </p>
                                    </div>

                                    <router-link to="quen-mat-khau" class="link">{{ $t("Forgot password") }}?</router-link>
                                    <div class="text mt-3">
                                        <router-link to="/">
                                            <button class="btn btn-primary btn-block">
                                                {{ $t("Sign in") }}
                                            </button>
                                        </router-link>
                                    </div>
                                </div>

                                <p class="mt-4 mb-0">
                                    {{ $t("Don't have account") }} ?
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
</template>
  
<script setup lang="ts">
import img from "~/assets/images/login/3.jpg";
import { useI18n, useLocalePath } from "#imports";

const { locale, t } = useI18n();


definePageMeta({
    layout: "auth",
    auth: {
        unauthenticatedOnly: true,
        // login to
        navigateAuthenticatedTo: '/profile',
    },
})

const active = ref(true);

const show = () => {
    active.value = !active.value;
};

const user = reactive({
    email: {
        value: "adminitrato@admin.com",
        errormsg: "",
    },
    password: {
        value: "test@123456",
        errormsg: "",
    },
});

const login = () => {
    if (!user.password.value || user.password.value.length < 7) {
        user.password.errormsg = "min length 7";
    } else {
        user.password.errormsg = "";
    }

    if (!user.email.value) {
        user.email.errormsg = "empty not allowed";
    } else if (!validEmail(user.email.value)) {
        user.email.errormsg = "Valid email required.";
    } else {
        user.email.errormsg = "";
    }
    if (
        (!user.email.errormsg &&
            !user.password.errormsg &&
            user.email.value != "test@admin.com") ||
        user.password.value != "test@123456"
    ) {
        alert("wrong credenstials");
    }
    if (
        !user.email.errormsg &&
        !user.password.errormsg &&
        user.email.value == "test@admin.com" &&
        user.password.value == "test@123456"
    ) {
        result = { email: user.email.value, password: user.password.value };

        // localStorage.setItem('User', JSON.stringify({ email: user.email.value, useer: true }))
        // logging = true
        // $router.push('/')
    }
};
const validEmail = function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
</script>
  