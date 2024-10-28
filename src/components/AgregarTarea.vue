<template>
  <div class="card p-3 mb-3">
    <h4>Agregar Tarea</h4>
    <div class="input-group mb-3">
      <input type="text" v-model="nuevaTarea" placeholder="Escribe una tarea" class="form-control">
      <button @click="agregarTarea" class="btn btn-primary">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaTarea: ''
    };
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim()) {
        this.$emit('nueva-tarea', { title: this.nuevaTarea, completed: false });
        this.nuevaTarea = '';
      }
    }
  }
};
</sc
