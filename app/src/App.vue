<template>
  <div id="app">
    <Home/>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/campgrounds">Campgrounds</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
import Home from './components/home/Home';

export default {
  components: {
    Home
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
