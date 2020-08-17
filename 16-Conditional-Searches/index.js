const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      // Creating a test user
      // await new userSchema({
      //   email: 'testing@test.com',
      //   username: 'Test',
      //   pass: 'abc123',
      //   level: 10,
      // }).save()

      // Search for users with a level > 10
      const results = await userSchema.find({
        level: {
          $exists: false,
        },
      })

      console.log('RESULTS:', results)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
