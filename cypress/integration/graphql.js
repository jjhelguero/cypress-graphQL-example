const { gql } = require('graphql-request');

module.exports = {
    sampleQuery: gql`
    query ($id: Int) {
        Media (id: $id, type: ANIME) {
            id
            title {
                romaji
                english
                native
            }
        }    
    }`,
};