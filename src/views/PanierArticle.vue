<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Titre</th>
        <th>Quantité</th>
        <th>Prix en €</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="articles in getList" :key="articles">
        <th>{{articles.id}}</th>
        <th>{{articles.title}}</th>
        <th>{{articles.quantity}}</th>
        <th>{{articles.price}}</th>
      </tr>
    </tbody>
  </table>
  <div>
    <p>Prix Total</p>
    <p>{{getTotalPrice}}</p>
  </div>
</template>

<script>
import { ListeCourse } from "../stores/liste";
import { mapState, mapWritableState } from "pinia";
import inventory from "../stores/inventory.json";
export default {
computed: {
  ...mapState(ListeCourse, ['getList', 'getTotalPrice'])
},
methods: {
  
},
};
</script>

<style>
</style>