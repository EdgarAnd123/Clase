<template>
    <div class="profile">
        <loader-component :loading="isLoading"></loader-component>
        <div class="profile-card">
            <card-image 
                :imageSize="125"
                :default="validateString(employee.name, 0, 1) + validateString(employee.lastName, 0, 1)"
                :imageUrl="employee.profileImage" 
                :editable='false' 
                :isActive="employee.isActive">
            </card-image>
            <div class="profile-card__wrapper">
                <p class="font-weight-bold">
                    {{ employee.name }} {{ employee.lastName }}
                </p>
                <p> {{ employee.role | messageEmptyValue }} </p>
                <p v-if="employee.endDate" class="text-danger"> 
                    <span class="profile-card__text-block">
                        Fecha terminación laboral:
                    </span>
                    {{ employee.endDate | dateFormat }}
                </p>
            </div>
            <p class="profile-card__text profile-card__phone-number">
                <span class="profile-card__text-block profile-card__text-highlight"> 
                    Teléfono 
                </span> 
                {{ employee.phoneNumber | messageEmptyValue }} 
            </p>
            <p class="profile-card__text profile-card__emergency-number">
                <span class="profile-card__text-block profile-card__text-highlight">
                    Emergencia
                </span>  
                {{ employee.emergencyNumber | messageEmptyValue }}
            </p>
            <p class="profile-card__text profile-card__start-date">
                <span class="profile-card__text-block profile-card__text-highlight">
                    Fecha inicio
                </span>  
                {{ employee.startDate | dateFormat }} 
            </p>
            <p class="profile-card__text profile-card__working-hours">
                <span class="profile-card__text-block profile-card__text-highlight">
                    Jornada
                </span> 
                {{ employee.workingHours }} horas
            </p>
            <p class="profile-card__text profile-card__social-number">
                <span class="profile-card__text-block profile-card__text-highlight">
                    NSS
                </span> 
                {{ employee.socialNumber }} 
            </p>
            <p class="profile-card__text profile-card__rfc">
                <span class="profile-card__text-block profile-card__text-highlight">
                    RFC
                </span> 
                {{ employee.rfc }} 
            </p>
        </div>

        <div class="economics">
            <p class="font-weight-bold text-center"> 
                Cálculos de prestaciones económicas
            </p>
            <div class="economics__salary separator">
                <p class="economics__text text-small">
                    Sueldo
                </p>
                <b-form-select 
                    v-model="selectedSalaryPeriod" 
                    class="economics__select" 
                    :options="salaryFilters" 
                    size="sm" 
                    placeholder="Periodo" 
                    @change="onChange($event)">
                        <template #first>
                            <b-form-select-option :value="null" disabled> 
                                Selecciona un filtro para el salario
                            </b-form-select-option>
                        </template>
                </b-form-select>
                <p class="economics__summary text-small">
                    <span class="font-weight-bold">
                        El pago corresponde a:
                    </span>
                    {{ salary | toUSD }}
                </p>
            </div>
            <div class="separator">
                <p class="text-small">
                    <span class="font-weight-bold">
                        <font-awesome-icon icon="plane-departure"/>
                        Prima vacacional:
                    </span>
                    {{ vacationBonus | toUSD }}
                </p>
            </div>
            <div class="separator">
                <p class="text-small"> 
                    <span class="font-weight-bold"> 
                        <font-awesome-icon icon="hand-holding-usd"/> 
                        Aguinaldo: 
                    </span>
                    {{ christmasBonus | toUSD }}
                </p>
            </div>
        </div>
        <div class="attendance">
            <p class="font-weight-bold text-center"> 
                Historial de asistencia
            </p>
            <div class="separator"></div>
        </div>
        <div class="over-time">
            <p class="font-weight-bold text-center"> 
                Historial de horas extras
            </p>
            <div class="separator"></div>
        </div>
        <div class="adjustments">
            <p class="font-weight-bold text-center"> 
                Ajustes
            </p>
            <div class="separator_double">
                <p class="text-small">
                    <span class="font-weight-bold">
                        Cambiar hora de entrada
                    </span>
                </p>
            </div>
            <div class="separator_double">
                <p class="text-small">
                    <span class="font-weight-bold">
                        Cambiar hora de salida a comer
                    </span>
                </p>
            </div>
            <div class="separator_double">
                <p class="text-small">
                    <span class="font-weight-bold">
                        Cambiar hora de entrada a comer
                    </span>
                </p>
            </div>
            <div class="separator_double">
                <p class="text-small">
                    <span class="font-weight-bold">
                        Cambiar hora de salida
                    </span>
                </p>
            </div>
        </div>
        <router-link 
            class="btn btn-floating"
            tag="button"
            :to="{name: 'edit-employee', params: {id: employee.id} }">
                <font-awesome-icon icon="pen"/>
        </router-link>
    </div>
</template>

<script src="./profile.js"></script>
<style scoped lang="scss">
    @import '@/styles/pages/employee/profile.scss';
</style>
