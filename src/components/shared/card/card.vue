<template>
	<div class="card__wrapper" :class="{'card--inactive': !isEnabled}">
		<slot name="options"></slot>
		<div :id="`card-${uid}`" class="card" :style="gridColumns">
			<slot name="firstColumn"></slot>
			<slot name="secondColumn"></slot>
			<div class="card__navigate">
				<slot name="thirdColumn"></slot>
			</div>
		</div>
	</div>
</template>

<script src="./card.js"></script>