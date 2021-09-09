<template>
    <div class="login__wrapper">
        <img src="@/assets/logo.png" alt="Logo">
        <h2 class="login__title"> Iniciar sesión </h2>
        <b-form class="login__form">
            <b-form-group id="user" label="Usuario" label-for="user-input">
                <b-form-input id="user-input" v-model="username" type="text" placeholder="Escriba su usuario" required></b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Contraseña" label-for="password-input">
                <b-form-input id="password-input" v-model="password" type="password" placeholder="Escriba su contraseña" required></b-form-input>
            </b-form-group>
            <b-button class="btn" block @click="login()"> Ingresar </b-button>
        </b-form>
    </div>
</template>

<script src="./login.js"></script>
<style scoped lang="scss">
    @import '@/styles/pages/login.scss';
</style>