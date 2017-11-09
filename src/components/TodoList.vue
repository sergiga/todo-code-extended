<template>
  <div class="app-container">
    <div class="side-container">
      <filter-selector :filters="filters" @filterSelected="filterSelected" />
    </div>
    <div class="main-container">
      <todo-form @addTodo="addTodo" />
      <ul class="list-container">
        <li v-for="todo in filteredTodos"
          :key="todo.id"
          class="list-item">
          <input
            type="checkbox"
            :id="`completed-${ todo.id }`"
            class="completed"
            checked="false"
            v-model="todo.completed">
          <label :for="`completed-${ todo.id }`">
            <div class="box"></div>
          </label>
          <span class="todo-description">{{ todo.description }}</span>
          <select-custom v-model="todo.owner" :options="options"></select-custom>
          <button class="todo-action-remove" @click="removeTodo(todo.id)"></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoList from 'Base/TodoList';
import TodoForm from './TodoForm';
import FilterSelector from './FilterSelector';
import SelectCustom from './SelectCustom';

export default {
  name: 'todo-list-extended',
  extends: TodoList,
  components: {
    TodoForm,
    FilterSelector,
    SelectCustom,
  },
  data() {
    return {
      options: [
        { id: 0, value: 'Natxo' },
        { id: 1, value: 'Borja' },
        { id: 2, value: 'Sergio' },
        { id: 3, value: 'Nani' },
      ],
    };
  },
};
</script>