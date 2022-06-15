<template>
    <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4" v-if="!allproducts.length">
                <div class="lg:w-1/4 md:w-1/2 p-4  w-full mb-4">
                    <a class="block relative  h-48 rounded  overflow-hidden">
                        <img src="https://dummyimage.com/420" alt="ecommerce img"
                             class="object-center object-cover w-full h-full block">
                    </a>
                    <div class="mt-4">
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2">
                            N/A</h3>
                        <h2 class="text-gray-900 title-font text-lg font-medium">Loading</h2>
                        <p class="mt-1">$0.00</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -m-4" v-else>
                <div class="lg:w-1/4 md:w-1/2 p-4  w-full mb-4" v-for="product in allproducts"
                     :key="product.id"
                >
                    <router-link :to="{name: 'product.show', params: {slug: product.slug}}"
                                 class="block relative  h-48 rounded  overflow-hidden">
                        <img src="https://api.lorem.space/image/face?hash=33791" alt="ecommerce img"
                             class="object-center object-cover w-full h-full block">
                    </router-link>
                    <div class="mt-4">
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase inline-block mr-2"
                            v-for="category in product.categories"
                            v-text="category.name"></h3>
                        <h2 class="text-gray-900 title-font text-lg font-medium" v-text="product.name"></h2>
                        <p class="mt-1" v-text="formatCurrency(product.price)"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index",
    data: () => ({
        products: [],
    }),
    computed: {
        allproducts() {
            return this.products;
        }
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
    },
    created() {
     this.getProducts();
    }
}
</script>

<style scoped>

</style>
