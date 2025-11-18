import React, { useState, useEffect } from 'react';
import songsData from '../data/songs.json';

export default function SongManager() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(songsData);
  }, []);

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-4 flex items-center gap-2">
        <span style={{color:'purple', fontSize:28}}>🦋</span> My Songs
      </h2>
      <ul>
        {songs.map((song, idx) => (
          <li key={idx} className="p-2 border rounded my-2 flex items-center gap-3">
            <span style={{fontSize:24, color:'purple'}}>🦋</span>
            <div style={{flex:1}}>
              <div style={{ fontWeight: 600 }}>{song.title}</div>
              <div style={{ fontSize: 12, color: '#666' }}>{song.artist}</div>
              <audio controls src={song.file} style={{ width: '100%', marginTop: 8 }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 
import React, { useState, useEffect } from 'react';
import songsData from '../data/songs.json';

export default function SongManager() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(songsData);
  }, []);

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-4 flex items-center gap-2">
        <span style={{ color: 'purple', fontSize: 28 }}>🦋</span> My Songs
      </h2>

      <ul className="song-list">
        {songs.map((song, idx) => (
          <li key={idx} className="song-item">
            <span className="butterfly-icon">🦋</span>
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
              <audio controls src={song.file}></audio>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

