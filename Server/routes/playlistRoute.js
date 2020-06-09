var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');

router.get("/playlist", function(req,res){
    Playlist.find({},(err,playlists)=>{
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
                _id: play._ids
            });
        });
        res.send(sdata);
    });
});
module.exports=router;