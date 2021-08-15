<template>
    <div class="header">
        <b-navbar-toggle class="header__hamburger" target="side-menu"> 
            <font-awesome-icon :icon="['fas', 'bars']"/>
        </b-navbar-toggle>
        <b-sidebar id="side-menu" class="sidebar" no-header backdrop shadow>
            <div class="sidebar__header">
                <img class="sidebar__logo" src="@/assets/logo.png" alt="Logo">
                <img class="sidebar__avatar" src="@/assets/avatar.jpg" alt="Avatar">
                <p class="sidebar__title"> Bienvenido </p>
                <p class="sidebar__user-name"> {{ user.name }} {{ user.lastName }} </p>
            </div>
            <b-nav vertical class="sidebar__navbar">
                <template v-for="(item,index) in menuItems">
                    <b-nav-item v-if="!item.children" :to="{name: item.routeName}" :key="index">
                        {{ item.title }}
                    </b-nav-item>
                    <b-nav-item-dropdown v-else :key="index">
                        <template v-slot:button-content>
                            <font-awesome-icon :icon="item.icon"/> {{ item.title }}
                        </template>
                        <template v-for="(children,index) in item.children">
                            <b-dropdown-item :to="{ name: children.routeName }" :key="index"> {{ children.title }} </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>
                </template>
                <b-nav-item v-if="isLoggedIn" @click="signOut()"> 
                    <font-awesome-icon :icon="['fas', 'sign-out-alt']"/> Cerrar sesión
                </b-nav-item>
            </b-nav>
        </b-sidebar>

        <h3 class="header__title"> {{ title }} </h3>
    </div>
</template>

<script src="./header.js"></script>
<style scoped lang="scss">
    @import '@/styles/layout/header.scss';
</style>