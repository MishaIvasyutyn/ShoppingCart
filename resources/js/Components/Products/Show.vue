<template>
<section class="text-gray-700 body-font  overflow-hidden" v-if="product">
    <div class="container px-12  py-24 mx-auto">
        <div class="lg:w-3/5 mx-auto flex flex-wrap">
            <img src="https://dummyimage.com/640" alt="ecommerce img"
                 class="lg:w-1/2 w-full lg:h-auto  h-64 object-cover object-center  rounded">
            <div class="lg:w-1/2 w-full  lg:pl-10  lg:py-6 mt-6  lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase inline-block mr-2"
                    v-for="category in product.categories"
                    v-text="category.name"></h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-2"
                v-text="product.name"></h1>
                <p class="leading-relaxed"
                v-text="product.description"></p>
                <div class="flex mt-6 pt-4  border-t-2  border-gray-200">
                    <span class="title-font font-medium text-2xl text-gray-900"
                    v-text="formatCurrency(product.price)">
                    </span>
                    <button @click="addToCart(product)" class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Card</button>
                </div>

            </div>
        </div>
    </div>


</section>
</template>

<script>
import Somemixin from "../../mixins/Somemixin";
export default {
    name: "Show",
    data: () => ({
        products: [],
        cart: [],
    }),
    mixins: [Somemixin],
    computed:{
        product(){
        return this.products.find(product => product.slug === this.$route.params.slug)
        },
    },
    methods: {
        formatCurrency(price) {
            price = (price / 100);
            return price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        getProducts() {
            axios.get('/api/products')
                .then(response => {(
                    this.updateProduct(response.data)
                )}).catch(error => {
                console.log(error.response.data);
            });
        },
        updateProduct(product) {
            this.products = product;
        },
        addToCart(product) {
            let productInCartIndex = this.cart.findIndex(item => item.slug == product.slug);
            if (productInCartIndex !== -1) {
                this.cart[productInCartIndex].quantity++;
                return;
            }
            product.quantity = 1;
            this.cart.push(product);
        },
    },

    created() {
        this.getProducts();
    },
}
</script>

<style scoped>

</style>
