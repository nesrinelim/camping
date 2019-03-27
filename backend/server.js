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
    //remove contact
app.delete('/deleteactivity/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('activities').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete activity')
        else res.send(data)
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

    //profile user
    //add user
    app.post('/adduser',(req,res)=>{
        let newuser=req.body
        db.collection('user').insertOne(newuser,(err,data)=>{
        if (err) res.send('cant add user')
        res.send(newuser)
        
        })
        
        })
//afficher user
        app.get('/admin1/userlist',(req,res)=>{
            db.collection('user').find().toArray((err,data)=>{
                if (err) res.send('cant show list user')
                res.send(data)
            })

        })
//edit user

app.put('/edituser/:id',(req,res)=>{
    let modify=req.body
    let id=ObjectID(req.params.id)
    db.collection('user').findOneAndUpdate({_id:id},{$set:{...modify}},(err,data)=>{
        if (err) res.send('can t update')
        res.send(data)
    })
})
//delete user
app.delete('/deleteuser/:id',(req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('user').findOneAndDelete({_id:id},(err,data)=>{
        if (err) res.send('can not delete user')
        else res.send(data)
    })
})
// get user for user interface
app.get('/userlist',(req,res)=>{
    db.collection('user').find().toArray((err,data)=>{
        if (err) res.send('cant show list user')
        res.send(data)
    })

})
app.post('/reservedactivity',(req,res)=>{
    let reserved=req.body
    db.collection('reservedactivity').insertOne(reserved,(err,data)=>{
    if (err) res.send('cant add user')
    res.send(data)
    
    })
    
    })

    app.get('/:id',(req, res) =>{
        let id=ObjectID(req.params.id)
        db.collection('user').findOne({_id:id},(err,data)=>{
            if (err) res.send('error')
            res.send(data);
        })
        
    })
        


})










app.listen(3050,(err)=>{
    if(err) console.log('there is an error')
    else console.log('server is running on port 3050')
})