// The resolvers provides a resolver function for each API endpoint
const userArray = [
  {
    id: 5245454,
    name: 'Billy Bob',
    email: [
      {email: 'bob@gmail.com'},
      {email: 'bob2@gmail.com'}
    ]
  }
]

const filterPals =  (id) => {
  return userArray.find(pal => pal.id === id)
}


const resolvers = {
Query: {
  getFriend: (root, args, context) => {

    return filterPals(args.id)
  },
},
Mutation: {
  createFriend: (root, {input}) => {

      const {name, gender, email} = input
      const newFriend = {
        id: Math.floor(Math.random() * 100000000000000 + 1),
        name,
        gender,
        email
      }
      userArray.push(newFriend)

      return newFriend;



  }
}
}

module.exports = {resolvers}
