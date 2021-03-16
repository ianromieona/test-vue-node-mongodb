<template>
    <section>
        <div class="navigation">
            <ul class="nav justify-content-between">
                <li class="nav-item">
                    <router-link
                        :to="{
                            name: 'Home',
                        }"
                        >LOGO</router-link
                    >
                </li>

                <li class="nav-item right profile-nav">
                    <img
                        src="@/assets/images/women-1.jpeg"
                        class="avatar"
                        alt=""
                    />
                    <a class="nav-link" href="#">John Smith</a>
                </li>
            </ul>
        </div>
        <div class="banner">
            Rewards
        </div>
    </section>
</template>
