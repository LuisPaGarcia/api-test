//@ts-check

// let should = require("should");
let request = require("request");
let expect = require("chai").expect;
const apiUrl = "https://swapi.co/api";

describe("Retorna el objeto Luke", () => {
    it("Retorna luke", (done) => {
        request.get({ url: `${apiUrl}/people/1` },
            (error, response, body) => {
                let bodyObj = JSON.parse(body);
                expect(bodyObj.name).to.equal("Luke Skywalker");
                expect(response.statusCode).to.equal(200);
                done();
            })
    })
});

// Validar tipos
describe("Valida los tipos de datos", () => {
    it("Valida que las peliculas sean un array", (done) => {
        request.get({ url: `${apiUrl}/people/1` },
            (error, response, body) => {
                let bodyObj = JSON.parse(body);
                expect(bodyObj.films).to.be.a("array")
                done();
            })
    })
});



