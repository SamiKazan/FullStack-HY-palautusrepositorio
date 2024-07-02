const mongoose = require('mongoose')

  const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    passwordHash: String,
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ],
  })

  userSchema.set('toJSON', {
    transform: (document, returnObject) => {
      returnObject.id = returnObject._id.toString()
      delete returnObject._id
      delete returnObject.__v
      delete returnObject.passwordHash
    }
  })

const User = mongoose.model('User', userSchema)

module.exports = User