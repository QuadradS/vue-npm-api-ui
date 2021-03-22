<template>

  <div v-if="!this.getAllPackages().length" class="w-full my-2.5 py-2.5">
    <h2 class="text-center text-3xl text-gray-500">There is nothing</h2>
  </div>

  <div v-if="this.getAllPackages().length" class="w-full my-2.5 py-2.5">
    <div class="p-2.5 bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <content-card @onSelect="selectPackage" v-for="p in this.getAllPackages()" :package="p.package"
                    :key="p.package.name"></content-card>
    </div>
    <content-pagination @onChangePage="handleChangePage" :total="this.getTotal()"></content-pagination>
    <content-modal></content-modal>
  </div>
</template>

<script>

import ContentCard from './content-card.vue'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import ContentPagination from './content-pagination.vue'
import ContentModal from './content-modal'

export default {
  name: 'Content',
  components: {
    ContentCard,
    ContentPagination,
    ContentModal
  },
  methods: {
    handleChangePage(page) {
      this.changePage({page})
    },
    ...mapActions({
      changePage: 'packages/changePage'
    }),
    ...mapMutations({
      selectPackage: 'packages/SELECT_PACKAGE'
    }),
    ...mapGetters({
      getAllPackages: 'packages/getPackages',
      getTotal: 'packages/getTotal'
    }),
  }
}
</script>
