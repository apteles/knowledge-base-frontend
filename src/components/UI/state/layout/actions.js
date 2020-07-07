export function toggleMenu(dispatch) {
    return () => dispatch({ type: '@layout/TOGGLE_MENU' });
}
export function foo(dispatch) {
    return () => dispatch({ type: '@layout/foo' });
}
