const mongo = require('./mongo')

const connectToMongoDB = async () => {
  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongodb!')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
