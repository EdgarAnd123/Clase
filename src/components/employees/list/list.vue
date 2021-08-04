<template>
    <div>
        <div class="list__filters">
            <b-form-input v-model="searchValue" class="navbar__input" type="text" placeholder="Buscar por nombre..." required></b-form-input>
            <div class="filters__btn">
                <p class="filters__text text-bold"> {{employeesCounter}} resultados </p>
                <p id="popover-reactive-1" class="filters__text text-bold"> Filtrar por <font-awesome-icon :icon="['fas', 'angle-down']"/></p>
                    <b-popover target="popover-reactive-1" placement="bottomright" container="filters">
                        <b-form-radio-group id="radio-filters-list" v-model="selectedFilter" :options="employeeFilters" stacked></b-form-radio-group>
                    </b-popover>
            </div>
        </div>
        <div class="list__employees">
            <loader-component :loading="isLoading"></loader-component>
            <template>
                    <transition-group name="list" tag="div" class="card-container">
                        <template v-for="(employee,index) in employees">
                            <router-link :key="index" :to="{name: 'profile-employee', params: { id: employee.id} }">
                                <card :key="index" firstColumnWidth="25" secondColumnWidth="75">
                                        <template v-slot:firstColumn>
                                            <card-image :imageSize="80" :name="employee.name[0]" :lastName="employee.lastName[0]" :imageUrl="employee.profileImage" :editable='false' :isActive="employee.activeEmployee"></card-image>
                                        </template>
                                        <template v-slot:secondColumn>
                                            <p class="card__title"> {{employee.name}} {{employee.lastName}} </p>
                                            <p class="card__text"> {{employee.role}} | {{employee.rfc}} </p>
                                            <p class="card__text"> 
                                                <font-awesome-icon class="card__icon" icon="phone-alt"/> {{employee.phoneNumber}} 
                                            </p>
                                            <!--<p class="card__text"> 
                                                <font-awesome-icon class="card__icon" icon="phone-alt"/> <span class="card__text-emergency"> {{employee.emergencyNumber | phoneFormat}} </span>
                                            </p>-->
                                        </template>
                                </card>
                            </router-link>
                        </template>
                    </transition-group>
                <router-link class="btn btn-floating" tag="button" :to="{name: 'create-employee'}"> <font-awesome-icon icon="plus"/> </router-link>
            </template>
        </div>
    </div>
</template>

<script src="./list.js"></script>
<style scoped lang="scss">
    @import './list.scss';
</style>
