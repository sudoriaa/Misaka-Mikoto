<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
const slides = ref([
    { articleId: 1, title: '你指尖悦动的电光', image: '/images/slide01.jpeg', url: '#' },
    { articleId: 1, title: '你指尖悦动的电光', image: '/images/kuroko.webp', url: '#' },
    { articleId: 1, title: '你指尖悦动的电光', image: '/images/slide01.jpeg', url: '#' },
    { articleId: 1, title: '你指尖悦动的电光', image: '/images/kuroko.webp', url: '#' },
])

const currentIndex = ref(0)
const isHovered = ref(false)
const prevItem = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const nextItem = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const switchItem = (index: number) => {
    currentIndex.value = index;
}

const mouseEnter = () => {
    isHovered.value = true;
}

const mouseLeave = () => {
    isHovered.value = false;
}

let interval: number = 0;

onMounted(() => {
    interval = setInterval(() => {
        if (!isHovered.value) {
            nextItem();
        }
    }, 4000);
})

onUnmounted(() => {
    if (interval != 0) {
        clearInterval(interval);
    }
})

</script>

<template>
    <div class="slide-container" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
        <ul class="slides" :style="{ transform: `translate(-${currentIndex * 100}%)` }">
            <li class="slide" v-for="item, index in slides" :key="index">
                <a :href="item.url">
                    <img :src="item.image" />
                </a>
                <div class="content">
                    <div class="secondary-line">
                        <h1>{{ item.title }}</h1>
                    </div>

                </div>
            </li>
        </ul>



        <div class="control prev" @click="prevItem()">
            <Icon icon="material-symbols:arrow-back-ios-new-rounded" />
        </div>
        <div class="control next" @click="nextItem()">
            <Icon icon="material-symbols:arrow-forward-ios-rounded" />
        </div>
        <div class="indicators">
            <span class="point" v-for="i in slides.length" :class="{ 'active': i - 1 === currentIndex }"
                @click="switchItem(i - 1)">
                <Icon icon="ci:dot-03-m" />
            </span>
        </div>
    </div>

</template>

<style lang="scss" scoped>



.slide-container {
    width: 100%;
    aspect-ratio: 1/0.5;
    user-select: none;
    overflow: hidden;
    position: relative;
    box-shadow: 3px 3px 5px rgba(#000, 0.3);
    border-radius: 5px;

    * {
        -webkit-user-drag: none;

    }

    .slides {
        display: flex;
        transition: transform 0.8s;
        height: 100%;

        .slide {
            list-style: none;
            height: 100%;
            flex: 0 0 100%;
            width: 100%;
            position: relative;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            .content {
                position: absolute;
                top: 60%;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 0px 20px;
                background: linear-gradient(0deg, rgb(#000, 0.8) 25%, transparent 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px 10px;

                .secondary-line {
                    color: #fff;
                    font-size: 12px;
                }


                h1 {
                    display: flex; 
                    align-items: center; 
                    margin: 0 0 12px 0;

                    &::before {
                        content: '精华';
                        background: linear-gradient(-45deg, #72d2ff 0%, #2b3dff 100%);
                        border-radius: 5px;
                        font-size: 0.8em;
                        color: #fff;
                        padding: 2px 6px;
                        margin-right: 8px;
                    }

                }
            }
        }


    }

    &:hover {

        .control,
        .indicators {
            opacity: 1;

        }
    }

    .control,
    .indicators {
        transition: opacity 0.3s;
    }

    .control {
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffffc7;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .indicators {
        opacity: 0;
        position: absolute;
        display: flex;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        gap: 3px;
        padding: 0 5px;
    }

    .point {
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;

        &:hover {
            color: rgba(255, 255, 255, 0.6);

        }

        &.active {
            color: rgba(255, 255, 255, 0.8);
        }
    }
}
</style>