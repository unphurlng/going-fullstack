<template>
  <ul v-if="campgrounds">
    <li v-for="campground in campgrounds" :key="campground.id">
      {{campground.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    campgrounds: null
  }
};
</script>

<style>

</style>
