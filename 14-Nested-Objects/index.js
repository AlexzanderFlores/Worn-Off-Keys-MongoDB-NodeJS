const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      const email = 'test@test.com'

      // Insert nested documents
      await new userSchema({
        email,
        username: 'testing',
        password: 'pass',
        messages: [
          {
            userId: email,
            text: 'hello world',
          },
          {
            userId: email,
            text: 'hello world 2',
          },
          {
            userId: email,
            text: 'hello world 3',
          },
        ],
      }).save()

      // Search for nested documents
      const results = await userSchema.findOne({
        'messages.text': 'hello world 2',
      })

      console.log('RESULTS:', results)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
