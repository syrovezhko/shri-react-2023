export const selectorCartModule = (state) =>  state.cart

export const selectProductAmount = (state, id) => selectorCartModule(state)[id] || 0