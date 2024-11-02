<template>
  <div id="app">
    <h1>Gestor de Tareas</h1>
    <!-- Componente para añadir nuevas tareas -->
    <AgregarTarea @nuevaTarea="agregarTarea" />
    
    <!-- Lista de tareas, pasando cada tarea a un componente TodoItem -->
    <ul>
      <TodoItem
        v-for="(tarea, index) in tareas"
        :key="index"
        :tarea="tarea"
        @eliminarTarea="eliminarTarea(index)"
        @actualizarTarea="actualizarEstado(index)"
      />
    </ul>
  </div>
</template>

<script>
import AgregarTarea from './components/AgregarTarea.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    AgregarTarea,
    TodoItem,
  },
  data() {
    return {
      tareas: [], // Aquí almacenamos las tareas
    };
  },
  methods: {
    agregarTarea(texto) {
      this.tareas.push({ texto, completada: false });
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    },
    actualizarEstado(index) {
      this.tareas[index].completada = !this.tareas[index].completada;
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
