<template>
  <section class="campgrounds">
    <h2>Oregon Campgrounds Listing</h2>

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
// import CampgroundList from './CampgroundList';

export default {
  data() {
    return {
      campgrounds: null,
      error: null
    };
  },
  components: {
    AddCampground,
    // CampgroundList
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
          this.campgrounds.push(saved);
        });
    }
  }
};
</script>

<style> 

</style>
