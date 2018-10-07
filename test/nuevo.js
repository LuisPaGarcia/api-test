//@ts-check
const request = require("request");
const expect = require("chai").expect;
const url = "https://api.github.com/users/luispagarcia";


const valor = 5

describe("DESCRIPCION DE LA PRUEBA", () => {

    it("DETALLE DEL TEST CASE", (done) => {
        expect(valor).to.be.above(1);
        expect(valor).to.equal(5)
        done();
    });

    it("EJEMPLO CON UN HTTP REQUEST", (done) => {
        request.get({
            url: `${url}`,
            headers: { 'User-Agent': 'Awesome-Octocat-App' }
         },
            (error, response, body) => {
                let tempBody = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                expect(tempBody.login).to.equal("LuisPaGarcia");
                // console.log(tempBody, null, 2)
                done();
            })
    });

})
