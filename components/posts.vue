<script setup lang="ts">
const { data } = useFetch('/api/posts', {
  method: 'get',
  headers: {},
});
</script>

<template>
  <div>this is posts page</div>
  <div>{{ data }}</div>
</template>
