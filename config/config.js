const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://deep:654321@ak@aks.x4g3g.mongodb.net/Authenticate?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}