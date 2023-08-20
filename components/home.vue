<script setup lang="ts">
const { data } = useFetch('/api/', {
  method: 'get',
  headers: {},
});
</script>

<template>
  <div>this is home page</div>
  <div>{{ data }}</div>
</template>
