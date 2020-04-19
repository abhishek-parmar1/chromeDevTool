export default {
  data() {
    return {
      pageTitleElement: null,
      domBreakpoint: null
    }
  },
  mounted() {
    this.pageTitleElement = document.getElementById("Page-title");
    this.domBreakpoint = document.querySelector(".Dom-breakpoint");

    window.setInterval(this.toggleBorder, 1000);

    this.pageTitleElement.addEventListener(
      "mouseover",
      this.changeTitle,
      false
    );
    this.pageTitleElement.addEventListener("mouseout", this.resetTitle, false);
  },
  methods: {
    changeTitle() {
      this.pageTitle = "Hovered Over";
    },
    resetTitle() {
      this.pageTitle = this.componentData.pageTitle;
    },
    toggleBorder() {
      if (this.domBreakpoint) { // remove this check
        if (this.domBreakpoint.classList.contains("Red-border")) {
          this.domBreakpoint.classList.remove("Red-border");
          this.domBreakpoint.classList.add("Blue-border");
        } else {
          this.domBreakpoint.classList.remove("Blue-border");
          this.domBreakpoint.classList.add("Red-border");
        }
      }
    }
  },
  beforeDestroy() {
    this.pageTitleElement.removeEventListener(
      "mouseover",
      this.changeTitle,
      false
    );
    this.pageTitleElement.removeEventListener(
      "mouseout",
      this.resetTitle,
      false
    );
  }
}