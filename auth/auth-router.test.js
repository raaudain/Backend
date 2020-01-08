const request = require("supertest");

const server = require("../api/server");

describe("POST /register", function(){
    test("should return a 201 Created", function(){
        return request(server)
            .post("/api/auth/register")
            .send({
                username: Math.random(),
                password: "pass",
                email: `${Math.random()}@test.com` 
            })
            .then(res => {
                console.log(res.data, res.text)
                expect(res.status).toBe(201);
            })
    });

    test("should return a 400 Bad Request", function(){
        return request(server)
            .post("/api/auth/register")
            .send({
                username: Math.random(),
                password: "test",
                email: "" 
            })
            .then(res => {
                expect(res.status).toBe(400);
            })
    });
});


describe("POST /login", function(){
    test("should return a 200 OK", function(){
      return request(server)
        .post("/api/auth/login")
        .send({
          username: "ramon",
          password: "pass"
        })
        .then(res => {
          console.log(res.text)
          expect(res.status).toBe(200)
        })
    });

    test("should return a 401 Unauthorized", function(){
        return request(server)
          .post("/api/auth/login")
          .send({
            username: "test",
            password: "pass"
          })
          .then(res => {
            expect(res.status).toBe(401);
          })
      });
});
  
