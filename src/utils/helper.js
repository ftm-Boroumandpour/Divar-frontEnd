

const filterPosts=(posts , categoryId)=>{
    if(!categoryId) return posts

    const filteredPosts= posts?.filter(post=> post.category==categoryId)
    

    return filteredPosts
}

export {filterPosts}