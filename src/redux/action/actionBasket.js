export const setPrice = (price) => ({
    type: 'SET_PRICE',
    payload: price
})

export const setCount = (count) => ({
    type: 'SET_COUNT',
    payload: count + 1
})

export const removeCount = (count) => ({
    type: 'SET_COUNT',
    payload: count - 1
})

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
})

export const removeProduct = (num) => ({
    type: 'REMOVE_PRODUCT',
    payload: num
})

