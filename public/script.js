const { router } = require("../app")
function postArticles(){
    return new promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',schema.prisma)
        xhr.onload = function(){
            if(xhr.status ===200){
                const json = JSON.parse(xhr.responseText)
                resolve(json)
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.send();
    });
}
const prom = postArticles()
prom.then((articles) => console.log(articles))
.catch((err) => console.log(err))
function getArticles(take = 10 , skip = 0){
    return new promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',schema.prisma)
        xhr.onload = function(){
            if(xhr.status ===200){
                const json = JSON.parse(xhr.responseText)
                resolve(json)
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.send();
    });
}
const prom = getArticles(take,skip)
prom.then((articles) => console.log(articles))
.catch((err) => console.log(err))
function patchArticles(){
    return new promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',schema.prisma)
        xhr.onload = function(){
            if(xhr.status ===200){
                const json = JSON.parse(xhr.responseText)
                resolve(json)
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.send();
    });
}
const prom = patchArticles()
prom.then((articles) => console.log(articles))
.catch((err) => console.log(err))
function deleteArticles(){
    return new promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',schema.prisma)
        xhr.onload = function(){
            if(xhr.status ===200){
                const json = JSON.parse(xhr.responseText)
                resolve(json)
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.send();
    });
}
const prom = deleteArticles()
prom.then((articles) => console.log(articles))
.catch((err) => console.log(err))