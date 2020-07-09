export default (state, action) => {
    switch (action.type) {
        case '@layout/TOGGLE_MENU':
            return {
                ...state,
                menu: {
                    ...state.menu,
                    sidebar: {
                        ...state.menu.sidebar,
                        active: !state.menu.sidebar.active,
                    },
                },
            };
        case '@layout/TOGGLE_MENU_USER':
            return {
                ...state,
                menu: {
                    ...state.menu,
                    user: {
                        ...state.menu.user,
                        active: !state.menu.user.active,
                    },
                },
            };
        default:
            return state;
    }
};
