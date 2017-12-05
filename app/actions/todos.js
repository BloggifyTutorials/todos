let todos = null
Bloggify.ready(() => {
    todos = Bloggify.services.todos
})

const redirect = (ctx, error) => {
    if (error) {
        return ctx.redirect(`/?error=${error.message}`)
    }

    ctx.redirect("/")
}


exports.list = () => {
    return Todo.find()
}

exports.add = ["post", ctx => {
    return todos.add(ctx.data)
}, redirect]

exports.toggle = ["post", ctx => {
    return todos.toggle(ctx.data._id)
}, redirect]

exports.remove = ["post", ctx => {
    return todos.remove(ctx.data._id)
}, redirect]
