const initialSate =
{
    cryptos: [],
    allCryptos: [],
    cryptoDetail: {},
    favoritesCryptos: [],
};


function rootReducer(state = initialSate, {type, payload})
{
    switch(type)
    {
        case "GET_CRYPTOS":
            return {...state, cryptos: payload, allCryptos: payload};
        
        case "GET_CRYPTO_BY_ID":
            return {...state, cryptoDetail: payload};
        
        case "GET_CRYPTO_BY_NAME":
            return {...state, cryptos: payload};
        
        case "GET_FAVORITES":
            return {...state, favoritesCryptos: [...state.allCryptos.filter(e => payload.includes(e.id))]};
        
        case "ADD_FAVORITE":
            return {...state};
        
        case "DELETE_FAVORITE":
            return {...state};
        
        case "CLEAN_FAVORITES":
            return {...state, favoritesCryptos: payload};
        
        case "CLEAN_DETAIL_STATE":
            return {...state, cryptoDetail: payload};
        
        default:
            return {...state};
    };
};


export default rootReducer;