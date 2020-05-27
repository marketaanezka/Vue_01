console.log("funguju");

new Vue({
  el: "#app",
  data: {
    name: "Salem",
    age: 6,
    weight: 6,
    activities: ["sleep", "eat", "sleep some more", "chill", "purr"],
    action: "...",
  },
  methods: {
    purr: function () {
      return `purrrrrrrrrr`;
    },
    feedAlittle() {
      this.weight += 2;
      this.action = "yum"
    },
    feedAlot() {
      this.weight += 5;
      this.action = "yum yum"
    },
    walk() {
      this.weight -=2;
      this.action = "walk"
    },
    hiss() {
      this.action = "hisssss"
    }
  }
});