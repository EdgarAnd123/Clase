<template>
  <div class="edit__wrapper">
    <loader-component :loading="isLoading"></loader-component>
    <employee-form :employee="employee"></employee-form>
  </div>
</template>

<script src="./edit.js"></script>
<style scoped lang="scss">
    @import './edit.scss';
</style>
