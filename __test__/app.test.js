const app = require('../server');
const request = require('supertest');

//USERS POST REQUEST
describe('POST request to /users/register', ()=>{

    describe('All input fields are completed', ()=>{

        let response;

        beforeEach( async() =>{
            response = await request(app).post('/users/register').send({
                username: 'User',
                email: 'user@mail.com'
            })
        })

        it('Returns HTTP status of 201', async () =>{
            expect(response.statusCode).toBe(201)
        })
        it('Returns a JSON response', async () =>{
            expect(response.headers['content-type']).toContain('json')
        })
        it('Returns an ID field', async () => {
            expect(response.body.id).toEqual(2)
        })
    })

    describe('Some input fields are missing', ()=>{
        it('Shoud return status 400', async () =>{
            const postData = [
                {username: '' || null },
                { email: '' || null}
            ]
    
            for(data of postData){
                const response = await request(app).post('/users/register').send(data)
                expect(response.statusCode).toBe(400)
            }
        })
    })
})