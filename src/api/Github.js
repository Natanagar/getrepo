import axios from 'axios';

class Api {
    constructor(){
        this.api = "https://api.github.com/users/Natanagar/repos";
        this.id = '75036bc1e12a2353f485';
        this.secret = 'a90bcd51f79ed75a37a8920086637e8e0a27e143';
    }

    getData = params => {
        return axios.get(
            `https://api.github.com/users/${params}/repos`, {
                params: {
                client_id : `${this.id}`,
                client_secret : `${this.secret}`
            }}
        )
      
    }
    getGithubData = name => {
      return axios.get(
     `https://api.github.com/repos/${name}/contents/`, {
        params: {
        client_id : `${this.id}`,
        client_secret : `${this.secret}`
        }})
    }
    getRepo = (id,name) => {
        return axios.get(
            `https://api.github.com/repos/${id}/${name}/contents/`, {
                params: {
                client_id : `${this.id}`,
                client_secret : `${this.secret}`
            }}
        )
    }
    getRepoGithub = parameter => {
        return axios.get(
            `https://api.github.com/search/repositories`, {
                params: {
                    client_id : `${this.id}`,
                    client_secret : `${this.secret}`,
                    q : `${parameter}`
                }
            }
        )
    }
}
export  const apiGithub = new Api();



