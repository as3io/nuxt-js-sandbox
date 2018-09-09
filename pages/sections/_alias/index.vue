<template>
  <section>
    <h1>Section</h1>
    <ul>
      <li><nuxt-link to="/article">Article</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Section',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
