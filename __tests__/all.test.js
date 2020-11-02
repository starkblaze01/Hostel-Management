const request = require("supertest");
const {app} = require('../server');

const payload = {
    email: 'mp.pathela@gmail.com',
    password: 'password',
};

jest.setTimeout(10000);
jest.retryTimes(3);

describe('Route /api/users', () => {
    describe('POST /api/users/login', () => {
        test('should return authorization token', done => {
            const user = payload;

            request(app)
                .post('/api/users/login')
                .send(user)
                .expect(200)
                .expect(res => {
                    expect(res.body.success).toBeTruthy();
                    expect(res.body.token).toBeTruthy();
                })
                .end(done);
        });

        test('should return 404 if user not found', done => {
            const user = {
                email: 'does_not_exists@gmail.com',
                password: 'password'
            };

            request(app)
                .post('/api/users/login')
                .send(user)
                .expect(404)
                .end(done);
        });
    })

    describe('POST /api/users/register', () => {
        // Enable it to test for new user
        // test('should register a new user', done => {
        //     const user = {
        //         email: 'mp.pathela@gmail.virginmojito',
        //         password: 'password',
        //         password2: 'password',
        //         name: 'Mayank'
        //     };

        //     request(app)
        //         .post('/api/users/register')
        //         .send(user)
        //         .expect(200)
        //         .expect(res => {
        //             expect(res.body.name).toBe(user.name);
        //             expect(res.body.email).toBe(user.email);
        //         })
        //         .end(done);
        // });
        test('should not register the user if already exist', done => {
            const user = {
                email: 'mp.pathela@gmail.virginmojito',
                password: 'password',
                password2: 'password',
                name: 'Mayank'
            };

            request(app)
                .post('/api/users/register')
                .send(user)
                .expect(400)
                .expect(res => {
                    expect(res.body.name).toBeFalsy();
                })
                .end(done);
        });
    });
});

describe('Route /api/student', () => {
    describe('GET /api/student/all', () => {
        test('Get all the student details', done => {
            request(app)
                .get('/api/student/all')
                .expect(200)
                .expect(res => {
                    expect(res.body).toBeTruthy();
                })
                .end(done);
        });
    });
});