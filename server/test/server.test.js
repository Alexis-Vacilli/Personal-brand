import server from "../index"

import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

const { it, describe, beforeEach, afterEach } = mocha;
chai.should();
chai.use(chaiHttp);

describe('test/server', async () => {
    it('Route does not exist', async () => {
        const res = await chai.request(server).get('/article');
res.should.have.status(404)
    })

   it('should route to articles', async () => {
       const res = await chai.request(server).get('/alex/article');
       res.should.have.status(200)
       res.body.should.have.property("success")
   })

})