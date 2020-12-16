import server from "../index";
import chai, { should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
const { it, describe } = mocha;
chai.should();
chai.use(chaiHttp);


const mockUser = {
    email:'blaiseee@gmail.com',
    password: 'bernard12'
}

describe('sign a user', async () => {
    it('should signup a user', async  () => {
        const res = await chai.request(server).post('/user/signup').send(mockUser)
        res.should.have.status(201)
    })

    it('should not signin a user', async () => {
        const mockuser = {
            email:'blaise@gmail.com',
            password: 'bernarrd'
        }
        const res = await chai.request(server).post('/user/signup').send(mockuser)
        res.should.have.status(409)
    })

    it('server error', async () => {
        const res = await chai.request(server).post('/user/signup').send()
        res.should.have.status(500)
    })
})


