<template>
  <li class="list-group-item d-flex align-items-center">
    <input
      type="checkbox"
      v-model="tarea.completed"
      @change="actualizarEstado"
      class="form-check-input me-2"
    />
    <span :class="{ completada: tarea.completed }">{{ tarea.title }}</span>
    <button @click="eliminarTarea" class="btn btn-danger btn-sm ms-auto">Eliminar</button>
  </li>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  methods: {
    actualizarEstado() {
      this.$emit('actualizar-estado'); // Emite un evento para actualizar el estado de la tarea
    },
    eliminarTarea() {
      this.$emit('eliminar-tarea'); // Emite un evento para eliminar la tarea
    },
  },
};
</script>

<style scoped>
/* Estilos para tareas completadas */
.completada {
  text-decoration: line-through;
  color: gray;
}

/* Estilo del botón de eliminar */
.btn-danger {
  background-color: #dc3545;
}
</style>
