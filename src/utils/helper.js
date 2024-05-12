

const filterPosts=(posts , categoryId)=>{
    if(!categoryId) return posts

    const filteredPosts= posts.filter(post=> post._id===categoryId)

    return filteredPosts
}

export {filterPosts}