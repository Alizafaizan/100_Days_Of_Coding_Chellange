let magician: string[] = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Albus Dumbledore"
];

function make_great(magicianArray: string[]) {
  for (let i = 0; i < magicianArray.length; i++) {
    magician[i] = "The Great " + magicianArray[i];
  }
}
function show_magicions(magicians: string[]) {
  magicians.forEach(element => {
    console.log(element);
  });
}
make_great(magician);
show_magicions(magician);
