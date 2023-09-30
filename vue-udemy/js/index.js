const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
    message: "Hello vue.js",
    basePrice: "",
  }),
  methods: {
    addItem: function (event) {
      // console.log("クリック");
      if (this.newItem == "") return;
      let todo = {
        // this=data
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function (i) {
      this.todos.splice(i, 1);
    },
  },
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join();
    },
    includeTaxPrice: {
      get: function () {
        return this.basePrice * 1.1;
      },
      set: function () {
        this.basePrice = value / 1.1;
      },
    },
  },
});
app.mount("#app");
