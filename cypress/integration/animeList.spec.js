const {sampleQuery} = require('./graphql')

const query = `
    query ($id: Int) {
        Media (id: $id, type: ANIME) {
            id
            title {
                romaji
                english
                native
            }
        }    
    }`
const variables = {
    id: 15125
}

it('cy.request should return graph query', function () {
    cy.request({
        method: 'POST',
        url: '/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    })
});

it('cy.api should return graph query', function () {
    cy.api({
        method: 'POST',
        url: '/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    })
});

it('should return graphql query plugin', function () {
    cy.graphQL(sampleQuery,variables)
});

