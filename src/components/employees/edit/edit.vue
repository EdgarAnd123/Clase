<template>
  <div class="edit">
    <loader-component :loading="isLoading"></loader-component>
    <employee-form :employee="employee"></employee-form>
  </div>
</template>

<script src="./edit.js"></script>
<style scoped lang="scss">
  @import '@/styles/pages/employee/edit.scss';
</style>
