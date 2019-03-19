const express=require('express')
const bodyParser=require("body-parser")
const {MongoClient,ObjectID}=require('mongodb')
const  assert=require('assert')
const app=express()

app.use(bodyParser.json())

const MongoUrl='mongodb://localhost:27017'
const database='camping_database'

MongoClient.connect(MongoUrl,{useNewUrlParser:true},(err,client)=>{
    assert.equal(null,err,'can not connect to database')
    const db=client.db(database)
// activities
    app.post('/addActivities',(req,res)=>{
        let newactiv =req.body
        db.collection('activities').insertOne(newactiv,(err,data)=>{
            if (err) res.send('cant add activitie')
            res.send(data)
        })
    })

    app.get('/activitieslist',(req,res)=>{
        db.collection('activities').find().toArray((err,data)=>{
            if (err) res.send('cant show list activ')
            res.send(data)
        })
    })
    app.put('/editactivity/:id',(req,res)=>{
        let modify=req.body
        let id=ObjectID(req.params.id)
        db.collection('activities').findOneAndUpdate({_id:id},{$set:{...modify}},(err,data)=>{
            if (err) res.send('can t update')
            res.send(data)
        })
    })

    app.put('/editactivity/:id',(req,res)=>{
        let modify=req.body
        let id=ObjectID(req.params.id)
        db.collection('activities').findOneAndUpdate({_id:id},{$set:{...modify}},(err,data)=>{
            if (err) res.send('can t update')
            res.send(data)
        })
    })

    app.delete('/deleteactivity/:id',(req,res)=>{
        let id=ObjectID(req.params.id)
        db.collection('activities').findOneAndDelete({_id:id},(err,data)=>{
            if (err) res.send('there is an error cant delete')
            else res.send(" deleted")
        })
    })
// profile 

    app.post('/addprofile',(req,res)=>{
        let newactiv =req.body
        db.collection('profile').insertOne(newactiv,(err,data)=>{
            if (err) res.send('cant add profile')
            res.send(data)
        })
    })
    app.get('/profileinfo',(req,res)=>{
        db.collection('profile').find().toArray((err,data)=>{
            if (err) res.send('cant show list activ')
            res.send(data)
        })
    })
    
    app.put('/editprofile/:id',(req,res)=>{
        let newprofile=req.body
        let id=ObjectID(req.params.id)
        db.collection('profile').findOneAndUpdate({_id:id},{$set:{...newprofile}},(err,data)=>{
            if (err) res.send('can t update')
            res.send(data)
        })
    })

})








app.listen(3050,(err)=>{
    if(err) console.log('there is an error')
    else console.log('server is running on port 3050')
})