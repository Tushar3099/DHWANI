var express=require("express");
var bodyParser=require('body-parser');
var router=express.Router({mergeParms: true
                            });

router.use(bodyParser.urlencoded({extended:true}));
var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');

router.get("/playlist", function(req,res){
    var vid1="5edf37648724f237e0d8f760",
    vid2="5edf37648724f237e0d8f761";
    // Playlist.find({createdBy:vid1},(err,playlists)=>{
    Playlist.find({createdBy:req.user._id},(err,playlists)=>{
        if(err){
            console.log(err);
        }
        // res.send(playlists);
        var sdata=[];
        playlists.forEach(function(play){
            sdata.push({
                name: play.name,
                image: play.image,
                length: play.length,
                _id: play._id,
                createdBy: play.createdBy
            });
        });
        res.send(sdata);
    });
});
router.get("/playlist/:id",function(req,res){
    Playlist.findById(req.params.id).populate('songs').populate('createdBy').exec(function(err,play){
        // console.log(play.createdBy);
        var vid1="5edf37648724f237e0d8f760",
        vid2="5edf37648724f237e0d8f761";
        // if(play.createdBy._id==vid1){
        if(play.createdBy._id==req.user_id){
            var songs1=[];
            play.songs.forEach(function(playsong){
                songs1.push({
                    name: playsong.name,
                    _id: playsong._id,
                    // artist: playsong._artist,
                    mood: playsong.mood,
                    genre: playsong.genre,
                    duration: playsong.duration

                });
            });
            var sdata={
                _id: play._id,
                name: play.name,
                // createdBy: play.createdBy,
                image: play.image,
                length: play.length,
                songs: songs1
            }
            
    }
    res.send(sdata);   

    });
});
router.post("/playlist",function(req,res){
    var vid1="5edf37648724f237e0d8f760",
        vid2="5edf37648724f237e0d8f761";
    // console.log(req);
    var newp={
        name: req.query.name,
        createdBy: req.user._id,
        // createdBy: vid1
    }
    // console.log(newp);
    Playlist.create(newp,function(err,playlist){
        res.redirect("/playlist/"+playlist._id);
    });
});
router.get("/playlist/:pid/song/:sid",function(req,res){
    Playlist.findById(req.params.pid,function(err,playlist){
        var vid1="5edf37648724f237e0d8f760",
    vid2="5edf37648724f237e0d8f761";
    //     if(playlist.createdBy==vid1){
        if(playlist.createdBy==req.user._id){
            Song.findById(req.params.sid,function(err,song){
                playlist.songs.push(song);
                playlist.save(function(err,play){
                    res.redirect("/playlist/"+req.params.pid);
                });
            });
        }
        else{
            res.redirect("/playlist");
        }
        
        
    })
});

module.exports=router;