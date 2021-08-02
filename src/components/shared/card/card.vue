<template>
    <div class="card" :style="gridColumns">
        <div class="firstColumn">
            <slot name="firstColumn"></slot>
        </div>
        <div class="secondColumn">
            <slot name="secondColumn"></slot>
        </div>
        <div class="thirdColumn">
            <slot name="thirdColumn"></slot>
        </div>
    </div>
</template>

<script src="./card.js"></script>
<style scoped lang="scss">
    @import './card.scss';
</style>