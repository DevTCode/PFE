<template>

  <v-autocomplete
    v-model="selectedItem"
    :items="items"
    label="Search"
    placeholder="Type here to search"
    clearable
    hide-details
  />
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      items: [
        { text: 'Item 1', value: 1 },
        { text: 'Item 2', value: 2 },
        { text: 'Item 3', value: 3 },
      ],
    };
  },
};
</script>
