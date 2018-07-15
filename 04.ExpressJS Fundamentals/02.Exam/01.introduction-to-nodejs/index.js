const storage = require('./storage');

storage.loadAsync().then(() => { console.log(storage.get("test2")); }).catch(() => { throw new Error("error")});