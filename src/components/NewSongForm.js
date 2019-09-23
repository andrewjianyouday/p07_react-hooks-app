import React,{useState} from 'react';
const NewSongForm = ({addSong}) => {
    const [title, setTitile] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addSong (title)
        setTitile('')
        //console.log(title);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label>Song name: </label>
            <input type ="text" value={title} required onChange={(e) =>setTitile(e.target.value)}/>
            <input type="submit" value="add song"/>
        </form>
    );
}

export default NewSongForm;