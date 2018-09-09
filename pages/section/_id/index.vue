<template>
  <section>
    <h1>{{ websiteSection.name }}</h1>
    <b-list-group>
      <b-list-group-item
        v-for="item in content"
        :key="item.id"
        :to="'/content/' + item.id"
      >
        {{ item.name }}
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
import sectionPage from '../../../gql/pages/section.graphql';

export default {
  async asyncData({ app, params }) {
    const { apolloProvider } = app;
    const { defaultClient } = apolloProvider;

    // @todo For some reason the bootstrap.css.map file
    // is being passed as an ID... fix.
    const id = Number(params.id);
    const contentInput = {
      sectionId: id,
      pagination: { first: 10 },
    };
    const sectionInput = { id };
    const variables = { sectionInput, contentInput };

    if (id) {
      const query = sectionPage;
      return defaultClient.query({ query, variables }).then(res => res.data);
    }
    return {};
  },
  data() {
    return {
      title: 'Section',
    };
  },
  computed: {
    content() {
      return this.websiteScheduledPlatformContent.edges
        .map(edge => edge.node.content)
        .filter(c => c);
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
