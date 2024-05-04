// Write function called make_album
function make_album(artist: string, title: string, tracks?: number) {
  const album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

const album1 = make_album("Artist 1", "The First Album");
console.log(album1);

const album2 = make_album("Artist 2", "The Second Album");
console.log(album2);

const album3 = make_album("Artist 3", "The Third Album", 12);
console.log(album3);


