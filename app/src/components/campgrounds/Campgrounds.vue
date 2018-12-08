<template>
  <section class="campgrounds">
    <h2>Oregon Campgrounds</h2>

    <AddCampground :onAdd="handleAdd"/>

    <ul v-if="campgrounds">
      <li v-for="campground in campgrounds" :key="campground.id">
        {{campground.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddCampground from './AddCampground';

export default {
  data() {
    return {
      campgrounds: null,
      error: null
    };
  },
  components: {
    AddCampground
  },
  created() {
    api.getCampgrounds()
      .then(campgrounds => {
        this.campgrounds = campgrounds;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(campground) {
      return api.addCampground(campground)
        .then(saved => {
          this.students.push(saved);
        });
    }
  }
};
</script>

<style lang="postcss" scoped>

</style>
