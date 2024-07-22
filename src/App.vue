<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppAbout from './components/AppAbout.vue'
import AppOrder from './components/AppOrder.vue'
import AppOrderHistory from './components/AppOrderHistory.vue'
import { store } from './assets/store.js'
</script>



<template>
  <div class="wrapper d-flex flex-column ">
      <AppHeader />
      <main>
        <div class="bg position-relative">
            <img class="about-img " src="./assets/bg/bg.png" alt="background" />
            <AppAbout />
        </div>
        <div class="bg-order position-relative">
            <img class="about-img " src="./assets/bg/bg-order.png" alt="background" />
            <AppOrder v-if="!store.isSubmit" />
            <AppOrderHistory v-else />
        </div>
      </main>
      <AppFooter />
  </div>
</template>



<style lang="scss">
    .wrapper {
      min-height: 100vh;
      color: var(--primary-color);
      background-color: var(--primary-bgcolor);
      width: 100%;
      overflow: hidden;
      main {
            flex: 1 0 auto;
            .bg, .bg-order {
              .about-img {
                  height: 100%;
                  width: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  object-fit: cover;
              }
            }
            .bg-order {
              .about-img {
                  @media (max-width: 767px) {
                       display: none;
                  }
              }
            }
          }
    }
</style>