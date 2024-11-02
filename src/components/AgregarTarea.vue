<template>
  <div class="card p-3 mb-3">
    <h4 class="mb-3">Agregar Tarea</h4>
    <div class="input-group">
      <input
        type="text"
        v-model="nuevaTarea"
        placeholder="Escribe una tarea"
        class="form-control"
      />
      <button @click="agregarTarea" class="btn btn-primary">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaTarea: '',
    };
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim()) {
        this.$emit('nueva-tarea', { title: this.nuevaTarea, completed: false });
        this.nuevaTarea = ''; // Limpia el campo después de agregar la tarea
      }
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
}

.btn-primary {
  background-color: #007bff;
}
</style>
