<script lang="ts" setup>

</script>


<template>
    <div class="article__container">
        <div class="article__info">
            <h1>
                世萌投票教程
            </h1>
            <div class="author__info">
                <img src="https://q1.qlogo.cn/g?b=qq&nk=3078037152&s=640" />
                <div class="meta">
                    <span class="author__name">苏多莉亚</span>
                    <span class="publish__time">2025-5-15</span>

                </div>
            </div>

            <div class="article__content">
                <img src="/images/kuroko.webp" class="article__image" />



            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.article__container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .article__info {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        row-gap: 10px;
        .author__info {
            display: flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50px;
                border: 1px solid #ffbd87;
            }

            .meta {
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                font-size: 15px;

                .author__name {
                    color: #ffa55b;
                }
            }

            
        }

        .article__content {
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            min-height: 100vh;
            .article__image {
                object-fit: cover;
                width: 100%;
                max-height: 400px;
            }
        }
    }
}
</style>