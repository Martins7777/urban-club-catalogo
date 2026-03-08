// productos.js - Catálogo Consolidado de Urban Club

const footballProducts = [
    {
        id: 1,
        name: 'Real Madrid Blanca 24/25',
        price: 30.00,
        category: 'Camisetas',
        images: ['real_madrid_blanca.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'La equipación clásica del Rey de Europa. Tejido transpirable premium.'
    },
    {
        id: 2,
        name: 'Real Madrid Azul HP Edition',
        price: 30.00,
        category: 'Camisetas',
        images: ['real_madrid_azul.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Segunda equipación temporada 24/25 con detalles en blanco y patrocinio HP.'
    },
    {
        id: 3,
        name: 'Camiseta Alemania Retro',
        price: 30.00,
        category: 'Retro Edition',
        images: ['alemania_retro.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Diseño icónico inspirado en los grandes éxitos de la selección alemana.'
    },
    {
        id: 4,
        name: 'Juventus Local 24/25',
        price: 30.00,
        category: 'Camisetas',
        images: ['juventus_local.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Las tradicionales rayas bianconeri con un toque moderno.'
    },
    {
        id: 5,
        name: 'Adidas Vintage Stripe Verde',
        price: 30.00,
        category: 'Streetwear',
        images: ['adidas_vintage_verde.jpg'],
        sizes: ['S', 'M', 'L'],
        description: 'Camiseta de estilo casual con rayas verticales.'
    },
    {
        id: 6,
        name: 'Camiseta PSG Jordan',
        price: 30.00,
        category: 'Entrenamiento',
        images: ['camiseta_psg.jpg', 'camiseta_psg2.jpg', 'camiseta_psg3.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Sudadera técnica de entrenamiento Jordan x PSG en negro.'
    },
    {
        id: 7,
        name: 'Camiseta Real Madrid 25/26 Especial Red Player',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'real.madrid.especialredplayer.25-26.jpg',
            'real.madrid.especialredplayer.partetrasera_25-26.jpg',
            'Real.madrid.especialredplayer2.0.25-26.jpg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición Especial Red Player. Calidad premium con acabados profesionales.'
    },
    {
        id: 8,
        name: 'Camiseta Real Madrid 25/26 Black Orange',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'real.madrid.blackorange 25.26.png',
            'real.madrid.blackorange 2.0.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Diseño negro con detalles naranjas y estética agresiva.'
    },
    {
        id: 9,
        name: 'Polo Real Madrid Negro',
        price: 30.00,
        category: 'Streetwear',
        images: ['black.polo.realmadrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo de paseo en negro con estética minimalista y escudo del club.'
    },
    {
        id: 10,
        name: 'Camiseta Real Madrid Black Retro Edition 25/26',
        price: 30.00,
        category: 'Retro Edition',
        images: ['blackretroedition.25-26. realmadrid.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Versión retro en negro con patrón geométrico y detalles clásicos.'
    },
    {
        id: 11,
        name: 'Camiseta Real Madrid Blue Icon 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['blue.icon.realmadrid.25-26.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición azul de manga larga con inspiración lifestyle.'
    },
    {
        id: 12,
        name: 'Camiseta Real Madrid Azul',
        price: 30.00,
        category: 'Camisetas',
        images: ['cami_realmadrid_azul_1.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta azul del Real Madrid con detalles en blanco.'
    },
    {
        id: 13,
        name: 'Camiseta Real Madrid Blanca',
        price: 30.00,
        category: 'Camisetas',
        images: ['cami_realmadrid_blanca_1.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Versión blanca clásica con vivos en cuello y mangas.'
    },
    {
        id: 14,
        name: 'Camiseta Real Madrid Pink Player Edition 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'pink.player.edition.25-26 realmadrid.jpg',
            'pink.player.edition.realmadrid.partetrasera.25-26.jpg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Player Edition en rosa con patrón chevron y acabado premium.'
    },
    {
        id: 15,
        name: 'Polo Real Madrid Azul',
        price: 30.00,
        category: 'Streetwear',
        images: ['polo.blue.real madrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo azul de paseo con escudo frontal y look casual.'
    },
    {
        id: 16,
        name: 'Polo Real Madrid 25/26 Black',
        price: 30.00,
        category: 'Streetwear',
        images: ['polo.realmadrid.25-26black.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo negro 25/26 con branding frontal y estilo urbano.'
    },
    {
        id: 17,
        name: 'Polo Real Madrid 26/27 Retro',
        price: 30.00,
        category: 'Streetwear',
        images: ['polo_realmadrid_retro_26-27.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo estampado 26/27 con acabado premium y diseño exclusivo.'
    },
    {
        id: 18,
        name: 'Camiseta Real Madrid Purple Edition 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['purple.edition.25-26 realmadrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición morada 25/26 con patrón geométrico y detalles dorados.'
    },
    {
        id: 19,
        name: 'Camiseta Real Madrid Training 26/27',
        price: 30.00,
        category: 'Entrenamiento',
        images: ['trainning.26-27 real madrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de entrenamiento 26/27 en azul con detalles amarillos.'
    }
];

const gymProducts = [
    {
        id: 101,
        name: 'Pantalones Urban Tech Pro',
        price: 30.00,
        category: 'Pantalones Cortos',
        images: ['pantalones.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Pantalones cortos técnicos para máxima ventilación.'
    }
];