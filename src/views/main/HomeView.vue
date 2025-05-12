<script lang="ts" setup>
import Slides from '../../components/Slides.vue';
import ArticleList from '../../components/ArticleList.vue';

</script>


<template>
  <div class="container">
    <div class="top-part">
      <h2>Misaka-Mikoto.com</h2>
      <p>你指尖跃动的电光，是我此生不变的信仰，唯我超电磁炮永世长存</p>
    </div>
    <Slides class="slide" />
    <ArticleList class="article-part"/>

    
  </div>
</template>



<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-part {
    align-self: flex-start;
    & h2 {
      color: #111;
      font-size: 24px;
    }

    & p {
      color: #aaa;
      font-size: 0.5em;
    }
  }

  .slide {
    height: 300px;
  }

  .article-part {
    margin-top: 20px;
  }
}
</style>