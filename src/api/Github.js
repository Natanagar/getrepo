const Github = {
      api : "https://api.github.com/users/Natanagar/repos",
      id : '75036bc1e12a2353f485',
      secret : 'a90bcd51f79ed75a37a8920086637e8e0a27e143'

    }
const api = `https://api.github.com/users/Natanagar/repos/whatever?client_id=${Github.id}&client_secret=${Github.secret}`
console.log(api)
export default Github;
