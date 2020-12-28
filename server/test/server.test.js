import server from "../index"

import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

const { it, describe, beforeEach, afterEach } = mocha;
chai.should();
chai.use(chaiHttp);

const testMessage =  {
    name : "Alexis",
    email: "alexisvacilli1@gmail.com",
    message: "Hi"
}

describe('test/server', async () => {
    it('Route does not exist', async () => {
        const res = await chai.request(server).get('/message');
res.should.have.status(404)
    })

   it('should route to message', (done) => {
       chai.request(server)
       .post('/alex/message')
       .send(testMessage)
       .end((err,res)=>{
        res.should.have.status(200)
        res.body.should.have.property("success")
        done()
       })
   });
   
});