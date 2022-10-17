import { CHANGE_THEME } from "redux/constants/theme";

export const changeTheme = (theme: string) => {
    console.log(theme)
    return {
        type: CHANGE_THEME,
        data: theme
    };
};