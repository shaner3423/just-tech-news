const Post = require('./Post');
const User = require('./User');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsToUser(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Post };
