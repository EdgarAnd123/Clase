<template>
    <div class="card__wrapper" >
        <div class="card__controls">
            <slot name="controls"></slot>
        </div>
        <div :id="`card-${index}`" class="card" :style="gridColumns">
            <div>
                <slot name="firstColumn"></slot>
            </div>
            <div>
                <slot name="secondColumn"></slot>
            </div>
            <div class="card__thirdColumn">
                <slot name="thirdColumn"></slot>
            </div>
        </div>
    </div>
</template>

<script src="./card.js"></script>
<style scoped lang="scss">
    @import './card.scss';
</style>

