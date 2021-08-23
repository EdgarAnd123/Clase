<template>
	<div class="card-employee">
		<p class="card-employee__title">
			{{ employee.name }} {{ employee.lastName }}
			<span class="card-employee__title-secondary">
				#{{ employee.id }}
			</span>
		</p>
		<p class="card-employee__text">
			{{ employee.role }} | <span> Sucursal {{ employee.store }} </span>
		</p>
		<p class="card-employee__text">
			<font-awesome-icon class="card__icon" icon="phone-alt" />
			{{ employee.phoneNumber }}
		</p>
		<div class="card-employee__timings">
			<span :class="{'card-employee__timings_disabled': !clockIn}">
				<font-awesome-icon class="card-employee__icon icon" icon="clock"/>
				{{ verifyInTodaysTiming("clockIn") }}
			</span>
			<span :class="{'card-employee__timings_disabled': !mealTimeOut}">
				<font-awesome-icon class="card-employee__icon icon" icon="pizza-slice"/>
				{{ verifyInTodaysTiming("mealTimeOut") }}
			</span>
			<span :class="{'card-employee__timings_disabled': !mealTimeIn}">
				<font-awesome-icon class="card-employee__icon icon" icon="drumstick-bite"/>
				{{ verifyInTodaysTiming("mealTimeIn") }}
			</span>
			<span :class="{'card-employee__timings_disabled': !clockOut}">
				<font-awesome-icon class="card-employee__icon icon" icon="running"/>
				{{ verifyInTodaysTiming("clockOut") }}
			</span>
		</div>
	</div>
</template>

<script src="./card-employee.js"></script>