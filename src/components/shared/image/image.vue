<template>
    <div class="image">
        <div class="image__outline" :style="image__outline_color">
            <img v-if="imageUrl || imageSrc" class="image-circle" :width="imageSize" :height="imageSize" :src="imageUrl"/>
            <p v-else class="image-names"> {{ joinInitialLetters() }}</p>
            <div v-if="editable" class="image__background-icon">
                <label for="profile-image">
                    <font-awesome-icon class="image-icon" icon="camera"/>
                    <input @change="onFileChange($event)" id="profile-image" name="myImageProfile" type="file" accept="image/png, image/gif, image/jpeg">
                </label>
            </div>
        </div>

    </div>
</template>

<script src="./image.js"></script>
<style scoped lang="scss">
    @import './image.scss';
</style>