const express = require('express')
const {db} = require('./config')

const {_getPosts, _getPostById, _createPost, _updatePost, _delPost} = require('./models')

const getPosts = (req, res) => {
    _getPosts()
    .then(data => {
      res.json(data);
      console.log(data); 
    })
    .catch((e) => {
      console.log(e);
    });
};


const getPostById = (req,res) => {
    const { id } = req.params;
    _getPostById(id)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })
}

const createPost = (req,res) => {
    const{title,content} = req.body
    _createPost(title,content)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })


}

const updatePost = (req,res) => {
    const {id} = req.params
    const{title,content} = req.body
    _updatePost(id,title,content)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })

}

const delPost = (req,res) => {
    const{id} = req.params
    _delPost(id)
    .then(data=>{
        res.json(data)
      })
      .catch((e)=>{
        console.log(e);
      })
}

module.exports = {getPosts,getPostById,createPost,updatePost,delPost}