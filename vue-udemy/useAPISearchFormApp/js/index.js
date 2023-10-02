const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: "",
    message: "",
  }),
  watch: {
    keyword: function (newKeyword, oldKeyword) {
      console.log(newKeyword);
      this.message = "入力中";
      this.debouncedGetAnswer();
    },
  },
  mounted: function () {
    // this.keyword = "Javascript";
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function () {
      if (this.keyword == "") {
        console.log("空文字です。");
        this.items = null;
        return;
      }

      this.message = "ロード中";
      // vm (ViewModel の略) を Vue インスタンスの変数名としてよく使います。
      // axiosでvueインスタンスのプロパティにアクセスするためにthisをローカル変数に格納しておく
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then(function (res) {
          console.log(res);
          vm.items = res.data;
        })
        .catch(function (error) {
          vm.message = "Error！" + error;
        })
        .finally(function () {
          vm.message = "";
        });
    },
  },
});
app.mount("#app");
