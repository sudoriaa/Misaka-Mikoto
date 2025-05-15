<script lang="ts" setup>
import MainSidebar from '../../components/MainSidebar.vue';
import SecondarySidebar from '../../components/SecondarySidebar.vue';
import { RouterView } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="bg"></div>
  <div class="container">
    <MainSidebar class="main-sidebar" />

    <div class="main">
      <header class="header">
        <section class="icon_github">
          <a href="https://github.com/sudoriaa/Misaka-Mikoto">
            <Icon icon="line-md:github" />
          </a>
        </section>

      </header>
      <div class="main-container">
        <div class="content">
          <RouterView></RouterView>

        </div>
        <SecondarySidebar class="secondary-sidebar" />
      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #FFEECC;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  background-attachment: fixed;

  z-index: -1;
}

.container {
  display: flex;
  min-height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffbf3;

  .main-sidebar {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 240px;
    flex-shrink: 0;
  }




  .main {
    flex: 1;
    display: flex;
    flex-direction: column;



    .header {
      position: sticky;
      top: 0;
      height: 55px;
      z-index: 999;
      background-color: rgba(232, 167, 124, 1);
      display: flex;
      align-items: center;

      .icon_github {
        margin-left: 20px;

        a:only-child {
          font-size: 32px;
          color: #000;
        }
      }
    }

    .main-container {
      display: flex;
      width: 100%;
      .content {
        flex: 1;
        min-height: 100vh;  
        padding: 1% 2%;
        max-width: 900px;
      }
      .secondary-sidebar {
        width: 240px;

      }
    }

  }


}

@media (max-width: 990px) {
  .secondary-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-sidebar {
    display: none;
  }
}
</style>