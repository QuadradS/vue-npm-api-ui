<template>
  <div class="bg-gray-50 rounded p-2.5 border cursor-pointer hover:shadow-xl" @click="this.handleSelect">
    <div class="border-b mb-2.5">
      <h2 class="text-2xl">{{ package.name }}</h2>
    </div>
    <div style="min-height: 150px; overflow: hidden">
      {{ package.description }}
    </div>

    <div class="border-t my-2.5">
      <div><strong>Author:</strong> {{ package?.author?.name }}</div>
      <div><strong>Version</strong>: {{ package.version }}</div>
      <div><strong>Scope</strong>: {{ package.scope }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    package: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSelect() {
      this.$emit('onSelect', {p: this.package.name})
    }
  }
}
</script>
