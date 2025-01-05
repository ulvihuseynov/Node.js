const { name } = require('ejs')
const express=require('express')

const app=express()
app.set('view engine','ejs')


const products=[
    {
        id:1,
        name:'Telefon',
        price:500
    },
    {
        id:2,
        name:'Televizor',
        price:800
    } ,
     {
        id:3,
        name:'Komputer',
        price:1000
    }
]


app.use('/',(req,res)=>{
    res.render('products',{products:products})
})

// app.use('/',(req,res)=>{
//     res.json({message:'Home'})

// })



app.listen(2000,()=>{
    console.log('server calisti:2000')
})