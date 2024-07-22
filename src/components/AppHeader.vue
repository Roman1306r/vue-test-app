<script setup >
import {headerData} from './../assets/data/data.js'
import { store } from './../assets/store.js'
</script>




<template>
  <header class="mx-auto z-3">
        <div class="container d-flex align-items-center justify-content-between">
              <h2 class="text-uppercase">LoremIpsum</h2>
              <ul class="nav">
                  <li v-for="({title, id, isActive}) in headerData" :key="id" class="nav-item">
                    <a class="nav-link" :class="{ active: isActive }" aria-current="page" href="#">{{title}}</a>
                  </li>
                  <li v-if="store.isSubmit"><a @click="store.closeOrderHistory" class="nav-link active" href="#">Back</a></li>
              </ul>
        </div>

  </header>
</template>



<style scoped lang="scss">
header {
    position: fixed;
    width: 100%;
    padding: 15px 10px;
    background-color: var(--headerBg);
    @media (max-width: 767px) {
        background-color: var(--primary-bgcolor);
        padding: 30px 0px 10px 0;
        position: relative;
    }
    & div {
        @media (max-width: 767px) {
          flex-direction: column;
        }
        h2 {
              font-size: calc(var(--index) * 1.3);
              font-weight: 900;
              @media (max-width: 767px) {
                  text-align: left;
                  font-size: calc(var(--index) * 1.8);
                  width: 100%;
                  margin: 0;
              }
        }
        .nav {
              @media (max-width: 767px) {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
              }
              & li {
                a {
                      @media (max-width: 767px) {
                          padding: 10px 0;
                          font-size: 17px;
                      }
                      color: var(--primary-color);
                      &:hover {
                        color: var(--secondary-color);
                      }
                      &.active {
                        color: var(--secondary-color);
                      }
                }
              }
            }
    }
}
</style>