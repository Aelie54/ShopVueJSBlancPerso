<template>
  <ul>
    <li v-for="articles in produit" :key="articles.title">
      <form @submit.prevent="addArticle(articles)">
        <p>
          {{ articles.id }} {{ articles.title }} {{ articles.price }}
          {{ articles.currency }}
        </p>
        <input type="number" min="0" v-model="articles.quantity" :id="articles.id" />
        <input type="submit" value="Ajoutez au panier" />
      </form>
    </li>
  </ul>
  <PanierArticle />
</template>

<script>
import PanierArticle from "./PanierArticle.vue";
import { ListeCourse } from "../stores/liste";
import { mapState, mapWritableState } from "pinia";
import inventory from "../stores/inventory.json";

export default {
  components: {
    PanierArticle,

  },
  computed: {
    produit() {
      return inventory.articles;
    },
    ...mapWritableState(ListeCourse, ["list"]),
  },
  methods: {
    addArticle(articles) {
      this.list.push(articles);
      console.log(articles);
    },
  },
};
</script>
<style>
</style>