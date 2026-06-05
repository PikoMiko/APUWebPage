const pointScale = [10, 8, 6, 5, 4, 3, 2, 1]; // 1st → 8th place

const Swimraces = {
  fs50: {
    label: "50m Freestyle",
    entries: [
      { name: "Kai Nguyen",    team: "Silver Streaks", time: 22.14, points: 10 },
      { name: "Luca Ferreira", team: "Aqua Sharks",    time: 22.41, points: 8 },
      { name: "Omar Hassan",   team: "Wave Riders",    time: 22.68, points: 6 },
      { name: "Jake Tan",      team: "Blue Marlins",   time: 22.95, points: 5 },
      { name: "Ryan Osei",     team: "Tide Breakers",  time: 23.17, points: 4 },
      { name: "Mateo Cruz",    team: "Thunder Fins",   time: 23.44, points: 3 },
      { name: "Finn O'Brien",  team: "Deep Dive FC",   time: 23.71, points: 2 },
      { name: "Sam Petrov",    team: "Poseidon SC",    time: 24.02, points: 1 },
    ]
  },
  fs100: {
    label: "100m Freestyle",
    entries: [
      { name: "Luca Ferreira", team: "Blue Marlins",   time: 48.92, points: 10 },
      { name: "Ethan Wolff",   team: "Thunder Fins",   time: 49.34, points: 8 },
      { name: "Kai Nguyen",    team: "Silver Streaks", time: 49.71, points: 6 },
      { name: "Marco Silva",   team: "Wave Riders",    time: 50.08, points: 5 },
      { name: "Alex Kim",      team: "Aqua Sharks",    time: 50.45, points: 4 },
      { name: "Jordan Lee",    team: "Poseidon SC",    time: 50.83, points: 3 },
      { name: "Finn O'Brien",  team: "Deep Dive FC",   time: 51.22, points: 2 },
      { name: "Tyler Marsh",   team: "Tide Breakers",  time: 51.60, points: 1 },
    ]
  },
  bs50: {
    label: "50m Backstroke",
    entries: [
      { name: "Noa Bergman",   team: "Wave Riders",    time: 25.33, points: 10 },
      { name: "Chris Adeyemi", team: "Blue Marlins",   time: 25.71, points: 8 },
      { name: "Sam Petrov",    team: "Poseidon SC",    time: 26.04, points: 6 },
      { name: "Tyler Marsh",   team: "Tide Breakers",  time: 26.38, points: 5 },
      { name: "Jake Tan",      team: "Aqua Sharks",    time: 26.62, points: 4 },
      { name: "Marco Silva",   team: "Silver Streaks", time: 26.89, points: 3 },
      { name: "Ryan Osei",     team: "Thunder Fins",   time: 27.14, points: 2 },
      { name: "Alex Kim",      team: "Deep Dive FC",   time: 27.48, points: 1 },
    ]
  },
  bs100: {
    label: "100m Backstroke",
    entries: [
      { name: "Jordan Lee",    team: "Poseidon SC",    time: 54.81, points: 10 },
      { name: "Ethan Wolff",   team: "Thunder Fins",   time: 55.20, points: 8 },
      { name: "Noa Bergman",   team: "Aqua Sharks",    time: 55.64, points: 6 },
      { name: "Chris Adeyemi", team: "Wave Riders",    time: 56.02, points: 5 },
      { name: "Omar Hassan",   team: "Blue Marlins",   time: 56.41, points: 4 },
      { name: "Mateo Cruz",    team: "Silver Streaks", time: 56.79, points: 3 },
      { name: "Marco Silva",   team: "Tide Breakers",  time: 57.18, points: 2 },
      { name: "Kai Nguyen",    team: "Deep Dive FC",   time: 57.55, points: 1 },
    ]
  },

  totalpts: {
    label: "Team Points",
    entries: [
        { team: "Blue Marlins",   fs50: 5, fs100: 10, bs50: 8,  bs100: 4,  total: 27 },
        { team: "Wave Riders",    fs50: 6, fs100: 5,  bs50: 10, bs100: 5,  total: 26 },
        { team: "Aqua Sharks",    fs50: 8, fs100: 4,  bs50: 4,  bs100: 6,  total: 22 },
        { team: "Silver Streaks", fs50: 10, fs100: 6, bs50: 3,  bs100: 3,  total: 22 },
        { team: "Thunder Fins",   fs50: 3, fs100: 8, bs50: 2,  bs100: 8,  total: 21 },
        { team: "Poseidon SC",    fs50: 1, fs100: 3, bs50: 6,  bs100: 10, total: 20 },
        { team: "Tide Breakers",  fs50: 4, fs100: 1, bs50: 5,  bs100: 2,  total: 12 },
        { team: "Deep Dive FC",   fs50: 2, fs100: 2, bs50: 1,  bs100: 1,  total: 6 },
    ]
  }
};