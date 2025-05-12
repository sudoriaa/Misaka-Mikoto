<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import App from '../App.vue';
const route = useRoute();
const router = useRouter();


const articles = ref([
    { id: 1, title: "Misaka-Mikoto.com网站开发决定1！", image: "/images/kuroko.webp", excerpt: "御坂美琴应援站已经开始开发中，以服务每一位御坂美琴粉丝为初心，将不断开发新功能新内容...", author: "苏多莉亚", time: "2025-5-11 20:34" },
    { id: 2, title: "Misaka-Mikoto.com网站开发决定2！", image: "", excerpt: "御坂美琴应援站已经开始开发中，以服务每一位御坂美琴粉丝为初心，将不断开发新功能新内容...", author: "苏多莉亚", time: "2025-5-11 20:34" },
    { id: 3, title: "Misaka-Mikoto.com网站开发决定3！", image: "", excerpt: "御坂美琴应援站已经开始开发中，以服务每一位御坂美琴粉丝为初心，将不断开发新功能新内容...", author: "苏多莉亚", time: "2025-5-11 20:35" },
])

const topArticles = [1]

const sortedArticles = computed(() => {
  return [...articles.value].sort((a, b) => {

    let aPinned:boolean = topArticles.includes(a.id)
    let bPinned:boolean = topArticles.includes(b.id)


    if (aPinned !== bPinned) {
      return Number(bPinned) - Number(aPinned);
    }

    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });
});

const openArticle = (id: Number) => {
    router.push("/article/"+ id.toString())
}
</script>

<template>
    <div class="container">
        <div class="top-content">
            <div class="article-card">

            </div>
        </div>
        <div class="content">
            <article class="article-card" v-for="item in sortedArticles" :key="item.id">
                <div class="article-image " v-if="item.image.length != 0" @click="openArticle(item.id)">
                    <img :src="item.image" />
                </div>
                <div class="article-content">
                    <h1 class="article-title" :class="{'article-top' : topArticles.includes(item.id)}" @click="openArticle(item.id)">{{ item.title }}</h1>
                    <p class="article-excerpt" @click="openArticle(item.id)">{{ item.excerpt }}</p>
                    <div class="article-meta">
                        <span class="author">
                            <Icon icon="solar:user-outline" />{{ item.author }}
                        </span>
                        <span class="time">
                            <Icon icon="gridicons:time" />{{ item.time }}
                        </span>
                    </div>
                </div>

            </article>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 20px 0;

        .article-card {
            max-height: 200px;
            background-color: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            display: flex;
            transition: transform 0.2s, box-shadow 0.2s;
            overflow: hidden;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            }

            .article-image, .article-title, .article-excerpt {
                cursor: pointer;
            }

            .article-image {
                width: 30%;
                min-width: 200px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    aspect-ratio: 1/1;

                }
            }

            .article-content {
                padding: 24px;

                display: flex;
                flex-direction: column;

                .article-title {
                    display: flex;
                    align-items: center;
                    &.article-top::before {
                        content: '置顶';
                        background: linear-gradient(-45deg, #ffa652 0%, #ff4805 100%);
                        border-radius: 5px;
                        font-size: 0.8em;
                        color: #fff;
                        padding: 2px 6px;
                        margin-right: 8px;
                    }

                    font-size: 22px;
                    font-weight: 600;
                    color: #333;
                    margin: 0 0 12px 0;
                    line-height: 1.3;
                }

                .article-excerpt {
                    font-size: 15px;
                    color: #aaa;
                    line-height: 1.6;
                    margin: 0 0 16px 0;
                    flex-grow: 1;
                }

                .article-meta {
                    display: flex;
                    gap: 16px;
                    align-items: center;
                    font-size: 13px;
                    color: #888;
                    background-color: rgba(200, 200, 200, 0.3);
                    width: fit-content;
                    padding: 3px 5px;
                    border-radius: 5px;

                    .author,
                    .time {
                        font-weight: 500;
                        color: #555;
                        display: flex;
                        align-items: center;
                    }


                }
            }


        }
    }
}
</style>