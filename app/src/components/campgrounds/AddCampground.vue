<template>
  <form @submit.prevent="onAdd(campground)">
    <p>
      <label>Name:</label>
        <input v-model="campground.name" required>
    </p>

    <p>
      <label>Forest:</label>
      <select v-if="forest" v-model="campground.forest" required>
        <option v-for="(display, key) in forest"
          :key="key"
          :value="key"
        >
        {{display}}
        </option>
      </select>
    </p>

    <p>
      <label>Number of Sites:</label>
      <input v-model="campground.sites" type="number">
    </p>

    <p>
      <label>RV Waste:</label>
      <select v-if="forest" v-model="campground.rvwaste" required>
        <option v-for="(display, key) in rvwaste"
          :key="key"
          :value="key"
        >
        {{display}}
        </option>
      </select>
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
      campground: {
        name: '',
        forest: '',
        season: '',
        sites: 0,
        rvwaste: false
      }
    };
  },
  created() {
    this.forest = api.getForest();
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.campground)
        .then(() => {
          this.campground = { name: '' };
        });
    }
  }
};
</script>

<style>
button {
  margin: 10px;
}
</style>
