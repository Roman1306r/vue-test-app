<script setup >
import {footerData} from './../assets/data/data.js'
import qiwi from './../assets/footer/qiwi.png'
import yandex from './../assets/footer/yandex.png'
import web from './../assets/footer/web.png'
import email from './../assets/footer/email.png'
import vk from './../assets/footer/vk.png'
const arrayIcons = {
  middle: [qiwi, yandex, web],
  right: [email, vk]
}
</script>


<template>
  <footer>
      <div class="footer container d-flex align-items-center justify-content-between">
          <div>© 2024 «LoremIpsum» All rights reserved.</div>
          <div class="footer__medium">
              <a href="#" v-for="({id, title}, index) in footerData.middle"
               :key="id">
                  <img :src="arrayIcons.middle[index]" alt="icon" />
                  <span>{{title}}</span>
               </a>
          </div>
          <div class="footer__right">
              <a v-for="({id, title, href}, index) in footerData.right"
               :key="id" :href="href">
               <img :src="arrayIcons.right[index]" alt="email" />             <span>{{title}}</span>
               </a>
          </div>
          <div class="hidden">© 2024 «LoremIpsum» All rights reserved.</div>
      </div>
  </footer>
</template>




<style scoped lang="scss">
  footer {
    background-color: #3D4050;
    padding: 20px;
    font-size: 13px;
    white-space: nowrap;
    @media (max-width: 1200px) {
         padding: 20px 0px;
    }
    .footer {
      @media (max-width: 1200px) {
         flex-direction: column;
      }
    }
    & div {
      display: flex;
      align-items: center;
      gap: 50px;
      &:first-child {
        @media (max-width: 1200px) {
          display: none;
        }
      }
      &.hidden {
        display: none;
        @media (max-width: 1200px) {
          display: block;
        }
      }
      &.footer__medium {
        border-right: 1px solid #C3C3C3;
        border-left: 1px solid #C3C3C3;
        padding: 0 50px;
        @media (max-width: 1200px) {
          padding: 0;
          border-right: none;
          border-left: none;
          justify-content: space-between;
        }
      }
      &.footer__right {
        @media (max-width: 1200px) {
            gap: 50px;
        }
      }
      @media (max-width: 1200px) {
          gap: 20px;
          width: 100%;
          justify-content: flex-start;
      }
      & a {
        display: flex;
        align-items: center;
        gap: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>