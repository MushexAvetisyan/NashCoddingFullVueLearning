<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Lesson1">Lesson-1-Template Syntax</router-link> |
      <router-link to="/Lesson2">Lesson-2-Attribute binding</router-link>|
      <router-link to="/Lesson3">Lesson-3-Conditional template rendering Directives v if, v else, v show</router-link>|
      <router-link to="/Lesson4">Lesson-4-Event Handling</router-link>|
      <router-link to="/Lesson5">Lesson-5-Attribute binding</router-link>|
      <router-link to="/Lesson6">Lesson-6-Attribute binding</router-link>|
      <router-link to="/Lesson7">Lesson-7-Attribute binding</router-link>|
      <router-link to="/Lesson8">Lesson-8-Attribute binding</router-link>|
      <router-link to="/Lesson9">Lesson-9-Attribute binding</router-link>|
      <router-link to="/Lesson10">Lesson-10-Attribute binding</router-link>|
      <router-link to="/Lesson11">Lesson-11-Attribute binding</router-link>|
      <router-link to="/Lesson12">Lesson-12-Attribute binding</router-link>|
      <router-link to="/Lesson13">Lesson-13-Attribute binding</router-link>|
      <router-link to="/Lesson14">Lesson-14-Attribute binding</router-link>|
      <router-link to="/Lesson15">Lesson-15-Attribute binding</router-link>|
      <router-link to="/Lesson16">Lesson-16-Attribute binding</router-link>|
      <router-link to="/Lesson17">Lesson-17-Attribute binding</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
* {
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  a {
    font-weight: bold;
    color: black;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
