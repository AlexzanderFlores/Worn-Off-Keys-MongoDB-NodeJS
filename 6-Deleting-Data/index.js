const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      await userSchema.deleteMany({
        email: 'test@email.com',
      })
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
