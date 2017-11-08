<template>
  <div id="app">
    <div class="header">
      <h1>¿Qué Hacer?</h1>
      <span class="header-version">versión extendida</span>
    </div>
    <todo-list />
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 60px 0 60px;
}

h1, .header-version {
  text-align: center;
}

.header h1 {
  margin-bottom: 0;
}

.header-version {
  display: block;
  margin-bottom: 20px;
  color: #AEAEAE;
}

@media (max-width: 768px) {
  #app {
    margin: 20px 10px 0px 10px;
  }
}
</style>
