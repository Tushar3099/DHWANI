var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');

router.get("/",function(req,res){
    res.send("hi there it really works!");
})
router.get("/song/:id",function(req,res){
    Song.findById(req.params.id).populate('artist').populate('review').exec(async function(err,song){
        var ar=[];
        await song.artist.forEach(function(art){
            ar.push(art.fullname);
        });
        var userRating;
        var vid1="5edf37648724f237e0d8f760",
        vid2="5edf37648724f237e0d8f761";
        await song.review.forEach(function(rev){
            if(rev.createdBy==vid2){
            // if(rev.createdBy==req.user._id){
                userRating=rev.rating;
            }
        });
        res.send({
            name: song.name,
            image: song.image,
            artist: ar,
            _id: song._id,
            lyrics: song.lyrics,
            genre: song.genre,
            mood: song.mood,
            rating: song.rating,
            userRating: userRating

        });
    });
});

module.exports=router;