<template>
    <div class="image">
        <div class="image__outline" :style="image__outline_color">
            <img 
                v-if="image" 
                class="image--circle" 
                :width="imageSize" 
                :height="imageSize" 
                :src="imageUrl"/>

            <p v-else class="image--names" 
               :style="image__names_size_calculation"> 
               {{ joinInitialLetters() }}
            </p>

            <label 
                v-if="editable" 
                for="profile-image" 
                class="image__icon-background">
                    <font-awesome-icon class="image__icon" icon="images"/>
                    <input 
                        @change="onFileChange($event)" 
                        id="profile-image" 
                        name="myImageProfile" 
                        class="image__input"
                        type="file"
                        accept="image/png, image/gif, image/jpeg">
            </label>
        </div>
    </div>
</template>

<script src="./image.js"></script>