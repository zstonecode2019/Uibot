<template>
  <div class="name">
    {{ name }}
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "UiBot Commander1",
    },
  },
  methods: {},
  created() {
      setTimeout(() => {
          alert('hello UiBot')
      }, 1000)
  }
};
</script>
