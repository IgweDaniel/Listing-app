<template>
  <div class="accordion" ref="acc">
    <div class="title" ref="title">
      <div class="clickable accordion-action">
        <span class="icon" @click="toggleAccordion"
          ><i class="fas fa-plus-circle"></i
        ></span>
      </div>
      <div class="content">{{ title }}</div>
    </div>
    <div class="body" ref="body">{{ body }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showBody: false
  }),
  props: ["title", "body"],
  watch: {
    showBody(value) {
      const bodyHeight = this.$refs.body.getBoundingClientRect().height;
      const titleHeight = this.$refs.title.getBoundingClientRect().height;
      if (value === true) {
        this.$refs.acc.style.height = `${titleHeight + bodyHeight}px`;
      } else {
        this.$refs.acc.style.height = `${titleHeight}px`;
      }
    }
  },
  methods: {
    toggleAccordion() {
      this.showBody = !this.showBody;
    }
  }
};
</script>

<style scoped>
.accordion {
  background-color: #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
  height: 71px;
  transition: height 0.5s ease-in-out;
}
.accordion .title {
  padding: 25px;
  font-weight: bold;
  font-size: 15px;
  min-height: 71px;
  display: flex;
  color: #324456;
}
.accordion-action {
  width: 50px;
}
.accordion .body {
  min-height: 102px;
  /* height: 0; */

  padding: 40px;
  border-top: 1px solid #e6e6e6;
  color: #484848;
}
</style>
