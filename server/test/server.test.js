import server from "../index";
import "babel-polyfill";
import "babel-core/register";
import path from 'path'

import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import { endianness } from "os";
import { error } from "console";
import { async } from "regenerator-runtime";
const { it, describe, beforeEach, afterEach } = mocha;
chai.should();
chai.use(chaiHttp);


const testPost =  {
    title : "Web development ",
    description: "hey this must work"
}
describe('test/server', async () => {
  it('should not find this route', async () => {
      const res = await chai.request(server).get('/alexis/vacili')
      res.should.have.status(404)
  })


   it("should create post", async () => {
    const res = await chai
      .request(server)
      .post("/alex/article")
      .set('content-type','multipart/form-data')
      .field("title", testPost.title)
      .field("description", testPost.description)
      .attach("image", path.resolve(__dirname, "./uploads/test.png"))
      res.should.have.status(201)
    })
  })

