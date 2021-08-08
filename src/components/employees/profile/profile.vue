<template>
    <div class="profile">
        <loader-component :loading="isLoading"></loader-component>
        <div class="profile__card">
            <card-image :imageSize="125" :name="validateString(employee.name, 0)" :lastName="validateString(employee.lastName, 0)" :imageUrl="employee.profileImage" :editable='false' :isActive="employee.activeEmployee"></card-image>
            <div class="card__information">
                <div class="information__user">
                    <p class="font-weight-bold"> {{employee.name}} {{employee.lastName}} </p>
                    <p> {{employee.role}} </p>
                    <p v-if="employee.endDate" class="text-danger"> <span class="font-weight-bold"> Fecha terminación laboral: </span>
                    {{ employee.endDate | dateFormat }}
                </p>
                </div>
                <p> <span class="font-weight-bold information__text-color"> Teléfono </span> 
                    {{ employee.phoneNumber}} 
                </p>
                <p> <span class="font-weight-bold information__text-color"> Emergencia </span>  
                    {{ employee.emergencyNumber}}
                </p>
                <p> <span class="font-weight-bold information__text-color"> Fecha inicio </span>  
                    {{employee.startDate | dateFormat }} 
                </p>
                <p> <span class="font-weight-bold information__text-color"> Jornada </span> 
                    {{ employee.workingHours }} horas
                </p>
                <p> <span class="font-weight-bold information__text-color"> NSS </span> 
                    {{ employee.socialNumber }} 
                </p>
                <p> <span class="font-weight-bold information__text-color"> RFC </span> 
                    {{ employee.rfc }} 
                </p>
            </div>
        </div>

        <div class="profile__economics">
            <p class="font-weight-bold text-center"> Cálculos de prestaciones económicas </p>
            <div class="separator economics__salary">
                <p class="text-small font-weight-bold economics__text"> Sueldo </p>
                <b-form-select v-model="selectedSalaryPeriod" class="economics__select" :options="salaryFilters" size="sm" placeholder="Periodo" @change="onChange($event)">
                    <template #first>
                        <b-form-select-option :value="null" disabled> Selecciona un filtro para el salario </b-form-select-option>
                    </template>
                </b-form-select>
                <p class="text-small text-center economics__summary"> <span class="font-weight-bold"> El pago corresponde a: </span> {{ salary | toUSD }} </p>
            </div>
            <div class="separator">
                <p class="text-small"> <span class="font-weight-bold"> <font-awesome-icon icon="plane-departure"/> Prima vacacional: </span> {{ vacationBonus | toUSD }} </p>
            </div>
            <div class="separator">
                <p class="text-small"> <span class="font-weight-bold"> <font-awesome-icon icon="hand-holding-usd"/> Aguinaldo: </span> {{ christmasBonus | toUSD }} </p>
            </div>
        </div>

        <router-link class="btn btn-floating" tag="button" :to="{name: 'edit-employee', params: {id: employee.id} }"> <font-awesome-icon icon="pen"/> </router-link>

        <!--<p> Día de salida {{ validateArray(employee.vacations, 'startDate') }}</p>-->
    </div>
</template>

<script src="./profile.js"></script>
<style scoped lang="scss">
    @import './profile.scss';
</style>
