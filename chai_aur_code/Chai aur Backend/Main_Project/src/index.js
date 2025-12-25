// require('dotenv').config({path: './env'})

import dotenv from 'dotenv'
import connectDb from './db/index.js';
import { app } from './app.js';

// It help to load the .env variable before the index.js 
dotenv.config({
    path: './env'
})

connectDb()
    .then(() => {
        app.on('error', (error) => {
            console.log('Error:', error)
            throw error
        })
        
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log('MONGDB CONNECTION FAILED', err);
    })

/*
Example 1 - How to connect database

import mongoose from 'mongoose'
import { DB_NAME } from './constants';

import express from 'express'
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('Error:', error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log('Error', error);
        throw error
    }   
})()
*/


