<template>
    <div class="card__wrapper">
      <slot name="options"></slot>
      <div :id="`card-${uid}`" class="card" :style="gridColumns">
        <slot name="firstColumn"></slot>
        <slot name="secondColumn"></slot>
        <div class="card__navigate">
          <slot name="thirdColumn"></slot>
        </div>
      </div>
      <div :class="{'card--inactive': !isEnabled}"></div>
    </div>
</template>

<script src="./card.js"></script>