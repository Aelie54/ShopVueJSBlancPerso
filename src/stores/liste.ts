import { defineStore } from "pinia";


export const ListeCourse = defineStore({
  id: "articleClient",
  state: () => ({
    list: [  
    ],
  }),
  getters: {
    getList: (state) => state.list,

    getTotalPrice: (state) => {
      let total = 0;
      state.list.map( (item : {price: number, quantity: number}) => {
        total+= (item.price * item.quantity)
      })
      return total
    },
  },
  actions: {
    increment() {
    },
  },
});
