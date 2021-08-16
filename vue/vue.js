const vue = new Vue({
    el: '#app',
    data: {
        titulo: 'Tienda',
        tienda: [
            {nombre: 'Martillo', cantidad:34},
            {nombre: 'Pintura', cantidad:78},
            {nombre: 'Lapices', cantidad:197},
            {nombre: 'Tornillos', cantidad:51},
            {nombre: 'Ruedas de Autos', cantidad:0},
            {nombre: 'Papel Higienico', cantidad:93},
    ],
    nuevoItem: '',
    total: 0
  },
  methods: {
      agregarItem() {
          this.tienda.push({
            nombre: this.nuevoItem, cantidad: 50
          });
          this.nuevoItem = ''
      }
  },
  computed: {
      sumarItems() {
        this.total = 0;
        for(item of this.tienda) {
            this.total = this.total + item.cantidad;
        }
        return this.total;
      }
  }
});                  //// Script