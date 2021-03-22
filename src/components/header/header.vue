<template>
  <header class="w-full border-b border-gray-200 p-2.5">
    <form @submit.prevent="this.handleSubmit">
      <input placeholder="Search packages" required v-model="value" class="rounded border-2 px-1.5 py-0.5" type="text"/>
      <button
          type="submit"
          class="bg-blue-500 rounded px-2.5 font-light ml-1.5 py-0.5 text-white"
          aria-expanded="false">
        Search
      </button>
    </form>
  </header>

</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: 'Header',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleSubmit() {
      this.getPackages({q: this.value})
      this.setValue({value: this.value})
    },
    ...mapActions({
      getPackages: 'packages/loadPackages',
    }),
    ...mapMutations({
      setValue: 'packages/SET_VALUE'
    })
  }
}
</script>
