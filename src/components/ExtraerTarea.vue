<template>
  <div class="card p-3 mb-3">
    <h4>Extraer Tareas de la API</h4>
    <button @click="obtenerTareas" class="btn btn-secondary">Obtener Tareas</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async obtenerTareas() {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        this.$emit('agregar-tareas-api', response.data.todos);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      }
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #e9ecef;
}
</style>

