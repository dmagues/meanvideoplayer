const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema =  new Schema({
    title: String,
    url: String,
    description: String
});

const Video = module.exports = mongoose.model('video', videoSchema, 'videos');

module.exports.getAllVideos = function(callback){
    Video.find(callback);
}

module.exports.getVideoById = function(id, callback){
    Video.findById(id,callback);
}

module.exports.updateVideo = function(id, currentVideo, callback){
    Video.findByIdAndUpdate(id,{$set: currentVideo},{new:true}, callback);
}

module.exports.deleteVideo = function(id, callback){
    Video.findByIdAndRemove(id,callback);
}