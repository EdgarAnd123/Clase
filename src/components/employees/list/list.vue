<template>
  <div class="list">
    <div class="filters">
      <b-form-input
        v-model="searchValue"
        class="filters__input"
        type="text"
        placeholder="Buscar por nombre"
        required>
        </b-form-input>
        <p class="filters__text-result"> 
          {{ employeesCounter }} resultados
        </p>
        <p id="popover-reactive-1" class="filters__button">
          Filtrar por: {{ selectedFilter | formatBoolean }} 
          <font-awesome-icon :icon="['fas', 'angle-down']"/>
        </p>
        <b-popover
          target="popover-reactive-1"
          placement="bottomright"
          container="filters">
          <b-form-radio-group
            id="radio-filters-list"
            v-model="selectedFilter"
            :options="employeeFilters"
            stacked>
          </b-form-radio-group>
        </b-popover>
    </div>
    <div>
      <loader-component :loading="isLoading"></loader-component>
      <template>
        <transition-group name="list" tag="div" class="list__container">
          <template v-for="(employee, index) in employees">
            <div :key="`div-${index}`" style="position: relative;">
              <card
              :uid="employee.id"
              :key="index"
              firstColumnWidth="25"
              secondColumnWidth="55"
              thirdColumnWidth="15"
              :isEnabled="isEmployeeActive(employee)">
              <template v-slot:options>
                <card-options :employee="employee"></card-options>
              </template>
              <template v-slot:firstColumn>
                <card-image
                  :imageSize="80"
                  :imageUrl="employee.profileImage"
                  :editable="false"
                  :isActive="isEmployeeActive(employee)"
                  :default="employee.name[0] + employee.lastName[0]">
                </card-image>
              </template>
              <template v-slot:secondColumn>
                <card-employee :employee="employee"></card-employee>
              </template>
              <template v-slot:thirdColumn>
                <router-link
                  :key="index"
                  :to="{
                    name: 'profile-employee',
                    params: { id: employee.id }}"
                    class="card__navigate-anchor">
                  <font-awesome-icon
                    class="card__icon text-center"
                    icon="chevron-right"/>
                </router-link>
              </template>
            </card>
            <b-button v-if="!isEmployeeActive(employee) && employee.isActive" class="btn card--inactive__button" block @click="registerClockIn(employee)">
                Marcar asistencia
            </b-button>
            </div>
          </template>
        </transition-group>
        <router-link
          class="btn btn-floating"
          tag="button"
          :to="{ name: 'create-employee' }">
          <font-awesome-icon icon="plus"/>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script src="./list.js"></script>
<style scoped lang="scss">
  @import "@/styles/pages/list.scss";
</style>