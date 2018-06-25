const express = require('express');
const router = express.Router();
const Video = require('../models/video');

router.get('/',(req, res)=>{
    res.send('api works!');
});

router.get('/videos',(req, res)=>{
    console.log('Get all the videos');
    Video.getAllVideos((err, videos)=>{
        if(err){
            console.log('Error in getAllVideos: '+err);
        }else{
            res.json(videos);
        }

    });
});

router.get('/video/:id',(req, res)=>{
    console.log('Get a single video');
    Video.getVideoById(req.params.id, (err, video)=>{
        if(err){
            console.log('Error in getVideoById: '+err);
        }else{
            res.json(video);
        }
    });
});

module.exports = router;