import React, {useState} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';
const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'almost home1', id: 2},
        {title: 'almost home2', id: 3}
    ]);

    // addSong
    const addSong =(title) =>{
        // replace songs
        setSongs([...songs, {title: title, id: uuid()}]);
    }

    return(
        <div className ="song-list">
            <ul>
                {songs.map( song =>{
                    return (<li key ={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong  ={addSong}/>
            <button onClick = {addSong}>Add a song</button>
        </div>
    );
}

export default SongList;