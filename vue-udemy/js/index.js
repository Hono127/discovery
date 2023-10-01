const app = Vue.createApp({
  data: () => ({
    // 簡易app用
    newItem: "",
    todos: [],
    // 監視プロパティ用
    message: "Hello Vue.js",
    km: 0,
    m: 0,
    colors: [{ name: "Red" }, { name: "Green" }, { name: "Yellow" }],
    // 税金文用
    basePrice: "",
  }),
  watch: {
    // 監視プロパティ用
    km: function (value) {
      console.log(value);
      this.km = value;
      this.m = value * 1000;
    },
    colors: {
      handler: function (newValue, oldValue) {
        console.log("変更完了");
      },
      // ネストされたオブジェクトも監視するには下記を追記
      deep: true,
    },
  },
  methods: {
    onClick: function () {
      this.colors[1].name = "White";
    },
    // todo用
    addItem: function (event) {
      if (this.newItem == "") return;
      let todo = {
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
    // 税金分用
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
