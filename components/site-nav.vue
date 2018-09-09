<template>
  <b-navbar
    class="navbar-expand mb-3"
    type="dark"
    variant="dark"
    sticky
  >
    <b-navbar-brand to="/">Officer</b-navbar-brand>
    <b-navbar-nav class="mr-auto">
      <b-nav-item
        v-for="section in sections"
        :key="section.id"
        :to="'/sections/' + section.alias"
      >
        {{ section.name }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    sections: { type: Array, required: true },
  },
};
</script>
