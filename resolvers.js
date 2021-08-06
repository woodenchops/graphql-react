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

// console.log(filterPals(5245454));


const resolvers = {
Query: {
  getFriend: (root, args, context) => {
    // console.log('hghg', args.id);
    return filterPals(args.id)
  },
},
Mutation: {
  createFriend: (root, {input}) => {
    // console.log('kkkkkk', input);

      const {name, gender, email} = input
      const newFiend = userArray.push({
        id: Math.random(),
        name,
        gender,
        email
      })

      console.log('new', userArray);
      return newFiend;



  }
}
}

module.exports = {resolvers}
