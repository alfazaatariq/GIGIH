import mongoose from 'mongoose';
import song from './models/songs.js';
import artist from './models/artists.js';
import popular from './models/populars.js';

try {
  main();
} catch (error) {
  console.log(error);
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/songs');
  console.log('DB CONNECTED!');

  populateSong();
  populateArtists();
  populatePopular();
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const populateSong = () => {
  let songDatas = [
    {
      title: 'LosT',
      artists: ['BMTH'],
      album: 'LosT',
    },
    {
      title: 'Strangers',
      artists: ['BMTH'],
      album: 'Strangers',
    },
    {
      title: 'SUGAR',
      artists: ['BROCKHAMPTON'],
      album: 'GINGER',
    },
    {
      title: 'Kingslayer',
      artists: ['BMTH', 'BABYMETAL'],
      album: 'POST HUMAN: SURVIVAL HORROR',
    },
    {
      title: 'Die For You',
      artists: ['The Weeknd'],
      album: 'Starboy',
    },
    {
      title: 'FACE',
      artists: ['BROCKHAMPTON'],
      album: 'SATURATION',
    },
    {
      title: '20 Min',
      artists: ['Lil Uzi Vert'],
      album: 'Luv Is Rage 2',
    },
    {
      title: 'LIMBO',
      artists: ['keshi'],
      album: 'GABRIEL',
    },
    {
      title: 'Break It',
      artists: ['Pamungkas'],
      album: 'Flying Solo',
    },
    {
      title: 'Circles',
      artists: ['Post Malone'],
      album: "Hollywood's Bleeding",
    },
  ];

  song.insertMany(songDatas);
};

const populateArtists = () => {
  let artistsDatas = [
    {
      name: 'Artist 1',
      dateOfBirth: new Date('2002-02-02'),
      genres: ['Rock'],
    },
    {
      name: 'Artist 2',
      dateOfBirth: new Date('2000-01-22'),
      genres: ['Metal'],
    },
    {
      name: 'Artist 3',
      dateOfBirth: new Date('1998-08-14'),
      genres: ['Rock'],
    },
    {
      name: 'Artist 4',
      dateOfBirth: new Date('2001-06-04'),
      genres: ['Punk'],
    },
    {
      name: 'Artist 5',
      dateOfBirth: new Date('1972-11-28'),
      genres: ['Pop'],
    },
    {
      name: 'Artist 6',
      dateOfBirth: new Date('1996-11-14'),
      genres: ['Jazz'],
    },
    {
      name: 'Artist 7',
      dateOfBirth: new Date('2000-01-01'),
      genres: ['Hiphop'],
    },
    {
      name: 'Artist 8',
      dateOfBirth: new Date('1998-04-12'),
      genres: ['Metal', 'Rock'],
    },
    {
      name: 'Artist 9',
      dateOfBirth: new Date('1978-04-16'),
      genres: ['Jazz'],
    },
    {
      name: 'Artist 10',
      dateOfBirth: new Date('2004-11-12'),
      genres: ['Pop'],
    },
  ];

  artist.insertMany(artistsDatas);
};

const populatePopular = () => {
  let popularDatas = [
    {
      title: 'Title 1',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2006-11-21',
    },
    {
      title: 'Title 2',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2009-04-11',
    },
    {
      title: 'Title 3',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2005-03-03',
    },
    {
      title: 'Title 4',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2019-08-08',
    },
    {
      title: 'Title 5',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2020-01-21',
    },
    {
      title: 'Title 6',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2011-12-21',
    },
    {
      title: 'Title 7',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2006-06-06',
    },
    {
      title: 'Title 8',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2023-04-17',
    },
    {
      title: 'Title 9',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2021-01-02',
    },
    {
      title: 'Title 10',
      playCount: Math.floor(Math.random() * 1000000) + 1,
      periodOfTime: '2018-11-20',
    },
  ];

  popular.insertMany(popularDatas);
};
