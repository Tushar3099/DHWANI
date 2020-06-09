import React, { useState } from "react";
import PlaylistInfo from "./PlaylistInfo";
import ListHead from "./ListHead";
import ListItems from "./ListItems";
import "../stylesheet/playlistinfo.css";
import "../stylesheet/listitems.css";
const PlaylistPage = () => {
	const [songs, setSongs] = useState([
		{
			artist: 'Post Malone',
			songname: 'Sunflower',
			id: 'abc123',
			duration: '4:00',
			mood: 'Chill',
			genre: 'Pop'
		}
	]);
	return(
		<div className='playlistcont'>
			<PlaylistInfo 
		   	playlistname='Spider Man'
		   	id='123'
		   	author='Aayush'
		   	/>
		   	<ListHead/>
			{songs.map(song => (
		   <ListItems 
		   	key = {song.id}   
			artist = {song.artist}
			songname = {song.songname}
			duration = {song.duration}
			mood = {song.mood}
			genre = {song.genre}
		   />
			))}
		</div>
	);
}

export default PlaylistPage;
