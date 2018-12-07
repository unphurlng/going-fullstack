<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="campground.name" require>
    </p>

    <p>
      <label>Forest:</label>
      <select v-if="forest"
        v-model="campground.forest"
        required
      >
        <option v-for="(display, key) in forest"
          :key="key"
          :value="key"
        >
          {{display}}
        </option>
      </select>
    </p>

    <p>
      <label>Season Open:</label>
      <input v-model="campground.season">
    </p>

    <p>
      <label>Number of Sites:</label>
      <input v-model="campground.sites" type="number">
    </p>

    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    onAdd: Function,
  },
  data() {
    return {
      name: '',
      forest: '',
      season: '',
      sites: 0,
    };
  },
  created() {
    this.forest = api.getForest();
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.campground);
    }
  }
};
</script>

<style>

</style>
