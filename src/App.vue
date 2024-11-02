<template>
  <div id="app" class="container my-4">
    <h1 class="text-center mb-4">Gestor de Tareas</h1>
    
    <!-- Componente para agregar una nueva tarea -->
    <AgregarTarea @nueva-tarea="agregarTarea" />

    <!-- Componente para extraer tareas desde la API -->
    <ExtraerTareas @agregar-tareas-api="agregarTareasApi" />

    <!-- Lista de tareas -->
    <ul class="list-group mt-3">
      <TodoItem
        v-for="(tarea, index) in tareas"
        :key="index"
        :tarea="tarea"
        @eliminar-tarea="eliminarTarea(index)"
        @actualizar-estado="actualizarEstado(index)"
      />
    </ul>
  </div>
</template>

<script>
import AgregarTarea from './components/AgregarTarea.vue';
import ExtraerTareas from './components/ExtraerTareas.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    AgregarTarea,
    ExtraerTareas,
    TodoItem,
  },
  data() {
    return {
      tareas: [], // Lista principal de tareas
    };
  },
  methods: {
    agregarTarea(nuevaTarea) {
      this.tareas.push(nuevaTarea); // Agrega una tarea nueva
    },
    agregarTareasApi(tareasApi) {
      this.tareas = [...this.tareas, ...tareasApi]; // Añade tareas obtenidas de la API
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1); // Elimina una tarea específica
    },
    actualizarEstado(index) {
      this.tareas[index].completed = !this.tareas[index].completed; // Cambia el estado de completado
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
