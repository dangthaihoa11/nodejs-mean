class Admin {
    constructor(url) {
        this.url = url;
    }

    path() {
        return 'main';
    }

    module_name() {
        return this.url.split('/')[2];
    }

    function_name() {
        return this.url.split('/')[3];
    }
}

module.exports = Admin