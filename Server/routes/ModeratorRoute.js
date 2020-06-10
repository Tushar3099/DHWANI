var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');

router.get('/admin',function(req,res){
    RequestSong.find({}).populate('artist').exec(function(err,songs){
        var sdata=[];
        songs.forEach(function(song){
            var ar=[];
            song.artist.forEach(function(art){
                ar.push(art.fullname)
            })
            sdata.push({
                _id: song._id,
                name: song.name,
                image: song.image,
                artist: ar,
                mood: song.mood,
                genre: song.genre,
                duration: song.duration,
            });
        });
        res.send(sdata);
    });
});
router.get('/approve/:id',function(req,res){
    RequestSong.findById(req.params.id,function(err,aprovedsong){
        Song.create(approvedsong,function(err,data){
            if(!err){
                RequestSong.findByIdAndRemove(req.params.id,function(err){
                    res.redirect("/admin");
                });
            }
            
        })
    })
})
module.exports=router;