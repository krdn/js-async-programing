function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = userId === 1 ? 
                        { id: userId, name: 'GYMCODING'} : null;
        // callback(user)
        resolve(user)
      } catch (error) {
        reject(error)
      }
    }, 1000)
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        {id: 1, title: 'Post 1'},
        {id: 2, title: 'Post 2'},
      ]
      resolve(posts)
    }, 1000);
  })
}

function getComments(postId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'}
      ]
      resolve(comments)
    }, 1000)
  })
}

function runPromise() {
  getUser(0)
    .then(user => {
      if (user) {
        console.log('user: ', user)
      } else {
        console.log('유저가 없어요!')
      }
    })
    .catch(err => console.log(err))
}

async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log('user: ', user)
    console.log('posts: ', posts)
    console.log('comments: ', comments)
    return user;
  } catch (error) {
    console.log('error: ', error)
  }
}

// runPromise();
console.log('start')
runAsyncAwait().then(user => console.log('user: ', user))
console.log('end')