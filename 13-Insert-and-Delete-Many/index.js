const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      // Inserting multiple documents
      await userSchema.insertMany([
        {
          email: 'test1@email.com',
          username: 'test 1',
          password: 'passsword',
        },
        {
          email: 'test2@email.com',
          username: 'test 2',
          password: 'passsword',
        },
        {
          email: 'test3@email.com',
          username: 'test 3',
          password: 'passsword',
        },
      ])

      // Deleting multiple documents
      await userSchema.deleteMany({
        username: ['test 1', 'test 2'],
      })
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
