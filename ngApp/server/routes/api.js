const express = require('express');
const Video = require('../models/video');

const router = express.Router();

router.get('/',(req, res)=>{
    res.send('api works!');
});

router.get('/videos',(req, res)=>{
    console.log('Get all the videos');
    Video.getAllVideos((err, videos)=>{
        if(err){
            throw err;
        }else{
            res.json(videos);
        }

    });
});

router.get('/video/:id',(req, res)=>{
    console.log('Get a single video');
    Video.getVideoById(req.params.id, (err, video)=>{
        if(err){
            throw err;
        }else{
            res.json(video);
        }
    });
});

router.post('/video',(req, res)=>{
    console.log('Post a new video');
    let newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save((err, insertedVideo)=>{
        if(err){
            throw err;
        }else{
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', (req, res)=>{
    let video = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
    }
    Video.updateVideo(req.params.id, video, (err, updatedVideo)=>{
        if(err){
            throw err;
        }else{
            res.json(updatedVideo);
        }
    });
});

router.delete('/video/:id', (req, res)=>{
    Video.deleteVideo(req.params.id, (err, deletedVideo)=>{
        if(err){
            res.send("Error deleting video: "+err);
        }else{
            res.json(deletedVideo);
        }
    });
});

module.exports = router;