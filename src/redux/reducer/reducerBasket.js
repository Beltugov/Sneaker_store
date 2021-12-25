const initialState = {
    item: [],
    totalPrice: 0,
    totalCount: 0,
}

export const SET_PRICE = 'SET_PRICE'
export const SET_COUNT = 'SET_COUNT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const basket = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            }
        case SET_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                item: [...state.item, action.payload],
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                ...state.item.splice(action.payload - 1, 1),
            }

        default:
            return state
    }
}

export default basket;