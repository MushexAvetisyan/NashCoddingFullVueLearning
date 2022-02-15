<template>
  <div class="hello">
    ---------------------------------------------
    <p><i>SIMPLE PRINT DATA</i></p>
    <h1>{{ name }}</h1>
    ---------------------------------------------
    <h2>Age: {{ age }}</h2>
    <h2>{{ age > 18 ? "Age = Your Are Adult" : "Age = You Are Young" }}</h2>

    <br>
    <br>
    <br>
    <p><i>PRINT OBJECT</i></p>
    ---------------------------------------------
    <h3>{{object}} -I Print object name its Wrong</h3>
    <h3>{{object.Age}} - I Print Age Data Inside The Object Its Right</h3>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
  data: () => ({
    name: "John",
    age: 18,
    object: {
      Age: 30
    }
  }),
};
</script>


<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
