// Código Mikali - Menú y Promociones Actualizado
function Mikali() {
    this.config = {
        nombre: "Mikali - Tu Asistente de Menú",
        version: "1.2.0",
        estado: "activo",
        prefijo: "!",
        idioma: "es"
    };

    this.mensajeBienvenida = function() {
        return "🍗 ¡Bienvenido! Conoce nuestras deliciosas opciones y promociones 👇";
    };

    this.mostrarMenu = function() {
        return `
📢 *PROMOCIÓN ESPECIAL*:
💲 Precio normal del pollo: $34.000
✅ Precio promoción: *$40.000*
🎁 ¡POR LA COMPRA TE OBSEQUIAMOS MEDIO POLLO! 🤩

🥣 *Sopas del día*:
- Sopita de menudencias
- Sopita de mondongo
- Sopita de ajiaco

🍱 *Bandejitas ($16.000 c/u)*:
Incluye: arrocito, principio, ensaladita + 1 cuartico de pollo 🤤

🥤 *Bebidas*:
- Productos Postobón
- Coca Cola
- Cervecita fría 🍻
        `;
    };

    this.procesarComando = function(comando) {
        switch(comando.toLowerCase()) {
            case "ayuda":
                return "📋 Comandos: !menu, !promo, !bebidas, !info";
            case "menu":
                return this.mostrarMenu();
            case "promo":
                return "🔥 PRECIO NORMAL $34.000 | PROMO $40.000 → ¡TE OBSEQUIAMOS MEDIO POLLO! 🎁";
            case "bebidas":
                return "🥤 Tenemos: Postobón, Coca Cola y Cervecita 🍻";
            case "info":
                return ℹ️ ${this.config.nombre} | Versión: ${this.config.version};
            default:
                return "❌ Comando no reconocido. Escribe !ayuda para ver opciones.";
        }
    };
}

// Inicializar Mikali
const mikali = new Mikali();
console.log(mikali.mensajeBienvenida());
console.log(mikali.mostrarMenu());