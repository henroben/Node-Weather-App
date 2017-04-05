var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Luke'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(54, (userObject) => {
    console.log(userObject);
});