<script setup >
import { orderList } from './../assets/store.js'
import {orderData} from './../assets/data/data.js'
</script>

<template>
  <section class="history">
        <article class="history__container container ">
            <h2 class="mb-3">Order History</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" v-for="({id, title}) in orderData.orderHistory" :key="id">{{title}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="({status, period, file, date}, index) in orderList" :key="index">
                  <td class="status-div" scope="row" data-label="status">
                      <span class="status" v-if="status == 0">Active</span>
                      <span class="status bg-primary" v-if="status == -1">Pending</span>
                      <span class="status bg-danger" v-if="status == 1">Expired</span>
                  </td>
                  <td class="number-div" data-label="Number"><span>№ {{index + 1}}</span></td>
                  <td data-label="date" class="date-div text-body-tertiary"><span>{{date}}</span></td>
                  <td data-label="Period" class="period-div text-body-tertiary"><span>{{period}} days</span></td>
                  <td data-label="Bill" class="file-div text-body-tertiary">
                    <a v-bind:href="file" download>
                      <img src="./../assets/order/download.png" alt="icon"/> Download
                    </a>
                  </td>
                  <td data-label="Act" class="act-div text-body-tertiary">
                  <a v-if="status !== -1" v-bind:href="file" download><img src="./../assets/order/download.png" alt="icon"/> Download act</a>
                  </td>
                </tr>
              </tbody>
            </table>
        </article>
  </section>
</template>




<style scoped lang="scss">
  .history__container {
      position: relative;
      padding: calc(var(--index) * 5) 10px;
      & h2 {
          font-size: 28px;
          text-transform: uppercase;
      }
      .table {
          border-radius: 5px;
          width: 100%;
          overflow: hidden;
          table-layout: fixed;
          margin-bottom: 20px;
          border-collapse: collapse;
          @media (max-width: 767px) {
            margin-bottom: 20px;
            border: 0;
          }
          & tr {
            @media (max-width: 1000px) {
                  display: flex;
                  flex-direction: column;
                  border-radius: 5px;
                  margin-bottom: 20px;
                  & .status-div {
                      order: 2;
                  }
                  & .number-div {
                      order: 1;
                  }
                  & .date-div {
                      order: 3;
                  }
                  & .period-div {
                      order: 4;
                  }
                  & .file-div {
                      order: 5;
                  }
                  & .act-div {
                      order: 6;
                  }
            }
            & td:nth-child(2) {
              @media (max-width: 1000px) {
                  border-top-left-radius: 5px;
                  border-top-right-radius: 5px;
              }
            }
            & td:last-child {
              @media (max-width: 1000px) {
                  border-bottom-left-radius: 5px;
                  border-bottom-right-radius: 5px;
              }

            }
          }
          .status {
            padding: 5px 10px;
            border-radius: 5px;
            line-height: 19.5px;
            font-size: 13px;
            background-color: var(--secondary-color);
            color: var(--primary-color);

            &::first-letter {
              text-transform: lowercase;
            }
          }
          & img {
            margin-right: 10px;
          }
          thead {
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            @media (max-width: 1000px) {
                 border: none;
                  clip: rect(0 0 0 0);
                  height: 1px;
                  margin: -1px;
                  overflow: hidden;
                  padding: 0;
                  position: absolute;
                  width: 1px;
            }
            & th {
              padding: 16px;
            }
          }
          & th, & td {
              padding: 16px;
          }
          & td {
            &:last-child {
              border-bottom: 0;
            }
            &::before {
               @media (max-width: 1000px) {
                 content: attr(data-label);
                  float: left;
                  font-weight: bold;
                  text-transform: uppercase;
                  font-size: 16px;
                }
            }
            @media (max-width: 1000px) {
                border-bottom: none;
                position: relative;
                display: block;
                font-size: 16px;
                min-height: 50px;
                text-align: center;
            }
            & span, & a {
              @media (max-width: 1000px) {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateY(-50%);
            }

            }
          }
      }
  }
</style>