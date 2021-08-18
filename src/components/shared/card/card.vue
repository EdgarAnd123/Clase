<template>
    <div style="position: relative;">
        <div class="card__wrapper" :class="{'card-inactive': !isActive}">
            <div class="card__controls">
                <div>
                    <slot name="options"></slot>
                </div>
            </div>
            <div :id="`card-${uid}`" class="card" :style="gridColumns">
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
        <div v-if="!isActive">
            <b-button class="btn card-inactive__button" block @click="registerTime('clockIn')"> 
                Marcar asistencia 
            </b-button>
        </div>
    </div>
</template>

<script src="./card.js"></script>