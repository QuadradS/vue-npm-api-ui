<template>
  <div v-if="this.getSelected()" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="this.selectPackage({p: null})" class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-gray-600 border-b text-3xl leading-6 pb-2.5" id="modal-headline">
                {{ this.getSelected().name }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Author:</strong> {{ this.getSelected().author?.name }}
                </p>
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Description:</strong> {{ this.getSelected().description }}
                </p>
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Date:</strong> {{ this.getSelected().date }}
                </p>
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Scope:</strong> {{ this.getSelected().scope }}
                </p>
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Version:</strong> {{ this.getSelected().version }}
                </p>
                <p class="text-sm text-gray-500 pb-1">
                  <strong>Publisher:</strong> {{ this.getSelected().publisher?.username }}
                  {{ this.getSelected().publisher?.email }}
                </p>
                <p class="text-sm text-gray-500 ">Links:</p>
                <span v-for="k in Object.keys(this.getSelected().links)" :key="k"
                      class="mr-1 text-sm text-gray-500 pb-1">
                  <a class="underline" target="_blank" :href="this.getSelected().links[k]">{{ k }}</a>
                </span>

              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="this.selectPackage({p: null})" type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'ContentModal',
  methods: {
    ...mapGetters({
      getSelected: 'packages/getSelected'
    }),
    ...mapMutations({
      selectPackage: 'packages/SELECT_PACKAGE'
    }),
  }
}
</script>
