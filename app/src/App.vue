<template>
  <div class="app">
    <header>
      <img src="./assets/tent2.png">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/campgrounds">Campgrounds</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 75px;
  background: rgb(144, 161, 127);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header img {
  height: 100%;
}

nav a {
  /* text-decoration: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
  border: 1px dashed rgb(41, 40, 40);
  margin: 5px;
  padding: 10px;
}

main {
  padding: 15px;
}
</style>
