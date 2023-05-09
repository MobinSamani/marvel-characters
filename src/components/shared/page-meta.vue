<template>
  <Head>
    <Title v-if="title"> | {{ title }}</Title>
    <Meta v-if="description" name="description" :content="description" />
  </Head>
</template>

<script>
export default {
  name: "PageMeta",
  props: {
    title: String,
    description: String
  }
};
</script>
