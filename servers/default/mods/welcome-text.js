// Change the server welcome text dialog

module.exports = function (config) {
    if (config.backend) {
        config.backend.welcomeText = `<h3>Welcome to <screeps_server>!</h3>`;
    }
};
