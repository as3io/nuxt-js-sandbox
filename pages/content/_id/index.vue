<template>
  <article>
    <h1>{{ platformContent.name }}</h1>
    <hr>
    <h5>{{ platformContent.teaser }}</h5>
    <hr>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="platformContent.body" />
  </article>
</template>

<script>
import contentPage from '../../../gql/pages/content.graphql';

export default {
  async asyncData({ app, params }) {
    const { apolloProvider } = app;
    const { defaultClient } = apolloProvider;

    // @todo For some reason the bootstrap.css.map file
    // is being passed as an ID... fix.
    const id = Number(params.id);
    const input = { id };
    const variables = { input };

    if (id) {
      const query = contentPage;
      return defaultClient.query({ query, variables }).then(res => res.data);
    }
    return {};
  },
  head() {
    return {
      title: this.platformContent.name,
    };
  },
};
</script>
