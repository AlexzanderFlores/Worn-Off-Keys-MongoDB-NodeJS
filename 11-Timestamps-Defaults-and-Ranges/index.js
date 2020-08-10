const mongo = require('./mongo')
const message = require('./schemas/message-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      await new message({
        text: 'hello world',
      }).save()
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
