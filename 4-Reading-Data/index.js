const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      const result = await userSchema.findOne({
        password: 'Password1!',
      })
      console.log('Result:', result)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
