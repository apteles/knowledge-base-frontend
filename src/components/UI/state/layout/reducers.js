export default (state, action) => {
    switch (action.type) {
        case '@layout/TOGGLE_MENU':
            return { ...state, menu: { isActive: !state.menu.isActive } };
        default:
            return state;
    }
};
