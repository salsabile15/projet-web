const { prisma } = require('@prisma/client');
var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const take = req.query.take
   const skip = req.query.skip
   let users = await prisma.user.findMany()
   skip = skip || 0
   take = take || 10
   res.send('respond with a resource');
  });


  router.post('/', function(req, res, next) {
      const user =await prisma.user.create({
        data : req.body
      })
    if(user!={})
    res.status(200)
    res.send('respond with a resource');
    else {
      res.status(404)
      res.send('error')
    }

  });
  router.get('/:id', function(req, res, next) {
    const user = await prisma.user.findUnique((
      where:{
        id : req.params.id
      }
    ))
    if(user!={}){
      res.status(200)
      res.send('user');
    }else{
      res.status(404)
      res.send('error')
    }  
  });
  router.patch('/', async function(req, res, next) {
    const user = await prisma.user.update({
      where{
        id : req.body.id
        data:  req.body
      }
    })
    if(user!={}){
      res.status(200)
      res.send('user');
    }else{
      res.status(404)
      res.send('error')
    }
  });
  router.delete('/:id', async function(req, res, next) {
    try{
      const u = await prisma.user.delete({
        where : id : req.prisma.id
      })
      res.status(200)
      res.send(u)
    }
    catch(e){
      console.log{'user introuvable'}
    }
    throw e
  });
  module.exports = router;