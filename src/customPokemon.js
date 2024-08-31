import s1 from './assets/images/s1.png';
import s2 from './assets/images/s2.png';
import s3 from './assets/images/s3.png';
import sa from './assets/images/sa.png';
import sa2 from './assets/images/sa2.png';
import sa3 from './assets/images/sa3.png';
import j1 from './assets/images/j1.png';
import j2 from './assets/images/j2.png';
import j3 from './assets/images/j3.png';
const customPokemons = [
    {
      name: 'Pirafee',
      abilities: ['Aqua', 'Spog Steel'],
      types: ['water', 'steel'],
      customImage: s1 ,
      height: 110,
     weight: 70,
    abt: "Pirafee's metal ring boosts its agility in water, increasing evasion against Water-type moves, while its innocent eyes subtly trap opponents.",
    evolution: [
      { name: 'Pirafee', image: s1 },
      { name: 'Sharfee', image: s2 },
      { name: 'Megafeor', image: s3 },
    ],
    },
    {
      name: 'Sharfee',
      abilities: ['Sturdy Gyro', 'Intimidate'],
      types: ['water', 'steel'],
      customImage: s2 ,
      height:180,
     weight: 920,
    abt: "Sharfee's metal rings open into a semicircle, boosting its water mobility for swift, slicing attacks, making it appear to vanish in a flash.",
    evolution: [
      { name: 'Pirafee', image: s1 },
      { name: 'Sharfee', image: s2 },
      { name: 'Megafeor', image: s3 },
    ],
    },
    {
      name: 'Megafeor',
      abilities: ['Roll Attack', 'High Speed'],
      types: ['water', 'steel','rock'],
      customImage: s3 ,
      height:210,
     weight: 1050,
    abt: "Megafeor's dual spinning rings let it move swiftly on land and water. Its oxygen-trapping skin and gyro-like structure make it a powerful battle force.",
    evolution: [
      { name: 'Pirafee', image: s1 },
      { name: 'Sharfee', image: s2 },
      { name: 'Megafeor', image: s3 },
    ], 
    },
    {
      name: 'Pyrokey',
      abilities: ['Singe', 'Blazing Trail'],
      types: ['fire', 'normal'],
      customImage: sa ,
      height:6,
      weight: 69,
    abt: "Pyrokey, a playful Fire-type Pokémon resembling a baby monkey, has expressive eyes and a tail that ignites with excitement.",
    evolution: [
      { name: 'Pyrokey', image: sa },
      { name: 'Burnape', image: sa2 },
      { name: 'Valcazar', image: sa3 },
    ], 
    },
    {
      name: 'Burnape',
      abilities: ['Flare Dance', 'Pyroclasm'],
      types: ['fire', 'fighting'],
      customImage: sa2 ,
      height: 110,
      weight: 350,
    abt: "Burnape, a sleek and agile Fire-type Pokémon, has intensified orange fur that blazes with its swift, precise attacks.",
    evolution: [
      { name: 'Pyrokey', image: sa },
      { name: 'Burnape', image: sa2 },
      { name: 'Valcazar', image: sa3 },
    ], 
    },
    {
      name: 'Valcazar',
      abilities: ['Lava Shield', 'Eruption'],
      types: ['fire', 'dragon'],
      customImage: sa3 ,
      height: 165,
      weight: 900,
    abt: "Valcazar is a formidable Fire/Dragon-type Pokémon with fiery fur and a volcanic tail blaze, exuding immense power and majesty.",
    evolution: [
      { name: 'Pyrokey', image: sa },
      { name: 'Burnape', image: sa2 },
      { name: 'Valcazar', image: sa3 },
    ], 
    },

    {
      name: 'Nyxie',
      abilities: ['Lunar Veil', 'Shadowveil'],
      types: ['psychic', 'flying'],
      customImage: j1 ,
      height: 60,
      weight: 68,
    abt: "Uses moonlit charm and faint psychic powers to create soft, glowing illusions, making it endearing in battle.",
    evolution: [
      { name: 'Nyxie', image: j1 },
      { name: 'Nyxle', image: j2 },
      { name: 'Nyxellite', image: j3 },
    ], 
    },
   
    {
      name: 'Nyxle',
      abilities: ['Moonplay', 'Shadow skill'],
      types: ['psychic', 'flying'],
      customImage: j2 ,
      height: 90,
      weight: 214,
    abt: "Thrives in shadows, using its sharp wit and playful nature to outsmart opponents with tricky maneuvers.",
    evolution: [
      { name: 'Nyxie', image: j1 },
      { name: 'Nyxle', image: j2 },
      { name: 'Nyxellite', image: j3 },
    ], 
    },
    {
      name: 'Nyxellite',
      abilities: ['Royal glow', 'Celestial'],
      types: ['psychic','flying'],
      customImage: j3 ,
      height: 18,
      weight: 330,
    abt: "Commands the night sky with grace, using celestial powers to protect and inspire allies.",
    evolution: [
      { name: 'Nyxie', image: j1 },
      { name: 'Nyxle', image: j2 },
      { name: 'Nyxellite', image: j3 },
    ], 
    },
    
  ]
  
  
  export default customPokemons;
  
