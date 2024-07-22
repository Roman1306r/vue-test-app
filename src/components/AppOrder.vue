<script setup >
import AppForm from './AppForm.vue'
import {orderData} from './../assets/data/data.js'
import search from './../assets/order/search.png'
import proc from './../assets/order/proc.png'
import list from './../assets/order/list.png'
import emailorder from './../assets/order/emailorder.png'
import cash from './../assets/order/cash.png'
const arrayIcons = [search,  proc, list,  emailorder, cash]
</script>






<template>
  <section>
        <article class="order container ">
                  <h2>making <span>an order</span></h2>
                  <p>Before filling out the form, check out our work scheme!</p>
                  <div class="way">
                      <div v-for="({id, title}, index) in orderData.order"
               :key="id" class="way__item" >
                          <div class="way__item-circle"><img :src="arrayIcons[index]" alt="icon" /></div>
                          <span>{{title}}</span>
                          <div v-if="index !== orderData.order.length - 1" class="dots"><img src="./../assets/order/dots.png" alt="dots" /></div>
                      </div>
                  </div>
                  <AppForm />
        </article>
  </section>
</template>


<style scoped lang="scss">
  .order {
    position: relative;
    text-align: center;
    padding: calc(var(--index) * 5) 0;
    @media (max-width: 767px) {
       padding: calc(var(--index) * 8) 10px;
       position: static;
    }
    & p {
        font-size: 20px;
        color: #BBBBBB;
        margin-bottom: 50px;
    }
    & h2 {
      font-size: 36px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 30px;
      & span {
        color: var(--secondary-color);
        }
    }
    .way {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 15px;
      @media (max-width: 767px) {
        flex-wrap: wrap;
        padding: 0 10px;
      }
      &__item {
        position: relative;
        @media (max-width: 1200px) {
            position: static;
            max-width: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
        }
        & .dots {
          position: absolute;
          right: -140%;
          top: 50%;
          transform: translateY(-50%);
          @media (max-width: 1200px) {
              display: none;
          }

        }
        &-circle {
          background-color: var(--secondary-color);
          width: 100px;
          height: 100px;
          border-radius: 50% ;
          display: flex;
          align-items: center;
          justify-content: center;
          @media (max-width: 1200px) {

          }
        }
        & span {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          bottom: -50px;
          @media (max-width: 1200px) {
            position: static;
            max-width: 140px;
            margin-top: 10px;
            transform: translateX(0%);
            left: 0;
          }
        }
      }
    }
  }

</style>