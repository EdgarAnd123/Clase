<template>
<div style="position: relative;">
    <div class="card__wrapper" :class="{'card-inactive': !isActive}">
        <div class="card__controls">
            <span @click="setMealTime()">
                <font-awesome-icon class="card__icon" icon="utensils"/>
            </span>
            <span @click="setClockOut()">
                <font-awesome-icon class="card__icon" icon="sign-out-alt"/>
            </span>
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
        <b-button class="btn card-inactive__button" block @click="setClockIn()"> 
            Marcar asistencia 
        </b-button>
    </div>
</div>
</template>

<script src="./card.js"></script>