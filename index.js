const fs = require("fs")


const main = (path) => {
    return new Promise(function(resolve, reject){
        fs.readFile(path, function(error, data) {
            if (error && error.code === 'ENOENT') {
                reject({ message: "File Does Not Exist" })
            } else {
                reject({ message: "Path is a directory" })
            }
            try {
                resolve(JSON.parse(data))
            } catch (error) {
                reject({ message: "JSON Invalid" })
            }
        })
    })
};

module.exports = main;
