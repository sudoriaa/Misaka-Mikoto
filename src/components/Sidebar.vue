<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuItems = ref([
  { title: '主页', path: '/' },
  { title: '角色', path: '/' },
  { title: '世萌', path: '/' },
])
const activeItem = ref(0)

const switchItem = (index: number) => {
  activeItem.value = index;
  router.push(menuItems.value[index].path)
}

</script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">
    </div>
    <ul class="sidebar__menu">
      <li class="sidebar__item" v-for="item, index in menuItems" :key="index"
        :class="{ 'active': index === activeItem }" @click="switchItem(index)">
        {{ item.title }}
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgba(#000, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .sidebar__menu {
    width: 100%;

    .sidebar__item {
      position: relative;
      height: 1.5em;
      line-height: 1.5em;
      text-align: center;
      transition: all 0.5s;
      cursor: pointer;

      font: {
        size: 24px;
        weight: bold;
      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 0.5s;
        z-index: -1;
      }

      &::after {
        background: linear-gradient(90deg, #44ffe3d8, #00fffbda);
      }

      &::before {
        background: linear-gradient(-45deg, #ff9844 0%, #ff3300 100%);
      }

      &:hover:not(.active)::after {
        opacity: 1;
      }

      &.active {
        &::before {
          opacity: 1;
        }

        color: #fff;
      }
    }
  }

}
</style>
