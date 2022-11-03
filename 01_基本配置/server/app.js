const express = require('express')
const { resolve } = require('path')
const { readFileSync } = require('fs')
const app = express()

app.get('/api/getStudent', (req, res) => {
    const studentData = JSON.parse(readFileSync(resolve('./student.json'), 'utf-8'))
    res.send(studentData)
})
app.listen(4000, (err) => {
    console.log('http://localhost:4000/')
})
