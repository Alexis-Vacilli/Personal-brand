import server from "../index";
// import should from 'chai/register-should'

import chai, { should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

const { it, describe } = mocha;
chai.should();
chai.use(chaiHttp);


// describe("Auth",()=>{
//     const user={
//         email:'blaise@gmail.com',
//         passwoed: 'bernard'
//     };
//     it("it should loggin a user",(done)=>{
//         chai.request(server)
//         .post('user/login')
//         .send(user)
//         .end((error,res)=>{
//             res.should.have.status(200)
//             res.body.should.be.a('object')
//             res.body.should.have.property('message').eql("Auth successful")
//             res.body.should.have.property('token')
//             done()
//         })
//     })
// })

const mockUser = {
    email:'blaise@gmail.com',
    password: 'bernard'
}

describe('Login a user', async () => {
    it('should login a user', async  () => {
        const res = await chai.request(server).post('/user/login').send(mockUser)
        res.should.have.status(200)
    })

    it('should not login', async () => {
        const mockuser = {
            email:'blaise@gmail.com',
            password: 'bernarrd'
        }
        const res = await chai.request(server).post('/user/login').send(mockuser)
        res.should.have.status(401)
    })

    it('server error', async () => {
        const res = await chai.request(server).post('/user/login').send()
        res.should.have.status(500)
    })
})


