// productos.js - Catálogo de Urban Club
// console.log("¡Archivo de productos cargado correctamente!");

const footballProducts = [
    { 
        id: 1, 
        name: 'Real Madrid Blanca 24/25', 
        price: 85.00, 
        category: 'Camisetas', 
        images: ['real_madrid_blanca.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'La equipación clásica del Rey de Europa. Tejido transpirable premium.'
    },
    { 
        id: 2, 
        name: 'Real Madrid Azul HP Edition', 
        price: 85.00, 
        category: 'Camisetas', 
        images: ['real_madrid_azul.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Segunda equipación temporada 24/25 con detalles en blanco y patrocinio HP.'
    },
    { 
        id: 3, 
        name: 'Camiseta Alemania Retro', 
        price: 75.00, 
        category: 'Retro Edition', 
        images: ['alemania_retro.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Diseño icónico inspirado en los grandes éxitos de la selección alemana.'
    },
    { 
        id: 4, 
        name: 'Juventus Local 24/25', 
        price: 80.00, 
        category: 'Camisetas', 
        images: ['juventus_local.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Las tradicionales rayas bianconeri con un toque moderno y detalles en rosa.'
    },
    { 
        id: 5, 
        name: 'Adidas Vintage Stripe Verde', 
        price: 65.00, 
        category: 'Streetwear', 
        images: ['adidas_vintage_verde.jpg'],
        sizes: ['S', 'M', 'L'],
        description: 'Camiseta de estilo casual con rayas verticales, ideal para el día a día.'
    },
    { 
        id: 6, 
        name: 'Camiseta PSG', 
        price: 70.00, 
        category: 'Entrenamiento', 
        images: ['camiseta_psg.jpg','camiseta_psg2.jpg','camiseta_psg3.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Sudadera técnica de entrenamiento Jordan x PSG en negro.'
    }
];

const gymProducts = [
    { 
        id: 101, 
        name: 'Pantalones Urban Tech Pro', 
        price: 29.99, 
        category: 'Pantalones Cortos', 
        images: ['pantalones.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Pantalones cortos técnicos perforados para máxima ventilación. Disponibles en Gris, Gris Oscuro, Negro y Beige.'
    },
    { 
        id: 102, 
        name: 'Zapatillas Metcon 9', 
        price: 139.00, 
        category: 'Zapatillas', 
        images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600'],
        sizes: ['41', '42', '43', '44', '45'],
        description: 'Estabilidad máxima para levantamiento de pesas y entrenamientos de alta intensidad.'
    }
];
