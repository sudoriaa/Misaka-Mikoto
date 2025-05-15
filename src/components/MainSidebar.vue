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
  <aside class="sidebar">
    <div class="sidebar__logo">
      <img src="/images/railgun.svg" />
    </div>
    <ul class="sidebar__menu">
      <li class="sidebar__item" v-for="item, index in menuItems" :key="index"
        :class="{ 'active': index === activeItem }" @click="switchItem(index)">
        {{ item.title }}
      </li>
    </ul>

    <div class="sidebar__footer">
      <img src="/images/mikoto1.png" />
    </div>
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
  .sidebar__menu {
    width: 100%;

    .sidebar__item {
      list-style: none;
      position: relative;
      height: 45px;
      line-height: 45px;
      text-align: center;
      transition: all 0.5s;
      color: #000;
      cursor: pointer;
      z-index: 1;
      font: {
        size: 20px;
        weight: 1000;
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
        background: linear-gradient(90deg, #44ffe3d8, #00ff6ada);
      }

      &::before {
        background: linear-gradient(-45deg, #ff9500 0%, #ff0000 100%);
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
  .sidebar__footer {
    width: 100%;
    margin-top: auto;
    opacity: 0.5;
    img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>
