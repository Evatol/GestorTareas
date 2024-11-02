<template>
  <div class="card p-2 mb-1">
    <div class="d-flex justify-content-between align-items-center">
      <!-- Título de la tarea y el icono de completado -->
      <span
        :class="{ 'text-decoration-line-through': tarea.completed }"
        @click="cambiarEstado"
        style="cursor: pointer;"
      >
        {{ tarea.title }}
      </span>
      
      <!-- Iconos de estado y eliminación -->
      <div>
        <i
          :class="['bi', tarea.completed ? 'bi-check-circle-fill text-success' : 'bi-circle']"
          @click="cambiarEstado"
          style="cursor: pointer; margin-right: 10px;"
        ></i>
        <i class="bi bi-trash text-danger" @click="eliminarTarea" style="cursor: pointer;"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tarea'],
  methods: {
    cambiarEstado() {
      this.$emit('actualizar-estado'); // Emite evento para actualizar el estado de completado
    },
    eliminarTarea() {
      this.$emit('eliminar-tarea'); // Emite evento para eliminar la tarea
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>

