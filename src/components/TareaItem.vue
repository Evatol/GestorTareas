<template>
  <div class="card p-2 mb-1">
    <div class="d-flex justify-content-between">
      <span>{{ tarea.title }}</span>
      <i :class="['bi', tarea.completed ? 'bi-check-circle-fill' : 'bi-circle']"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tarea']
};
</script>
