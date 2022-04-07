// First Labour : Heracles vs Nemean Lion
// use your Fighter class here
const Fighter = require('./src/Fighter');

  const fighters = [
      new Fighter (
        "🧔 Heracles",
        20,
        6,
    ),

      new Fighter (
        "🦁 Nemean Lion",
        11,
        13,
    ),
  ];

  let heracles = fighters[0];
  let lion = fighters[1];

  for(let i = 1; heracles.life > 0 && lion.life > 0; i++) {
        console.log(`Round ${i}`);
        heracles.fight(lion);
        console.log(`${heracles.name} fight ${lion.name} the pv of ${lion.name} is ${lion.life}`);
        lion.fight(heracles);
        console.log(`${lion.name} fight ${heracles.name} the pv of ${heracles.name} is ${heracles.life}`);
  }

  if (heracles.life ===0) {
      console.log(`winner is ${lion.name} 👑`)
      console.log(`${heracles.name} is dead 💀`)
  } else {
    console.log(`winner is ${heracles.name} 👑`)
    console.log(`${lion.name} is dead 💀`)
  }


