<script setup >
import {aboutData} from './../assets/data/data.js'
</script>




<template>
  <section>
        <article class="about__content container">
            <div class="about__content-container">
                  <h1><span>Lorem ipsum</span>  dolor sit amet consectetur <span>adipiscing</span></h1>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
                  <ul>
                    <li v-for="({id, title}) in aboutData"
               :key="id">- {{title}}</li>
                  </ul>
                  <div class="btns d-flex align-items-center justify-content-start">
                      <button class="button__basic">order</button>
                      <button class="button__basic">more info</button>
                  </div>
            </div>
        </article>
  </section>
</template>




<style scoped lang="scss">
  .about__content {
    position: relative;
    padding: calc(var(--index) * 17);
    @media (max-width: 767px) {
         padding: 80px 20px;
         position: static;
    }
    &-container {
        position: absolute;
        left: 0;
        color: #2A2B30;
        top: 50%;
        max-width: 800px;
        transform: translateY(-50%);
        padding: 20px;
        @media (max-width: 767px) {
            position: static;
            padding: 0px;
            transform: translateY(0);
        }
        & .btns {
          gap: 30px;
          margin-top: 70px;
          @media (max-width: 767px) {
                margin-top: 30px;
                flex-direction: column;
                gap: 20px;
          }
          & button {
            @media (max-width: 767px) {
                width: 100%;
            }
            &:last-child {
              background-color: var(--primary-color);
              color: #2A2B30;
              border: 1px solid #2A2B30;
            }
          }
        }
        & ul {
            margin-left: 5px;
            @media (max-width: 767px) {
                max-width: 300px;
            }
            & li {
                font-size: 20px;
                font-weight: 400;
                @media (max-width: 767px) {
                      font-size: 16px;
                }
            }
        }
        & p {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 0;
          @media (max-width: 767px) {
                font-size: 16px;
                margin-bottom: 10px;
                font-weight: 900;
                max-width: 280px;
          }
        }
        & h1 {
            font-size: 48px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 70px;
            @media (max-width: 767px) {
                font-size: 28px;
                margin-bottom: 20px;
                max-width: 280px;
                font-weight: 900;
            }
            & span {
              color: var(--secondary-color);
            }
        }
    }
  }

</style>