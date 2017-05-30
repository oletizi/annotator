"use strict";

var storage = require('./storage');

function Admin(store) {
    console.log('Admin constructor');
    this.store = store;
}

exports.Admin = Admin;