<template>
  <div>
    <site-nav :sections="sections" />
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
  data() {
    return {
      sections: [
        { id: 56179, name: 'Tactical', alias: 'tactical' },
        { id: 56208, name: 'Training & Careers', alias: 'training-careers' },
        { id: 56221, name: 'On The Street', alias: 'on-the-street' },
        { id: 56341, name: 'Investigations', alias: 'investigations' },
        { id: 56374, name: 'Command/HQ', alias: 'command-hq' },
        { id: 57444, name: 'Product Guide', alias: 'directory' },
      ],
    };
  },
};
</script>
