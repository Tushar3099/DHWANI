var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');


router.get("/search/:type/:keyword",(req,res) => {
    var type=req.params.type;
    var keyword=req.params.keyword;
    // console.log(type);
    // console.log(keyword);
    var sdata=[];
        if(type.toLowerCase()=="song")
        {

            Song.find({name: { "$regex": keyword, "$options": "i" }}).populate('artist','fullname').exec(function(err,song){
            // Song.find({name: new RegExp('\\b' + keyword + '\\b', 'i')}).populate('artist','fullname').exec(function(err,song){
                song.forEach(function(song){
                    var art=[];
                    song.artist.forEach(function(artist){
                        art.push(artist.fullname);
                    });
                    sdata.push({
                        _id: song._id,
                        name: song.name,
                        artist: art,
                        image: song.image,
                        rating: song.rating,
                        genre: song.genre,
                        mood: song.mood

                    });
                });
                res.send(sdata);
                // console.log(song)
            });
            
        }
        if(type.toLowerCase()=="artist"){
            Song.find({}).populate('artist','fullname').exec(function(err,songs){
                songs.forEach(function(song){
                    song.artist.forEach(function(artist){
                        // var regx=/artist.fullname/i;
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(artist.fullname)){
                                // console.log("aa");
                                var art=[];
                                song.artist.forEach(function(artist){
                                    art.push(artist.fullname);
                                });
                                sdata.push({
                                    _id: song._id,
                                    name: song.name,
                                    artist: art,
                                    image: song.image,
                                    rating: song.rating,
                                    genre: song.genre,
                                    mood: song.mood

                                });
                        }
                    })
                    
                });
                // songs.find({"artist.fullname" : { "$regex": keyword, "$options": "i" }},function(err,results){
                res.send(sdata);
                });
            
        }
        if(type.toLowerCase()=="mood"){
            Song.find({},function(err,songs){
                songs.forEach(function(song){
                    song.mood.forEach(function(mood){
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(mood)){
                                var art=[];
                                song.artist.forEach(function(artist){
                                    art.push(artist.fullname);
                                });
                                sdata.push({
                                    _id: song._id,
                                    name: song.name,
                                    artist: art,
                                    image: song.image,
                                    rating: song.rating,
                                    genre: song.genre,
                                    mood: song.mood

                                });
                        }
                    });
                    
                });
                res.send(sdata);
            });
            
        }
        if(type.toLowerCase()=="genre"){
            Song.find({},function(err,songs){
                songs.forEach(function(song){
                    song.genre.forEach(function(genre){
                        var regx=new RegExp(keyword, 'i')
                            if(regx.test(genre)){
                                var art=[];
                                song.artist.forEach(function(artist){
                                    art.push(artist.fullname);
                                });
                                sdata.push({
                                    _id: song._id,
                                    name: song.name,
                                    artist: art,
                                    image: song.image,
                                    rating: song.rating,
                                    genre: song.genre,
                                    mood: song.mood

                                });
                        }
                    });      
                });
                res.send(sdata);
           });    
        }
});
module.exports=router;