const app = new Vue({
  el: "#root",
  data: {
    todos: [
      {
        text: "Fare la spesa",
        done: false,
        visible: true,
      },
      {
        text: "Fare l'esercizio di pomeriggio",
        done: true,
        visible: true,
      },
      {
        text: "Seguire il recap",
        done: false,
        visible: true,
      },
      {
        text: "Dare da mangiare ai gatti",
        done: true,
        visible: true,
      },
    ],
    newTodo: "",
    search: "",
  },
  methods: {
    addTodo: function () {
      const trimmedString = this.newTodo.trim();
      if (trimmedString.length > 2) {
        const newObj = {
            text: this.newTodo,
            done: false,
            visible: true
        }
        this.todos.push(newObj);
        this.newTodo = "";
      }
    },
    removeTodo: function (index) {
      console.log("remove", index);
      this.todos.splice(index, 1);
    },
    toggleDone: function (index) {
      const clickedTodo = this.todos[index];
      // Inverto il valore
      clickedTodo.done = !clickedTodo.done;
    },
    filterTodos: function () {
      console.log(this.search);
      // Scorro l'array di todo
      // Per ogni elmento
      // se il text contiene il search,
      // visible diventa true
      // altrimenti
      //visible diventa false
      this.todos.forEach((item) => {
        const formattedText = item.text.toLowerCase();
        const formattedSearch = this.search.toLowerCase();
        if (formattedText.includes(formattedSearch)) {
          item.visible = true;
        } else {
          item.visible = false;
        }
      });
    },
  },
});
