import React, { Component } from 'react';
import axios from 'axios';

//export const api = "https://api.github.com/users/Natanagar/repos";
//export const id = '75036bc1e12a2353f485';
//export const secret = 'a90bcd51f79ed75a37a8920086637e8e0a27e143';

class Api {
    constructor(){
        this.api = "https://api.github.com/users/Natanagar/repos";
        this.id = '75036bc1e12a2353f485';
        this.secret = 'a90bcd51f79ed75a37a8920086637e8e0a27e143';
    }

    getData = params => {
        return axios.get(
            `https://api.github.com/users/${params}/repos`, 
            /*{
                'headers' : {
                  'Authorization' : this.secret
                }
            }*/
        )
      
    }
    getRepo = (key)  => {
        return axios.get(
            `https://api.github.com/repositories/${key}/`
        )
    }
}
export  const apiGithub = new Api();



