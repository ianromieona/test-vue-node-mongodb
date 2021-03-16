<template>
    <div class="prize-modal">
        <div class="prize-modal-content" v-if="apiCallStatus === null">
            <h4>
                Are you sure?
            </h4>
            <img
                src="@/assets/images/sample.png"
                class="prize-modal-content-image"
                alt=""
            />
            <h3>Redeem for {{ prize.name }}?</h3>

            <div class="prize-modal-content-actions">
                <button type="button" class="btn no-caret" @click="redeem">
                    Yes
                </button>
                <button type="button" class="btn no-caret light" @click="close">
                    Cancel
                </button>
            </div>
        </div>

        <div class="prize-modal-content success" v-if="apiCallStatus === true">
            <h4>
                Congratulations!
            </h4>
            <h3>You redeem <br />{{ prize.name }}.</h3>

            <div class="prize-modal-content-actions">
                <router-link
                    :to="{
                        name: 'Home',
                    }"
                    ><button type="button" class="btn no-caret">
                        More Prizes
                    </button>
                </router-link>
            </div>
        </div>

        <div class="prize-modal-content" v-if="apiCallStatus === false">
            <h4>
                Error Occured
            </h4>

            <div class="prize-modal-content-actions">
                <button type="button" class="btn no-caret light" @click="close">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        method: { type: Function },
        prize: Object,
    },
    data() {
        return {
            loading: false,
            apiCallStatus: null,
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },

        redeem() {
            const apiURL = "http://localhost:3000";

            axios
                .post(apiURL + "/prizes/" + this.$route.params.id)
                .then(() => {
                    this.apiCallStatus = true;
                    this.loading = false;
                })
                .catch(() => {
                    this.apiCallStatus = false;
                    this.loading = false;
                });
        },
    },
};
</script>
