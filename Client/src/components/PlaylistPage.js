import React from "react";
import PlaylistInfo from "./PlaylistInfo";
import ListHead from "./ListHead";
import ListItems from "./ListItems";
import "../stylesheet/playlistinfo.css";
import "../stylesheet/listitems.css";
const PlaylistPage = ({ songs }) => {
	return(
		<div className='playlistcont'>
			<PlaylistInfo 
		   	playlistname='Spider Man'
		   	id='123'
		   	author='Aayush'
		   	/>
		   	<ListHead/>
		   <ListItems 
		   	artist = 'Post Malone'
			name = 'Sunflower'
			id = 'abc123'
			duration = '4:00'
			mood = 'Chill'
			genre = 'Pop'
		   />
		   <ListItems 
		   	artist = 'Post Malone'
			name = 'Sunflower'
			id = 'abc123'
			duration = '4:00'
			mood = 'Chill'
			genre = 'Pop'
		   />
		   <ListItems 
		   	artist = 'Post Malone'
			name = 'Sunflower'
			id = 'abc123'
			duration = '4:00'
			mood = 'Chill'
			genre = 'Pop'
		   />
		   <ListItems 
		   	artist = 'Post Malone'
			name = 'Sunflower'
			id = 'abc123'
			duration = '4:00'
			mood = 'Chill'
			genre = 'Pop'
		   />
		</div>
	);
}

export default PlaylistPage;
