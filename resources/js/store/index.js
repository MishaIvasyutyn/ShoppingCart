import { createStore } from 'vuex'

import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        count: 0
    }
})

// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
}







export default createStore({
    state: {
        products: [],
        cart: [],
        order: {}
    },
    mutations: {
        updateProduct(state, product) {
            state.products = product;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug == product.slug);
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                return;
            }
            product.quantity = 1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        }
    },
    actions: {
        getProducts({commit}) {
            axios.get('/api/products')
                .then(response => {
                    commit('updateProduct', response.data);
                }).catch((error) => console.log(error));
        },
        ClearCart({commit}) {
            commit('updateCart', []);
        }
    }
});



