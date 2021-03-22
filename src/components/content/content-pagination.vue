<template>
  <div class="grid grid-cols-5 max-w-xs mx-auto my-2.5">
    <div>
      <button @click="this.handleChangePage(currentPage - 2)" v-if="currentPage > 2"
              class="mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded">{{ currentPage - 2 }}
      </button>
    </div>
    <div>
      <button @click="this.handleChangePage(currentPage - 1)" v-if="currentPage > 1"
              class="mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded">{{ currentPage - 1 }}
      </button>
    </div>
    <div>
      <button
          class="mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded bg-gray-200">
        {{ currentPage }}
      </button>
    </div>
    <div>
      <button @click="this.handleChangePage(currentPage + 1)"
              class="mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded">{{ currentPage + 1 }}
      </button>
    </div>
    <div>
      <button @click="this.handleChangePage(currentPage + 2)"
              class="mx-auto block text-center text-blue-600 px-2.5 bg-gray-50 border rounded">{{ currentPage + 2 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentPagination',
  props: {
    total: Number,
  },
  data() {
    return {
      currentPage: 1,
      pagesCount: Math.floor(this.total / 10)
    }
  },
  methods: {
    handleChangePage(page = 1) {
      this.$emit('onChangePage', page)
      this.currentPage = page
    }
  }
}
</script>
