const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      // await new userSchema({
      //   email: 'test@test.com',
      //   username: 'User',
      //   pass: 'abc123',
      //   testScore: [85, 90, 77],
      // }).save()

      let result

      // result = await userSchema.find({
      //   testScore: {
      //     $all: [100],
      //   },
      // })

      // result = await userSchema.find({
      //   testScore: {
      //     $size: 4,
      //   },
      // })

      result = await userSchema.find({
        testScore: {
          $elemMatch: {
            $lte: 80,
          },
        },
      })

      console.log('RESULT:', result)
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
