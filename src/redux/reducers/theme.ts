import { CHANGE_THEME } from "redux/constants/theme"

const INITIAL = {
    theme: 'light'
};

export const ThemeReducer = (state = INITIAL, action: any) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                theme: action.data
            }
        }
        default:
            return state;
    }
}