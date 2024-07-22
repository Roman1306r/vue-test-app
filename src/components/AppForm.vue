<script setup >
import { store } from './../assets/store.js'
import {orderData} from './../assets/data/data.js'
</script>


<template>
  <form class="order__form">

      <div class="order__form-top">
        <select v-model="store.selected" class="form-select">
          <option disabled value="default" selected>Select the system type</option>
          <option v-for="({id, title}) in orderData.form"
               :key="id" :value="title">{{title}}</option>
        </select>
          <input type="email" :value="store.email" class="form-control" placeholder="Your e-mail" @input="event => store.email = event.target.value" aria-label="Username" aria-describedby="basic-addon1">
          <input :value="store.name" @input="event => store.name = event.target.value" type="text" class="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="order__form-bottom mb-5">
          <div class="range">
            <label for="customRange1" class="form-label">Sed ut perspiciatis, unde omnis iste natus</label>
            <input :value="store.procent" @change="event => store.procent = event.target.value" type="range" class="form-range" id="customRange1">
            <span>{{store.procent}} %</span>

          </div>

          <div class="file">
            <input @change="store.setFileToStore"  class="form-control" type="file" id="formFile">
            <label for="formFile" class="input__file">
                  <span class="input__file-icon-wrapper"><img class="input__file-icon" src="./../assets/order/file.svg" alt="Выбрать файл" width="25"></span>
                  <span v-if="!store.file.name" class="input__file-button-text">Attach a file</span>
                  <span v-else class="input__file-button-text"> {{store.file.name}}</span>
            </label>
          </div>
      </div>
      <div>
          <button @click="store.submitForm" class="button__basic">SEND</button>
      </div>
  </form>
</template>


<style scoped lang="scss">
  .order__form {
    padding-top: calc(var(--index) * 7);
    & .button__basic {
        width: 370px;
        @media (max-width: 767px) {
              width: 100%;
        }
    }
    &-top {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      @media (max-width: 767px) {
           display: block;
      }
      & option {
        &:hover {
              color: var(--secondary-color);
            }
      }
      & input, & select {
        width: 100%;
        border-radius: 3px;
        @media (max-width: 767px) {
           margin-bottom: 20px;
        }
      }
    }
    &-bottom {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 66.6% 1fr;
      column-gap: 20px;
      align-items: start;
      justify-content: space-between;
      @media (max-width: 767px) {
           display: block;
      }
      .range {
        min-width: 100%;
        position: relative;
        font-size: 18px;
        text-align: left;
        & label {
          @media (max-width: 767px) {
             width: 85%
          }
        }
        @media (max-width: 767px) {
           margin-bottom: 20px;
        }
        & input {
            &::-webkit-slider-thumb {
                    position: relative;
                    top: -4px;
                    background: var(--secondary-color);
                    border: 3px solid #14317B;
                    width: 23.72px;
                     height: 23.72px;
            }
        }
        & span {
            position: absolute;
            right: 0;
            color: #FFFFFFD9;
            font-style: italic;
            top: 0;
            font-weight: 100;
        }
      }
      .file {
        position: relative;
        text-align: center;
        .form-control {
            opacity: 0;
            visibility: hidden;
            position: absolute;
        }
        .input__file {
            text-transform: uppercase;
            height: 48px;
            width: 100%;
            background-color: var(--primary-color);
            color: var(--primary-bgcolor);
            font-size: 15px;
            font-weight:300;
            line-height: 17.58px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            gap: 10px;
            cursor: pointer;
            margin: 0 auto;
            &-icon-wrapper {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
            }
        }
      }
      & input {
           width: 100%;
           border-radius: 3px;
      }
    }
  }

</style>