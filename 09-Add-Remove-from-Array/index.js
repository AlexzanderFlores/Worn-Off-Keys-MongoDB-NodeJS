const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      const newName = 'joe'

      await userSchema.findOneAndUpdate(
        {
          email: 'test@email.com',
        },
        {
          $pull: {
            nameHistory: newName,
          },
        }
      )
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
