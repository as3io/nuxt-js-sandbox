<template>
  <div>
    <site-nav />
    <b-container>
      <b-row>
        <b-col>
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SiteNav from '../components/site-nav.vue';

export default {
  components: {
    SiteNav,
  },
};
</script>
