const TopicSchema = new Bloggify.db.Schema({
    content: {
        type: String,
        text: true,
        required: true
    }
  , solved: {
        type: Boolean,
        default: false
    }
})

module.exports = Bloggify.db.model("Todo", TopicSchema)
