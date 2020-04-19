export default {
  mounted() {
    this.one("bar");
    this.fetchCall();
  },
  methods: {
    one(foo) {
      //debugger; //debugger example

      let a = { b: 2, c: 3, d: 4 }, b;
      ({ b, ...a } = a);

      console.log("Hello from function one!", foo); // breakpoint here
      this.two(a, b);
      this.three();
    },
    two(a, b) {
      let c = { a, b }; // value of c ?
      console.log("Hello from function two!");
    },
    three() {
      console.log("Hello from function three!");
      this.four();
    },
    four() {
      console.log("Hello from function four!");
    },
    fetchCall() {
      window.setInterval(() => {
        fetch("http://localhost:3000/api")
          .then(response => response.json())
          .then();
      }, 2000);
    }
  }
}
