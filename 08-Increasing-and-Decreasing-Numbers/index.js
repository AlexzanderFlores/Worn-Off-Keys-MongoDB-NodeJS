const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      let password = 'abc123'

      const result = await userSchema.findOneAndUpdate(
        {
          username: 'Frank',
        },
        {
          email: 'test@email.com',
          username: 'Frank',
          password,
          $inc: {
            messages: -2,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      console.log('RESULT:', result)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
