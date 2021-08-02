<template>
    <div class="header">
        <b-navbar-toggle class="header__btn-side-menu" target="side-menu"> 
            <font-awesome-icon :icon="['fas', 'bars']"/> 
        </b-navbar-toggle>

        <h3 class="header__title"> {{ title }} </h3>

        <b-sidebar id="side-menu" class="header__navbar" title="Menú de navegación" backdrop shadow>
            <p class="navbar__title"> Bienvenido: </p>
            <p class="navbar__text"> {{ user.email }} </p>
            <b-nav vertical class="px-3 py-2">
                <template v-for="(item,index) in menuItems">
                    <b-nav-item v-if="!item.children" :to="{name: item.routeName}" :key="index">
                        {{ item.title }}
                    </b-nav-item>
                    <b-nav-item-dropdown v-else :text="item.title" :key="index">
                        <template v-for="(children,index) in item.children">
                            <b-dropdown-item :to="{name: children.routeName}" :key="index"> {{children.title}} </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>
                </template>
                <b-nav-item v-if="isLoggedIn" @click="signOut()"> Cerrar sesión </b-nav-item>
            </b-nav>
        </b-sidebar>
    </div>
</template>

<script src="./header.js"></script>
<style scoped lang="scss">
    @import './header.scss';
</style>