// productos.js - Catálogo Consolidado de Urban Club

const footballProducts = [
    {
        name: 'Real Madrid primera 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/real_madrid_primera.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'La equipación clásica del Rey de Europa. Tejido transpirable premium.'
    },
	{
        name: 'Real Madrid segunda 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/real_madrid_segunda.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Segunda equipación temporada 25/26 con detalles en blanco y patrocinio HP.'
    },
	{
        name: 'Real Madrid tercera 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/real_madrid_tercera.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Tercera equipación temporada 25/26 con detalles en blanco y patrocinio HP.'
    },
	{
        name: 'Real Madrid kids 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/real_madrid_kids.jpg'],
        sizes: ['M', 'L', 'XL'],
        description: 'Tercera equipación temporada 25/26 con detalles en blanco y patrocinio HP.'
    },
	{
		name: 'Barcelona FC Primera 25/26',
		price: 30.00,
		category: 'Camisetas',
		images: [
			'TODO FUTBOL/Barcelona FC/barca_primera.JPG',
			'TODO FUTBOL/Barcelona FC/barca_primera_2.JPG'
		],
		sizes: ['S','M','L','XL','XXL'],
		description: 'Camiseta FC Barcelona primera equipación 25/26.'
	},
	{
		name: 'Barcelona FC Segunda 25/26',
		price: 30.00,
		category: 'Camisetas',
		images: [
			'TODO FUTBOL/Barcelona FC/barca_segunda.JPG',
			'TODO FUTBOL/Barcelona FC/barca_segunda_2.JPG'
		],
		sizes: ['S','M','L','XL','XXL'],
		description: 'Camiseta FC Barcelona segunda equipación 25/26.'
	},
	{
		name: 'Barcelona FC Tercera 25/26',
		price: 30.00,
		category: 'Camisetas',
		images: [
			'TODO FUTBOL/Barcelona FC/barca_tercera_2.JPG',
			'TODO FUTBOL/Barcelona FC/barca_tercera.JPG'
		],
		sizes: ['S','M','L','XL','XXL'],
		description: 'Camiseta FC Barcelona tercera equipación 25/26.'
	},
	{
		name: 'Barcelona FC kids 25/26',
		price: 30.00,
		category: 'Camisetas',
		images: ['TODO FUTBOL/Barcelona FC/barca_kids.JPG'],
		sizes: ['S','M','L','XL','XXL'],
		description: 'Camiseta FC Barcelona kids equipación 25/26.'
	},
    {
        name: 'Camiseta Real Madrid 25/26 Especial Red Player',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Real Madrid CF/real.madrid.especialredplayer.25-26.jpg',
            'TODO FUTBOL/Real Madrid CF/real.madrid.especialredplayer.partetrasera_25-26.jpg',
            'TODO FUTBOL/Real Madrid CF/Real.madrid.especialredplayer2.0..25-26.jpg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición Especial Red Player. Calidad premium con acabados profesionales.'
    },
    {
        name: 'Camiseta Real Madrid 25/26 Black Orange',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Real Madrid CF/real.madrid.blackorange 25.26.png',
            'TODO FUTBOL/Real Madrid CF/real.madrid.blackorange 2.0.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Diseño negro con detalles naranjas y estética agresiva.'
    },
    {
        name: 'Polo Real Madrid Negro',
        price: 30.00,
        category: 'Streetwear',
        images: ['TODO FUTBOL/Real Madrid CF/black.polo.realmadrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo de paseo en negro con estética minimalista y escudo del club.'
    },
    {
        name: 'Camiseta Real Madrid Black Retro Edition 25/26',
        price: 30.00,
        category: 'Retro Edition',
        images: ['TODO FUTBOL/Real Madrid CF/blackretroedition.25-26. realmadrid.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Versión retro en negro con patrón geométrico y detalles clásicos.'
    },
    {
        name: 'Camiseta Real Madrid Blue Icon 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/blue.icon.realmadrid.25-26.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición azul de manga larga con inspiración lifestyle.'
    },
    {
        name: 'Camiseta Real Madrid Blanca',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/cami_realmadrid_blanca_1.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Versión blanca clásica con vivos en cuello y mangas.'
    },
    {
        name: 'Camiseta Real Madrid Pink Player Edition 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Real Madrid CF/pink.player.edition.25-26 realmadrid.jpg',
            'TODO FUTBOL/Real Madrid CF/pink.player.edition.realmadrid.partetrasera.25-26.jpg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Player Edition en rosa con patrón chevron y acabado premium.'
    },
    {
        name: 'Polo Real Madrid Azul',
        price: 30.00,
        category: 'Streetwear',
        images: ['TODO FUTBOL/Real Madrid CF/polo.blue.real madrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo azul de paseo con escudo frontal y look casual.'
    },
    {
        name: 'Polo Real Madrid 25/26 Black',
        price: 30.00,
        category: 'Streetwear',
        images: ['TODO FUTBOL/Real Madrid CF/polo.realmadrid.25-26black.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo negro 25/26 con branding frontal y estilo urbano.'
    },
    {
        name: 'Polo Real Madrid 26/27 Retro',
        price: 30.00,
        category: 'Streetwear',
        images: ['TODO FUTBOL/Real Madrid CF/polo_realmadrid_retro_26-27.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Polo estampado 26/27 con acabado premium y diseño exclusivo.'
    },
    {
        name: 'Camiseta Real Madrid Purple Edition 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Real Madrid CF/purple.edition.25-26 realmadrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición morada 25/26 con patrón geométrico y detalles dorados.'
    },
    {
        name: 'Camiseta Real Madrid Training 26/27',
        price: 30.00,
        category: 'Entrenamiento',
        images: ['TODO FUTBOL/Real Madrid CF/trainning.26-27 real madrid.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de entrenamiento 26/27 en azul con detalles amarillos.'
    },
    {
        name: 'Camiseta Real Madrid Mandala',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Real Madrid CF/madrid.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta Real Madrid edición especial con diseño mandala.'
    },

    // --- COLABS ---
    {
        name: 'Inter de Milan x Cruz Cafuné',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/inter de milan x cruz cafune.png',
            'TODO FUTBOL/Colabs/2 inter de milan x cruz cafune.png',
            'TODO FUTBOL/Colabs/2 me muevo con dios milanxcruz.png',
            'TODO FUTBOL/Colabs/detras milan x cruz.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter de Milan x Cruz Cafuné.'
    },
    {
        name: 'AC Milan x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/ac milan x bad bunny.png',
            'TODO FUTBOL/Colabs/milan x bbad bunny.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AC Milan x Bad Bunny.'
    },
    {
        name: 'AC Milan x Bryant Myers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/ac milan x bryant myers.png',
            'TODO FUTBOL/Colabs/ac milan x bryant myers atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AC Milan x Bryant Myers.'
    },
    {
        name: 'Almería x FVF',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/almeria x rvfv.png',
            'TODO FUTBOL/Colabs/almeria x rvfv atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Almería x FVF.'
    },
    {
        name: 'Anuel AA x Paris Saint Germain',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/anuel aa x paris saint germain.png',
            'TODO FUTBOL/Colabs/por tras anuelxparis.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración PSG x Anuel AA.'
    },
    {
        name: 'AS Roma x Noriel Trap Capos',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/as roma x noriel trap capos.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración AS Roma x Noriel Trap Capos.'
    },
    {
        name: 'Aston Villa x Feid Ferxo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/aston villa x feid ferxo.png',
            'TODO FUTBOL/Colabs/aston villa x ferxo.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Aston Villa x Feid Ferxo.'
    },
    {
        name: 'Atlético de Madrid x Cano',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/at madrid x cano.png',
            'TODO FUTBOL/Colabs/at madrid x triana tour cano.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Atlético de Madrid x Cano.'
    },
    {
        name: 'Atlético de Madrid x JC Reyes',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/at madrid x jc reyes.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Atlético de Madrid x JC Reyes.'
    },
    {
        name: 'Athletic Club Bilbao x Mora',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/athletic club bilbao x mora.jpeg',
            'TODO FUTBOL/Colabs/bilbao x mora.jpeg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Athletic Club Bilbao x Mora.'
    },
    {
        name: 'Boca Juniors x Trueno Amarilla',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/b junior x trueno.png',
            'detras'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Trueno en variante amarilla.'
    },
    {
        name: 'Barça x J Creyes',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/barca j reyes.png',
            'TODO FUTBOL/Colabs/barca j reyes detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Barça x J Creyes.'
    },
    {
        name: 'Bayer de Munich x Anuel AA',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/bayer de munich x anuel aa.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Bayer de Munich x Anuel AA.'
    },
    {
        name: 'Bichota x Juventus',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/bichota x juventos.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Juventus x Bichota.'
    },
    {
        name: 'Boca Juniors x Paulo Londra',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/boca junior x paulo londra.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Paulo Londra.'
    },
    {
        name: 'Boca Juniors x Trueno Azul',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/boca junior x trueno.png',
            'TODO FUTBOL/Colabs/trueno x boca junior.png',
            'TODO FUTBOL/Colabs/detras bocaxtrueno.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Boca Juniors x Trueno en variante azul.'
    },
    {
        name: 'Celta de Vigo x C Tangana',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/celta de vigo x c tangana.png',
            'TODO FUTBOL/Colabs/detras ctangana celta.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Celta de Vigo x C Tangana.'
    },
    {
        name: 'Celta de Vigo Black x C Tangana',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/celta vigo black x c tangana.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Edición black de la colaboración Celta de Vigo x C Tangana.'
    },
    {
        name: 'Chelsea x Kid Keo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/chelsea x kid keo.png',
            'TODO FUTBOL/Colabs/chelsea x kid keo atras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Kid Keo.'
    },
    {
        name: 'Chelsea x Mike Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/chelsea x mike towers.png',
            'TODO FUTBOL/Colabs/23 mike towers chelsea.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Mike Towers.'
    },
    {
        name: 'Chelsea x Rau Alejandrp',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/chelsea x rau alejandrp.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Chelsea x Rau Alejandrp.'
    },
    {
        name: 'Dellafuente x Madrid',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/dellafuente x madrid.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Madrid x Dellafuente.'
    },
    {
        name: 'España x Topuria',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/españa x topuria.png',
            'TODO FUTBOL/Colabs/el matadpr.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración España x Topuria.'
    },
    {
        name: 'FC Barcelona x Travis Scott',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/fc barcelona x travis scott 2000 20001.png',
            'TODO FUTBOL/Colabs/travis scoot x fc b.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración FC Barcelona x Travis Scott.'
    },
    {
        name: 'Flamengo x Dellafuente',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/flamengo x dellafuente.png',
            'TODO FUTBOL/Colabs/flamengo por dellafuente.png',
            'TODO FUTBOL/Colabs/flamengo x reels b.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Flamengo x Dellafuente.'
    },
    {
        name: 'Gran Canarias x Quevedo',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/gran canarias x quevedo.png',
            'TODO FUTBOL/Colabs/gran canarias x quevedoo.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Gran Canarias x Quevedo.'
    },
    {
        name: 'Granada x Saiko',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/granada x saiko.png',
            'TODO FUTBOL/Colabs/saiko x granada.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Granada x Saiko.'
    },
    {
        name: 'Inter de Miami x Jhayco',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/inter de miami x jhayco.png',
            'TODO FUTBOL/Colabs/miami por jhayco.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter de Miami x Jhayco.'
    },
    {
        name: 'Inter Miami x Myke Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/inter miami x myke towers.png',
            'TODO FUTBOL/Colabs/miami myke towers.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Inter Miami x Myke Towers.'
    },
    {
        name: 'Juventus x Karol G',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/juventus x karol g.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Juventus x Karol G.'
    },
    {
        name: 'Madrid 25/26 x Dellafuente',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/madrid 25-26 x dellafuente.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Madrid 25/26 x Dellafuente.'
    },
    {
        name: 'Manchester City x Ozuna',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/manchester cityx ozuna.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Manchester City x Ozuna.'
    },
    {
        name: 'Paris x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/paris x bad bunny.png','TODO FUTBOL/Colabs/pais x bad bunny.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Paris x Bad Bunny.'
    },
    {
        name: 'Real Madrid x Bad Bunny',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/real madrid x bad bunny.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Real Madrid x Bad Bunny.'
    },
    {
        name: 'Selección USA x Travis Scott',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/seleccion usa x travis scott.png',
            'TODO FUTBOL/Colabs/detras seleccion usa.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Selección USA x Travis Scott.'
    },
    {
        name: 'Tenerife x Cruz Cafune',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/tenerife x cruz cafune.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Tenerife x Cruz Cafune.'
    },
    {
        name: 'Tottenham x Mikke Towers',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/totteham x mikke towers.png',
            'TODO FUTBOL/Colabs/totteham x mikke towers detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Tottenham x Mikke Towers.'
    },
	{
        name: 'Málaga Primera 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Malaga CF/malaga primera 25-26.png'
        ],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Camiseta Málaga CF primera equipación temporada 25/26.'
	},
	{
        name: 'Málaga Segunda 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Malaga CF/malaga segunda 25-26.png'
        ],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Camiseta Málaga CF segunda equipación temporada 25/26.'
	},
	{
        name: 'Málaga Tercera 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Malaga CF/malaga tercera 25-26.png'
        ],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Camiseta Málaga CF tercera equipación temporada 25/26.'
	},
	{
        name: 'Málaga kids 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Malaga CF/malaga_kids.jpg'],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Camiseta Málaga CF kids primera equipación temporada 25/26.'
	},
	{
        name: 'MALAGA X ANUEL',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/anuel x malaga.png',
            'TODO FUTBOL/Colabs/anuel x malaga detras.png'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Málaga x Anuel.'
    },
	{
        name: 'MALAGA X DELAOSSA',
        price: 30.00,
        category: 'COLABS',
        images: ['TODO FUTBOL/Colabs/malaga x delaossa.png', 'TODO FUTBOL/Colabs/malaga x delaossa detras.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Málaga x Delaossa.'
    },
	{
        name: 'MALAGA X ILLO JUAN',
        price: 30.00,
        category: 'COLABS',
        images: [
            'TODO FUTBOL/Colabs/cami4.jpeg',
            'TODO FUTBOL/Colabs/cami3.jpeg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Colaboración Málaga CF x Illo Juan.'
    },
	{
        name: 'Málaga Comic 25/26',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Malaga CF/malaga comic 25-26.png'
        ],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Camiseta Málaga CF edición especial Comic 25/26.'
	},
	{
        name: 'Málaga Sudadera Entrenamiento 25/26',
        price: 30.00,
        category: 'Entrenamiento',
        images: [
            'TODO FUTBOL/Malaga CF/malaga sudadera entrenamiento 25-26.jpg',
            'TODO FUTBOL/Malaga CF/malaga entrenamiento 2.jpg'
        ],
        sizes: ['S','M','L','XL','XXL'],
        description: 'Sudadera de entrenamiento Málaga CF temporada 25/26.'
	}
];

const gymProducts = [
    {
        name: 'Pantalones Urban Tech Pro',
        price: 30.00,
        category: 'Pantalones Cortos',
        images: ['TODO GYM/pantalones.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Pantalones cortos técnicos para máxima ventilación.'
    },
	{
        name: 'Adidas Vintage Stripe Verde',
        price: 30.00,
        category: 'Streetwear',
        images: ['TODO GYM/adidas_vintage_verde.jpg'],
        sizes: ['S', 'M', 'L'],
        description: 'Camiseta de estilo casual con rayas verticales.'
    }
];

// --- MUNDIAL 26 ---
const mundialProducts = [
    // España (primero)
	{
        name: 'España Alternativa Edición Extra',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/españa.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de España edición alternativa para el Mundial 2026.'
    },
    {
        name: 'España Alternativa Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/ESPAÑA.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de España visitante para el Mundial 2026.'
    },
    {
        name: 'España Local Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/ESPAÑA.HOME.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de España primera equipación para el Mundial 2026.'
    },
    {
        name: 'España Edición Especial Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/cami1.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de España edición especial para el Mundial 2026.'
    },
    // Resto de países (orden alfabético)
    {
        name: 'Argentina Local Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/ARGENTINA.HOME.WORLDCUP.2026.png'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Argentina primera equipación para el Mundial 2026.'
    },
    {
        name: 'Argentina Alternativa Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/ARGENTINA.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Argentina visitante para el Mundial 2026.'
    },
    {
        name: 'Argentina Edición Especial Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/cami2.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Argentina edición especial para el Mundial 2026.'
    },
    {
        name: 'Bélgica Especial Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/BELGIUM.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Bélgica edición especial para el Mundial 2026.'
    },
    {
        name: 'Brasil Local Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/BRASIL.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Brasil primera equipación para el Mundial 2026.'
    },
    {
        name: 'Colombia Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/COLOMBIA.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Colombia para el Mundial 2026.'
    },
    {
        name: 'Emiratos Árabes Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/EMIRATOS.ARAES.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Emiratos Árabes para el Mundial 2026.'
    },
    {
        name: 'Estados Unidos Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/USA.2026.WORLDCUP.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Estados Unidos para el Mundial 2026.'
    },
    {
        name: 'Francia Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/FRANCIA.WORLDCUP.2026.webp'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Francia para el Mundial 2026.'
    },
    {
        name: 'Italia Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/ITALIA.WORLDCUP.2026.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Italia para el Mundial 2026.'
    },
    {
        name: 'Japón Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/JAPON.WORLDCUP.2026.webp'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Japón para el Mundial 2026.'
    },
    {
        name: 'Mali Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/MALI.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Mali para el Mundial 2026.'
    },
    {
        name: 'Marruecos Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/MARRUECOS.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Marruecos para el Mundial 2026.'
    },
    {
        name: 'México Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/MEXICO.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de México para el Mundial 2026.'
    },
    {
        name: 'Países Bajos Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/NETHERLANDS.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Países Bajos para el Mundial 2026.'
    },
    {
        name: 'Perú Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/PERU.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Perú para el Mundial 2026.'
    },
    {
        name: 'Portugal Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/PORTUGAL.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Portugal para el Mundial 2026.'
    },
    {
        name: 'Qatar Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/QATAR.WORLD.CUP.2026.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Qatar para el Mundial 2026.'
    },
    {
        name: 'Uruguay Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/URUGUAY.WORLDCUP.2026.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Uruguay para el Mundial 2026.'
    },
    {
        name: 'Venezuela Mundial 2026',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/VENEZUELA.WORLDCUP.2026.jpeg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de Venezuela para el Mundial 2026.'
    }
];
