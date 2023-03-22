let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];
  
  function dibujarTabla(productos) {
    console.log("Producto\tCategoria\tPrecio");
    productos.forEach(producto => console.log(`${producto.nombreProducto}\t${producto.categoria}\t\t${producto.precio}`));
  }
  
  // Mostrar la tabla completa
  console.log("Tabla completa:");
  dibujarTabla(listaProductos);
  
  // Filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada
  console.log("Tabla de protectores solares:");
  const protectoresSolares = listaProductos.filter(producto => producto.categoria === "Protector solar");
  dibujarTabla(protectoresSolares);
  
  // Buscar un producto serum y mostrarlo por pantalla
  console.log("Producto serum:");
  const serum = listaProductos.find(producto => producto.categoria === "Sérum");
  console.log(serum ? `${serum.nombreProducto}\t${serum.categoria}\t\t${serum.precio}` : "No se encontró ningún producto serum");
  
  // Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para
  