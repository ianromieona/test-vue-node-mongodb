<template>
    <section>
        <Header />
        <div v-if="loading" align="center" class="loader">
            Getting prize...
        </div>
        <div v-if="loading && !prize" align="center" class="loader">
            No data found
        </div>
        <div class="container" v-if="!loading && prize">
            <div class="row prize-details">
                <div class="col-12 col-md-6">
                    <div class="prize-details-img">
                        <img :src="getImage(prize.image_url)" alt="" />
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="prize-details-desc">
                        <h4>{{ prize.name }}</h4>
                        <div class="prize-details-desc-action">
                            <button
                                type="button"
                                class="btn"
                                data-toggle="modal"
                                data-target="#redeem"
                                :disabled="prize.quantity <= 0"
                                @click="modal.open = true"
                            >
                                Redeem
                            </button>
                        </div>
                        <div class="prize-details-desc-stock">
                            {{ prize.quantity }} left in stock
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row description">
                <div class="col-2 title">Description</div>
                <div class="col-10 note">{{ prize.description }}</div>
            </div>
        </div>
        <Modal
            v-if="modal.open && prize.quantity > 0"
            @close="
                modal.open = false;
                getDetail();
            "
            :prize="prize"
        />
        <Footer />
    </section>
</template>
<script>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import Modal from "./Modal.vue";
import axios from "axios";

export default {
    components: { Header, Footer, Modal },
    data() {
        return {
            modal: {
                open: false,
            },
            prize: null,
            loading: true,
        };
    },
    mounted() {
        this.getDetail();
    },
    methods: {
        getImage(name) {
            return require("../assets/images/" + name);
        },

        getDetail() {
            const apiURL = "https://secret-hamlet-52217.herokuapp.com";

            axios
                .get(apiURL + "/prizes/" + this.$route.params.id)
                .then((response) => {
                    this.prize = response.data;
                    this.loading = false;
                })
                .catch(() => {
                    this.loading = false;
                });
        },
    },
};
</script>
