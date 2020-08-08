const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      const results = await userSchema
        .find({})
        .sort({
          messages: -1,
        })
        .limit(10)

      console.log('RESULTS:', results)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
