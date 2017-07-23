module.exports = Object.freeze({
    SERVER_PORT: Object.freeze(9000),
    MONGO_URL: Object.freeze("mongodb://localhost:27017/"),
    CHIRPER_DB: Object.freeze("chirperdb"),
    USERS_COLLECTION : Object.freeze("users"),
    SETTINGS_COLLECTION: Object.freeze("settings"),
    POSTS_COLLECTION: Object.freeze("posts"),
    MESSAGES_COLLECTION: Object.freeze("messages"),
    COLLECTIONS_LIST:Object.freeze(["users", "settings","posts", "messages"])
});