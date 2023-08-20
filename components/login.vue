<script setup lang="ts">
const { data } = useFetch('/api/login', {
  method: 'post',
  headers: {},
});
</script>

<template>
  <div>this is login page</div>
  <div>{{ data }}</div>
</template>
