const { Todo } = Bloggify.models

exports.add = todo => {
    return new Todo(todo).save()
}

exports.toggle = _id => {
    return Todo.findOne({ _id }).then(todo => {
        todo.set("solved", !todo.get("solved"))
        return todo.save()
    })
}

exports.remove = _id => {
    return Todo.remove({ _id })
}

exports.list = () => Todo.find()
