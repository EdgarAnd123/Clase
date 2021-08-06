<template>
    <div class="profile">
        <loader-component :loading="isLoading"></loader-component>
        <div class="profile__information">
            <card-image :imageSize="125" :name="validateString(employee.name, 0)" :lastName="validateString(employee.lastName, 0)" :imageUrl="employee.profileImage" :editable='false'></card-image>
            <div>
                <p class="text-bold text-center"> {{employee.name}} {{employee.lastName}} </p>
                <p class="text-center"> {{employee.role}} </p>
            </div>

            <p v-if="employee.endDate" class="text-danger"> <span class="font-weight-bold"> Fecha terminación laboral: </span>
                {{ employee.endDate }}
            </p>
            
            <div class="profile__contact">
                <p> <span class="font-weight-bold"> Teléfono </span> 
                    {{ employee.phoneNumber}} 
                </p>
                <p> <span class="font-weight-bold"> Emergencia </span>  
                    {{ employee.emergencyNumber}}
                </p>
                <p> <span class="font-weight-bold"> Fecha inicio </span>  
                    {{employee.startDate | dateFormat }} 
                </p>
                <p> <span class="font-weight-bold"> Jornada </span> 
                    {{ employee.workingHours }} horas
                </p>
                <p> <span class="font-weight-bold"> NSS </span> 
                    {{ employee.socialNumber }} 
                </p>
                <p> <span class="font-weight-bold"> RFC </span> 
                    {{ employee.rfc }} 
                </p>
            </div>
        </div>

        <div class="profile__economics">
            <p class="text-bold text-center"> Cálculos de prestaciones económicas </p>
            <div class="separator">
                <p class="text-small text-bold "> Sueldo </p>
                <b-form-select v-model="selectedSalaryPeriod" :options="salaryFilters" size="sm" placeholder="Periodo" @change="onChange($event)">
                    <template #first>
                        <b-form-select-option :value="null" disabled> Selecciona un filtro para el salario </b-form-select-option>
                    </template>
                </b-form-select>
                <p class="text-small text-center"> <span class="text-bold"> El pago corresponde a: </span> {{ salary | toUSD }} </p>
            </div>
            <div class="separator">
                <p class="text-small"> <span class="text-bold"> Prima vacacional: </span> {{ vacationBonus | toUSD }} </p>
            </div>
            <div class="separator">
                <p class="text-small"> <span class="text-bold"> Aguinaldo: </span> {{ christmasBonus | toUSD }} </p>
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
