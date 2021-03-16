<template>
    <section>
        <Header />
        <div class="container">
            <h4 class="header-title">
                Here is the full list of prizes that you can win.
            </h4>
            <div v-if="loading" align="center" class="loader">
                Getting prizes...
            </div>

            <div class="row prizes" v-if="!loading">
                <div
                    class="col-12 col-sm-6 col-md-4"
                    v-for="(item, index) in prizes"
                    :key="index"
                >
                    <div class="prizes-item">
                        <div class="prizes-item-img">
                            <img :src="getImage(item.image_url)" alt="" />
                        </div>
                        <div class="prizes-item-desc">
                            <h3>{{ item.name }}</h3>
                            <router-link
                                :to="{
                                    name: 'Detail',
                                    params: { id: item._id },
                                }"
                                ><button type="button" class="btn">
                                    Redeem
                                </button></router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </section>
</template>
<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import axios from "axios";

export default {
    components: { Header, Footer },
    data() {
        return {
            prizes: [],
            loading: true,
        };
    },
    mounted() {
        const apiURL = "http://localhost:3000";
        axios.get(apiURL + "/prizes").then((response) => {
            this.prizes = response.data;
            this.loading = false;
        });
    },
    methods: {
        getImage(name) {
            return require("../assets/images/" + name);
        },
    },
};
</script>
