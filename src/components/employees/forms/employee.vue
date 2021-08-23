<template>
    <b-form id="employeeForm" class="form" @submit="triggerParentMethod">
        <card-image v-model="employee.profileImage" :imageUrl="employee.profileImage" :imageSize="125" :default="validateString(employee.name, 0, 1) + validateString(employee.lastName, 0, 1)" :editable='true' :isActive="employee.isActive"></card-image>

        <b-form-group id="name" label="Nombre(s)" label-for="name-input">
            <b-form-input id="name-input" v-model="employee.name" type="text" placeholder="Ingrese el nombre de su nuevo empleado" required></b-form-input>
        </b-form-group>

        <b-form-group id="lastName" label="Apellidos" label-for="lastName-input">
            <b-form-input id="lastname-input" v-model="employee.lastName" type="text" placeholder="Ingrese el apellido de su nuevo empleado" required></b-form-input>
        </b-form-group>

        <b-form-group id="telephone" label="Teléfono" label-for="telephone-input">
            <b-form-input v-model="employee.phoneNumber" id="telephone-input" type="tel" @keydown="phoneNumberFormatter('telephone-input')" placeholder="Ingrese el teléfono de su nuevo empleado" min="10" required> </b-form-input>
        </b-form-group>

        <b-form-group id="emergencyNumber" label="Teléfono de emergencia" label-for="emergencyNumber-input">
            <b-form-input id="emergencyNumber-input" v-model="employee.emergencyNumber" type="tel" @keydown="phoneNumberFormatter('emergencyNumber-input')" placeholder="Ingrese un teléfono en caso de emergencia" min="10" required></b-form-input>
        </b-form-group>

        <b-form-group id="email" label="Correo electrónico" label-for="email-input">
            <b-form-input id="email-input" v-model="employee.email" type="email" placeholder="Ingrese su correo electrónico" required></b-form-input>
        </b-form-group>

        <b-form-group id="socialNumber" label="Número de seguro social" label-for="socialNumber-input">
            <b-form-input id="socialNumber-input" v-model="employee.socialNumber" type="text" placeholder="Ingrese el NSS correspondiente" required></b-form-input>
        </b-form-group>

        <b-form-group id="rfc" label="RFC" label-for="rfc-input">
            <b-form-input id="rfc-input" v-model="employee.rfc" type="text" placeholder="Ingrese el RFC correspondiente" required></b-form-input>
        </b-form-group> 

        <b-form-group id="role" label="Puesto" label-for="role-select">
            <b-form-select plain id="role-input" v-model="employee.role" :options="roles" required>
            <template #first>
                <b-form-select-option :value="undefined" disabled> Seleccione una opción </b-form-select-option>
            </template>
            </b-form-select>
        </b-form-group>

        <div class="form__group-salary">
            <b-form-group id="workinghours" label="Horas de trabajo" label-for="range-workingHours">
                    <b-form-input class="form__working-hours-input" id="range-workingHours" v-model="employee.workingHours" type="range" min="4" max="12" required></b-form-input>
                    <span class="form__working-hours-text"> {{employee.workingHours | defaultValue }} </span>
            </b-form-group>
            <b-form-group id="baseSalary" label="Salario diario" label-for="baseSalary-select">
                <span class="form__dolar-symbol">$</span>
                <b-form-input class="form__salary-input" id="baseSalary-input" v-model="employee.baseSalary" type="number" placeholder="0" required></b-form-input>
            </b-form-group>
        </div>

        <b-form-group id="startDate-group" label="Fecha de inicio" label-for="date-select">
            <b-form-datepicker id="startDate" v-model="employee.startDate" placeholder="Seleccione una fecha" required></b-form-datepicker>
        </b-form-group>

        <b-form-group label="Subir archivo" label-size="sm" label-for="attachment">
            <b-form-file @change="onFileChange($event)" id="attachment" v-model="employee.attachment" size="sm" placeholder="Presione el botón para subir un archivo"></b-form-file>
        </b-form-group>

        <b-button class="mr-1" block variant="primary" type="submit"> Guardar usuario </b-button>
    </b-form>
</template>

<script src="./employee.js"></script>
<style scoped lang="scss">
    @import '@/styles/components/employee-form.scss';
</style>