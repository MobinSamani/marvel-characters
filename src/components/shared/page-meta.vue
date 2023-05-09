<template>
  <Head>
    <Title v-if="title"> | {{ title }}</Title>
    <Meta v-if="description" name="description" :content="description" />
    <Meta name="og:url" :content="`${$config.appUrl}${$route.fullPath}`" />
    <Link rel="canonical" :href="`${$config.appUrl}${$route.fullPath}`" />
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
