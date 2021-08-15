<template>
    <div class="alert">
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
    @import '@/styles/components/alert.scss';
</style>