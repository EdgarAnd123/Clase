<template>
  <div class="card-options">
    <span @click="updateTimingRecord('mealTimeOut')" :class="{'card-options_inactive': mealTimeOut}">
      <font-awesome-icon icon="pizza-slice"/>
    </span>
    <span @click="updateTimingRecord('mealTimeIn')" :class="{'card-options_inactive': mealTimeIn}">
      <font-awesome-icon icon="drumstick-bite"/>
    </span>
    <span @click="updateTimingRecord('clockOut')" :class="{'card-options_inactive': clockOut}">
      <font-awesome-icon icon="running"/>
    </span>
  </div>
</template>

<script src="./card-options.js"></script>