<template>
  <main>
    <h1>Home</h1>
    <ul>
      <li><nuxt-link to="/article">Article</nuxt-link></li>
    </ul>
  </main>
</template>


<script>
export default {
  head() {
    return {
      title: 'Home',
    };
  },
};
</script>
