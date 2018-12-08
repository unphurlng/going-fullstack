<template>
  <form @submit.prevent="onAdd(campground)">
    <input v-model="campground.name" require>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      campground: {
        name: ''
        forest: '',
        season: '',
        sites: '',
      }
    };
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
