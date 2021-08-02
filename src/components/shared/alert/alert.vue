<template>
    <div id="alert">
        <b-alert
            :show="status"
            dismissible
            fade
            :variant="alertType">
                {{ message }}
        </b-alert>
    </div>
</template>

<script src="./alert.js"></script>
<style scoped lang="scss">
    @import './alert.scss';
</style>
