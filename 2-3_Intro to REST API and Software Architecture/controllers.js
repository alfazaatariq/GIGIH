import playlist from './model/playlist.js';
import { v4 as uuidv4 } from 'uuid';

export const playSongById = (req, res) => {
  const { id } = req.params;

  // check if playlist is empty
  let playlistEmpty = playlist.length === 0;
  if (playlistEmpty) {
    return res.status(404).json({
      message: 'Playlist is empty!',
    });
  }

  let songFound = false; // Flag to track if the song is found in the playlist

  playlist.find((song, index) => {
    if (song.id === id) {
      songFound = true; // Set the flag to true since the song is found

      // change isPlaying from true to false || false to true
      playlist[index].isPlaying = !playlist[index].isPlaying;

      let songURL = playlist[index].url;

      if (playlist[index].isPlaying) {
        playlist[index].playCount++;
        res.status(200).json({
          message: 'Song is playing!',
          url: songURL,
        });
      } else {
        res.status(200).json({
          message: 'Song is stopped!',
          url: songURL,
        });
      }
    }
  });

  // if the song is not found in the playlist
  if (!songFound) {
    res.status(404).json({
      message: 'Song not found!',
    });
  }
};

export const getAllPlaylist = (req, res) => {
  // check if the playlist is empty
  let playlistEmpty = playlist.length === 0;
  if (playlistEmpty) {
    return res.status(200).json({
      message: 'Playlist is empty!',
      playlist,
    });
  }

  // get query params
  const { order_by_play } = req.query;
  if (order_by_play) {
    return res.status(200).json({
      total_song: playlist.length,
      playlist:
        order_by_play == 'asc'
          ? playlist.sort((a, b) => a.playCount - b.playCount)
          : playlist.sort((a, b) => b.playCount - a.playCount),
    });
  }

  res.status(200).json({
    total_song: playlist.length,
    playlist,
  });
};

export const addNewPlaylist = (req, res) => {
  // get request body
  let { title, artists, url, playcount } = req.body;

  // check if the value data type is correct
  let titleCorrect = typeof title === 'string';
  let artistsCorrect = artists.every((artist) => typeof artist === 'string');
  let urlCorrect = typeof url === 'string';

  if (!titleCorrect || !artistsCorrect || !urlCorrect) {
    return res.status(400).json({
      error: 'Input data type is invalid!',
    });
  }

  // check if any value in the body is empty
  let titleEmpty = title.replace(/\s/g, '').length === 0;
  let artistsEmpty = artists.some(
    (artist) => artist.replace(/\s/g, '').length === 0
  );
  let urlEmpty = url.replace(/\s/g, '').length === 0;

  if (titleEmpty || artistsEmpty || urlEmpty) {
    return res.status(400).json({
      error: 'Request body can not be empty!',
    });
  }

  // put the new song into the playlist
  playlist.push({
    id: uuidv4(),
    title: title.trim(),
    artists: artists.map((artist) => artist.trim()),
    url: url.trim(),
    isPlaying: false,
    playCount: playcount,
  });

  // get id of the new song
  let newSongID = playlist[playlist.length - 1].id;

  res.status(201).json({
    message: 'New song added to playlist!',
    id: newSongID,
    title: title.trim(),
  });
};

export const deleteSongById = (req, res) => {
  // get song id
  const { id } = req.params;

  // check if playlist is empty
  let playlistEmpty = playlist.length === 0;
  if (playlistEmpty) {
    return res.status(404).json({
      message: 'Playlist is empty!',
    });
  }

  let songFound = false; // Flag to track if the song is found in the playlist

  playlist.find((song, index) => {
    if (song.id === id) {
      songFound = true;
      // delete the song from playlist
      playlist.splice(index, 1);
      res.status(200).json({
        message: 'Song deleted!',
      });
    }
  });

  if (!songFound) {
    // if the song is not found in the playlist
    res.status(404).json({
      message: 'Song not found!',
    });
  }
};

export const updateSongById = (req, res) => {
  // get song id
  const { id } = req.params;
  // get req body
  const { title: newTitle, artists: newArtists, url: newUrl } = req.body;

  // check if playlist is empty
  let playlistEmpty = playlist.length === 0;
  if (playlistEmpty) {
    return res.status(404).json({
      message: 'Playlist is empty!',
    });
  }

  // validate req body
  // check if the value data type is correct
  let newTitleCorrect = typeof newTitle === 'string';
  let newArtistsCorrect = newArtists.every(
    (artist) => typeof artist === 'string'
  );
  let newUrlCorrect = typeof newUrl === 'string';

  if (!newTitleCorrect || !newArtistsCorrect || !newUrlCorrect) {
    return res.status(400).json({
      error: 'Input data type is invalid!',
    });
  }

  // check if any value in the body is empty
  let newTitleEmpty = newTitle.replace(/\s/g, '').length === 0;
  let newArtistsEmpty = newArtists.some(
    (artist) => artist.replace(/\s/g, '').length === 0
  );
  let newUrlEmpty = newUrl.replace(/\s/g, '').length === 0;

  if (newTitleEmpty || newArtistsEmpty || newUrlEmpty) {
    return res.status(400).json({
      error: 'Request body can not be empty!',
    });
  }

  let songFound = false; // Flag to track if the song is found in the playlist

  playlist.find((song, index) => {
    // check if the song id is the same as in params
    if (song.id === id) {
      songFound = true;
      // change values with new ones
      playlist[index].title = newTitle.trim();
      playlist[index].artists = newArtists.map((newArtist) => newArtist.trim());
      playlist[index].url = newUrl.trim();

      res.status(200).json({
        message: 'Song updated!',
      });
    }
  });

  if (!songFound) {
    // if the song is not found in the playlist
    res.status(404).json({
      message: 'Song not found!',
    });
  }
};
