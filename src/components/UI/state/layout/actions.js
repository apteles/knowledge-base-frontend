export function toggleMenu(dispatch) {
    return () => dispatch({ type: '@layout/TOGGLE_MENU' });
}
export function toggleMenuUser(dispatch) {
    return () => dispatch({ type: '@layout/TOGGLE_MENU_USER' });
}
