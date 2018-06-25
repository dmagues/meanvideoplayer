const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema =  new Schema({
    title: String,
    url: String,
    description: String
});

VideoModel = module.exports = mongoose.model('video', videoSchema, 'videos');

module.exports.getAllVideos = function(callback){
    VideoModel.find({}).exec(callback);
}

module.exports.getVideoById = function(id, callback){
    VideoModel.findById(id,callback);
}