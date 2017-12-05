module.exports = () => Bloggify.services.todos.list().then(items => ({
    items
}))
