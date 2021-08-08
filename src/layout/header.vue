<template>
    <div class="header">
        <b-navbar-toggle class="header__btn-side-menu" target="side-menu"> 
            <font-awesome-icon :icon="['fas', 'bars']"/>
        </b-navbar-toggle>

        <h3 class="header__title"> {{ title }} </h3>
        <b-sidebar id="side-menu" class="header__navbar" no-header backdrop shadow>
            <div class="header__navbar-background">
                <img class="navbar__logo" src="@/assets/logo.png" alt="Logo">
                <div class="navbar__user">
                    <img class="navbar__avatar" src="@/assets/avatar.jpg" alt="Avatar">
                    <p class="navbar__title"> Bienvenido </p>
                    <p class="navbar__text"> {{ user.name }} {{ user.lastName }} </p>
                </div>
            </div>
            <b-nav vertical class="px-3 py-2">
                <template v-for="(item,index) in menuItems">
                    <b-nav-item v-if="!item.children" :to="{name: item.routeName}" :key="index">
                        {{ item.title }}
                    </b-nav-item>
                    <b-nav-item-dropdown v-else :key="index">
                        <template v-slot:button-content>
                            <font-awesome-icon :icon="item.icon"/> {{ item.title }}
                        </template>
                        <template v-for="(children,index) in item.children">
                            <b-dropdown-item :to="{name: children.routeName}" :key="index"> {{children.title}} </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>
                </template>
                <b-nav-item v-if="isLoggedIn" @click="signOut()"> 
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']"/> Cerrar sesión
                </b-nav-item>
            </b-nav>
        </b-sidebar>
    </div>
</template>

<script src="./header.js"></script>
<style scoped lang="scss">
    @import './header.scss';
</style>