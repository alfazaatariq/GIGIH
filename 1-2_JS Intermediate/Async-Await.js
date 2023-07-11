const SongList = [
  { title: 'Song 1', artists: [{ name: 'Artist 1' }], duration: 200 },
  { title: 'Song 2', artists: [{ name: 'Artist 2' }], duration: 100 },
  { title: 'Song 3', artists: [{ name: 'Artist 3' }], duration: 600 },
  { title: 'Song 4', artists: [{ name: 'Artist 4' }], duration: 500 },
  { title: 'Song 5', artists: [{ name: 'Artist 5' }], duration: 400 },
];

const songPromise = (songList) => {
  return new Promise((resolve, reject) => {
    if (songList.length === 0) {
      reject('Song is empty!');
      return;
    }

    resolve(songList);
  });
};

const getSongListAsync = async (songList) => {
  try {
    const response = await songPromise(songList);
    if (response) {
      for (let i = 0; i < response.length; i++) {
        console.log('Judul Lagu : ' + response[i].title);
        console.log('Penyanyi : ' + response[i].artists[0].name);
        console.log('Durasi Lagu : ' + response[i].duration);
        console.log('\n');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

getSongListAsync(songPromise(SongList));
