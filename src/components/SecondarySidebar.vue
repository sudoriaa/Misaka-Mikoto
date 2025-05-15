<script setup lang="ts">
import { ref } from 'vue';
import CountDown from './CountDown.vue';
</script>

<template>
  <aside class="sidebar">
    <CountDown />
  </aside>

</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background-color: #F5F5F5;
  border-right: 1px solid rgba(#000, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .sidebar__logo {
    margin: 20px 0;
    img {
      width: 80%;
    }
  }

}
</style>
