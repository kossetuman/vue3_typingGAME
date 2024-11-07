new Vue({
  el: '#app',
  data: {
    startFlg: '', //スタート検知フラグ
    current_question: '', //現在の問題
    questions: ['apple', 'banana', 'chocolate', 'donut', 'espresso'], //問題配列
    typeBox: '', //入力キーを監視
    current_question_count: 0, //正解数
    question_counts: 0, //総問題数
  },
  computed: {
    styleObject: function () {
      width = 20 * this.current_question_count + '%';
      if (this.current_question_count === 5) {
        color = '#03a9f4';
      } else {
        color = 'orange';
      }
      return {
        width: width,
        'background-color': color,
      };
    },
  },
  //startボタンを押した際、入力欄に自動フォーカス
  methods: {
    gameStart: function () {
      this.startFlg = true;
      this.$nextTick(function () {
        document.querySelector('#type-form').focus();
      });
    },
  },

  //現在の問題に問題配列の0番目を代入
  //総問題数に問題配列の要素数を代入
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;
  },
  watch: {
    typeBox: function (e) {
      if (e == this.current_question) {
        console.log(e);
        this.questions.splice(0, 1);
        this.current_question = this.questions[0];
        this.typeBox = '';
        this.current_question_count += 1;
      }
    },
  },
});
