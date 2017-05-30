var assert = require('assertive-chai').assert;
var sinon = require('sinon');
var store = require('../../src/storage');
var admin = require('../../src/admin');
describe('Admin', function () {
    var sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    describe('#create', function () {
        it('should create a new Admin instance', function () {
            console.log('storage: ' + store);
            console.log('admin: ' + admin);
            var mystore = sinon.createStubInstance(store.StorageAdapter);
            var a = new admin.Admin(mystore);
            assert.equal(a.store, mystore, 'Expected storage adapter to be set.');

        });
    });
});
