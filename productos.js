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
        id: 4,
        name: 'Juventus Local 24/25',
        price: 30.00,
        category: 'Camisetas',
        images: ['juventus_local.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Las tradicionales rayas bianconeri con un toque moderno.'
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
    },

    // --- COLABS ---
    {
        id: 20,
        name: 'Inter de Milan x Cruz Cafuné',
        price: 30.00,
        category: 'COLABS',
        images: [
            'inter de milan x cruz cafune.png',
            '2 inter de milan x cruz cafune.png',
            '2 me muevo con dios milanxcruz.png',
            'detras milan x cruz.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter de Milan x Cruz Cafuné.'
    },
    {
        id: 22,
        name: 'AC Milan x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: [
            'ac milan x bad bunny.png',
            'milan x bbad bunny.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AC Milan x Bad Bunny.'
    },
    {
        id: 23,
        name: 'AC Milan x Bryant Myers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'ac milan x bryant myers.png',
            'ac milan x bryant myers atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AC Milan x Bryant Myers.'
    },
    {
        id: 24,
        name: 'Almería x FVF',
        price: 30.00,
        category: 'COLABS',
        images: [
            'almeria x rvfv.png',
            'almeria x rvfv atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Almería x FVF.'
    },
    {
        id: 25,
        name: 'Anuel AA x Paris Saint Germain',
        price: 30.00,
        category: 'COLABS',
        images: [
            'anuel aa x paris saint germain.png',
            'por tras anuelxparis.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración PSG x Anuel AA.'
    },
    {
        id: 26,
        name: 'Anuel x Málaga',
        price: 30.00,
        category: 'COLABS',
        images: [
            'anuel x malaga.png',
            'anuel x malaga detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Málaga x Anuel.'
    },
    {
        id: 27,
        name: 'AS Roma x Noriel Trap Capos',
        price: 30.00,
        category: 'COLABS',
        images: ['as roma x noriel trap capos.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AS Roma x Noriel Trap Capos.'
    },
    {
        id: 28,
        name: 'Aston Villa x Feid Ferxo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'aston villa x feid ferxo.png',
            'aston villa x ferxo.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Aston Villa x Feid Ferxo.'
    },
    {
        id: 29,
        name: 'Atlético de Madrid x Cano',
        price: 30.00,
        category: 'COLABS',
        images: [
            'at madrid x cano.png',
            'at madrid x triana tour cano.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Atlético de Madrid x Cano.'
    },
    {
        id: 30,
        name: 'Atlético de Madrid x JC Reyes',
        price: 30.00,
        category: 'COLABS',
        images: ['at madrid x jc reyes.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Atlético de Madrid x JC Reyes.'
    },
    {
        id: 31,
        name: 'Athletic Club Bilbao x Mora',
        price: 30.00,
        category: 'COLABS',
        images: [
            'athletic club bilbao x mora.jpeg',
            'bilbao x mora.jpeg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Athletic Club Bilbao x Mora.'
    },
    {
        id: 32,
        name: 'Boca Juniors x Trueno Amarilla',
        price: 30.00,
        category: 'COLABS',
        images: [
            'b junior x trueno.png',
            'detras'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Trueno en variante amarilla.'
    },
    {
        id: 33,
        name: 'Barça x J Creyes',
        price: 30.00,
        category: 'COLABS',
        images: [
            'barca j reyes.png',
            'barca j reyes detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Barça x J Creyes.'
    },
    {
        id: 34,
        name: 'Bayer de Munich x Anuel AA',
        price: 30.00,
        category: 'COLABS',
        images: ['bayer de munich x anuel aa.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Bayer de Munich x Anuel AA.'
    },
    {
        id: 35,
        name: 'Bichota x Juventus',
        price: 30.00,
        category: 'COLABS',
        images: ['bichota x juventos.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Juventus x Bichota.'
    },
    {
        id: 36,
        name: 'Boca Juniors x Paulo Londra',
        price: 30.00,
        category: 'COLABS',
        images: ['boca junior x paulo londra.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Paulo Londra.'
    },
    {
        id: 37,
        name: 'Boca Juniors x Trueno Azul',
        price: 30.00,
        category: 'COLABS',
        images: [
            'boca junior x trueno.png',
            'trueno x boca junior.png',
            'detras bocaxtrueno.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Trueno en variante azul.'
    },
    {
        id: 38,
        name: 'Celta de Vigo x C Tangana',
        price: 30.00,
        category: 'COLABS',
        images: [
            'celta de vigo x c tangana.png',
            'detras ctangana celta.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Celta de Vigo x C Tangana.'
    },
    {
        id: 39,
        name: 'Celta de Vigo Black x C Tangana',
        price: 30.00,
        category: 'COLABS',
        images: ['celta vigo black x c tangana.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición black de la colaboración Celta de Vigo x C Tangana.'
    },
    {
        id: 40,
        name: 'Chelsea x Kid Keo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'chelsea x kid keo.png',
            'chelsea x kid keo atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Kid Keo.'
    },
    {
        id: 41,
        name: 'Chelsea x Mike Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'chelsea x mike towers.png',
            '23 mike towers chelsea.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Mike Towers.'
    },
    {
        id: 42,
        name: 'Chelsea x Rau Alejandrp',
        price: 30.00,
        category: 'COLABS',
        images: ['chelsea x rau alejandrp.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Rau Alejandrp.'
    },
    {
        id: 43,
        name: 'Delaossa x Málaga',
        price: 30.00,
        category: 'COLABS',
        images: ['malaga x delaossa.png', 'malaga x delaossa detras.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Málaga x Delaossa.'
    },
    {
        id: 44,
        name: 'Dellafuente x Madrid',
        price: 30.00,
        category: 'COLABS',
        images: ['dellafuente x madrid.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Madrid x Dellafuente.'
    },
    {
        id: 45,
        name: 'España x Topuria',
        price: 30.00,
        category: 'COLABS',
        images: [
            'españa x topuria.png',
            'el matadpr.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración España x Topuria.'
    },
    {
        id: 46,
        name: 'FC Barcelona x Travis Scott',
        price: 30.00,
        category: 'COLABS',
        images: [
            'fc barcelona x travis scott 2000 20001.png',
            'travis scott x fc b.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración FC Barcelona x Travis Scott.'
    },
    {
        id: 47,
        name: 'Flamengo x Dellafuente',
        price: 30.00,
        category: 'COLABS',
        images: [
            'flamengo x dellafuente.png',
            'flamengo por dellafuente.png',
            'flamengo x reels b.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Flamengo x Dellafuente.'
    },
    {
        id: 48,
        name: 'Gran Canarias x Quevedo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'gran canarias x quevedo.png',
            'gran canarias x quevedoo.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Gran Canarias x Quevedo.'
    },
    {
        id: 49,
        name: 'Granada x Saiko',
        price: 30.00,
        category: 'COLABS',
        images: [
            'granada x saiko.png',
            'saiko x granada.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Granada x Saiko.'
    },
    {
        id: 50,
        name: 'Inter de Miami x Jhayco',
        price: 30.00,
        category: 'COLABS',
        images: [
            'inter de miami x jhayco.png',
            'miami por jhayco.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter de Miami x Jhayco.'
    },
    {
        id: 51,
        name: 'Inter Miami x Myke Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'inter miami x myke towers.png',
            'miami myke towers.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter Miami x Myke Towers.'
    },
    {
        id: 52,
        name: 'Juventus x Karol G',
        price: 30.00,
        category: 'COLABS',
        images: ['juventus x karol g.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Juventus x Karol G.'
    },
    {
        id: 53,
        name: 'Madrid 25/26 x Dellafuente',
        price: 30.00,
        category: 'COLABS',
        images: ['madrid 25-26 x dellafuente.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Madrid 25/26 x Dellafuente.'
    },
    {
        id: 55,
        name: 'Manchester City x Ozuna',
        price: 30.00,
        category: 'COLABS',
        images: ['manchester cityx ozuna.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Manchester City x Ozuna.'
    },
    {
        id: 56,
        name: 'Pais x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: ['pais x bad bunny.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Pais x Bad Bunny.'
    },
    {
        id: 57,
        name: 'Paris x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: ['paris x bad bunny.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Paris x Bad Bunny.'
    },
    {
        id: 58,
        name: 'Real Madrid x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: ['real madrid x bad bunny.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Real Madrid x Bad Bunny.'
    },
    {
        id: 59,
        name: 'Selección USA x Travis Scott',
        price: 30.00,
        category: 'COLABS',
        images: [
            'seleccion usa x travis scott.png',
            'detras seleccion usa.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Selección USA x Travis Scott.'
    },
    {
        id: 60,
        name: 'Tenerife x Cruz Cafune',
        price: 30.00,
        category: 'COLABS',
        images: ['tenerife x cruz cafune.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Tenerife x Cruz Cafune.'
    },
    {
        id: 61,
        name: 'Tottenham x Mikke Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'totteham x mikke towers.png',
            'totteham x mikke towers detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Tottenham x Mikke Towers.'
    },
		{
    id: 62,
    name: 'Málaga Primera 25/26',
    price: 30.00,
    category: 'Camisetas',
    images: [
        'malaga primera 25-26.png'
    ],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Camiseta Málaga CF primera equipación temporada 25/26.'
},
{
    id: 63,
    name: 'Málaga Segunda 25/26',
    price: 30.00,
    category: 'Camisetas',
    images: [
        'malaga segunda 25-26.png'
    ],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Camiseta Málaga CF segunda equipación temporada 25/26.'
},
{
    id: 64,
    name: 'Málaga Tercera 25/26',
    price: 30.00,
    category: 'Camisetas',
    images: [
        'malaga tercera 25-26.png'
    ],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Camiseta Málaga CF tercera equipación temporada 25/26.'
},
{
    id: 65,
    name: 'Málaga Comic 25/26',
    price: 30.00,
    category: 'Camisetas',
    images: [
        'malaga comic 25-26.png'
    ],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Camiseta Málaga CF edición especial Comic 25/26.'
},
{
    id: 66,
    name: 'Málaga Sudadera Entrenamiento 25/26',
    price: 30.00,
    category: 'Entrenamiento',
    images: [
        'malaga sudadera entrenamiento 25-26.jpg',
        'malaga entrenamiento 2.jpg'
    ],
    sizes: ['S','M','L','XL','XXL'],
    description: 'Sudadera de entrenamiento Málaga CF temporada 25/26.'
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
    },
	{
        id: 102,
        name: 'Adidas Vintage Stripe Verde',
        price: 30.00,
        category: 'Streetwear',
        images: ['adidas_vintage_verde.jpg'],
        sizes: ['S', 'M', 'L'],
        description: 'Camiseta de estilo casual con rayas verticales.'
    }
];