/* module.exports = Object.freeze({
    SERVER_PORT: Object.freeze(9000),
    MONGO_URL: Object.freeze("mongodb://localhost:27017/"),
    CHIRPER_DB: Object.freeze("chirperdb"),
    USERS_COLLECTION : Object.freeze("users"),
    SETTINGS_COLLECTION: Object.freeze("settings"),
    POSTS_COLLECTION: Object.freeze("posts"),
    MESSAGES_COLLECTION: Object.freeze("messages"),
    COLLECTIONS_LIST:Object.freeze(["users", "settings","posts", "messages"])
}); */
/**
 * es 6 style of declaration...you don't need object freeze..no need for actual immutability 
 */
export const configData={
        SERVER_PORT:9000,
        MONGO_URL:'mongodb://localhost:27017/',
        CHIRPER_DB:'chirperdb',
        USERS_COLLECTION:'users',
        SETTINGS_COLLECTION:'settings',
        POSTS_COLLECTION:'posts',
        MESSAGES_COLLECTION:'messages',
        COLLECTIONS_LIST:['users','settings','posts','messages']
    };
