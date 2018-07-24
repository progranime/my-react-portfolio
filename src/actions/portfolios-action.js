export const GET_ALL_PORTFOLIOS = 'portfolios:getAllPortfolios'

export function getAllPortfolios () {
    return {
        type: GET_ALL_PORTFOLIOS,
        payload: {
            portfolios: {
                name: 'jeremy'
            }
        }
    }
}