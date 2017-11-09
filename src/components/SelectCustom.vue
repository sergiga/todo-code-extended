<template>
  <div class="select-container" v-click-outside="hideDropdown">
    <button
      class="select-btn select-dropdown-btn"
      @click="showDropdown">
        {{ selectedValue }}
      </button>
    <div :class="dropdownClass">
      <ul class="select-item-list">
        <li v-for="(option, i) in options"
          :key="option.id"
          class="select-item">
          <button class="select-btn" @click="selectedOption(option.id)">
            {{ option.value }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    options: Array,
  },
  data() {
    return {
      selectedItem: -1,
      isDropdownActive: false,
    };
  },
  computed: {
    selectedValue() {
      return this.selectedItem >= 0
        ? this.options[this.selectedItem].value
        : '...';
    },
    dropdownClass() {
      return this.isDropdownActive
        ? ['select-dropdown', 'is-active']
        : ['select-dropdown'];
    },
  },
  methods: {
    selectedOption(id) {
      this.selectedItem = id;
      this.hideDropdown();
      this.$emit('input', this.selectedItem);
    },
    showDropdown() {
      this.isDropdownActive = true;
    },
    hideDropdown() {
      this.isDropdownActive = false;
    },
  },
};
</script>

<style scoped>
.select-dropdown {
  display: none;
}

.select-dropdown.is-active {
  display: block;
}

.select-btn {
  display: block;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  color: #FFF;
  background-color: #2C3E50;
}

.select-btn:focus {
  outline: none;
}

.select-container {
  position: relative;
  margin-right: 10px;
}

.select-dropdown {
  position: absolute;
  right: 0;
  z-index: 10;
  min-width: 100px;
  background-color: #FFF;
}

.select-item-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: auto;
}

.select-item {
  margin: 5px 0;
}

.select-item button {
  text-align: left;
}
</style>
