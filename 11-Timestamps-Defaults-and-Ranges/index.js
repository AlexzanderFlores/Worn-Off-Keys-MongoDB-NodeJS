const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongodb!')

      const newUser = await new userSchema({
        email: 'test@testing.com',
        username: 'New user',
        password: 'Pass123',
        messages: 10,
      })

      const valid = await new Promise((resolve) => {
        newUser.validate((err) => {
          if (err) {
            console.log('ERROR:', err)
            resolve(false)
          } else {
            resolve(true)
          }
        })
      })

      if (valid) {
        await newUser.save()
        console.log('Saved the new user')
      }

      // await userSchema.findOneAndUpdate(
      //   {
      //     username: 'New user',
      //   },
      //   {
      //     messages: 5,
      //   }
      // )
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
