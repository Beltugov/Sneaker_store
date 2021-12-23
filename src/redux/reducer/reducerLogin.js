const initialState = {
    user: null,
    isLogIn: false
}

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

const isAuth = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                },
                isLogIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                user: null,
                isLogIn: false
            }
        default:
            return state
    }
}

export default isAuth;