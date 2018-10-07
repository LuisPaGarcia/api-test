//@ts-check
// const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const url = "https://api.github.com/users/";
const usuarioGithub = 'luispagarcia'


const arrayDeEjemplo = [1, 2, 3, 4];

describe("Verifica el nombre de github", () => {

    it("Valida que un dato es array", (done) => {
        expect(arrayDeEjemplo).to.be.a("array")
        expect(arrayDeEjemplo.length).to.equal(4)
        done();
    });

    it("Valida que el nombre sea LuisPaGarcia", (done) => {
        request.get({
            url: `${url}${usuarioGithub}`,
            headers: { 'User-Agent': 'Awesome-Octocat-App' }
        },
            (error, response, body) => {
                let tempBody = JSON.parse(body);
                // console.log(tempBody, null, 2)
                expect(response.statusCode).to.equal(200);
                expect(tempBody.login).to.equal("LuisPaGarcia");
                done();
            })
    });
   
    it("Valida que el nombre sea un string", (done) => {
        request.get({
            url: `${url}luispagarcia`,
            headers: { 'User-Agent': 'Awesome-Octocat-App' }
        },
            (error, response, body) => {
                let tempBody = JSON.parse(body);
                expect(tempBody.login).to.be.a("String");
                done();
            })
    });

})
