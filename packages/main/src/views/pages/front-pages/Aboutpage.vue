<script setup lang="ts">
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import Header from '@/components/frontpages/layout/Header.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import OurLeaders from '@/components/frontpages/Homepage/OurLeaders.vue';
import ContactBar from '@/components/frontpages/Homepage/ContactBar.vue';
import UserReview from '@/components/frontpages/Homepage/UserReview.vue';
import Packages from '@/components/frontpages/Homepage/Packages.vue';
import SecurePayments from '@/components/frontpages/Homepage/SecurePayments.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import Herotext from '@/components/frontpages/AboutUs/Herotext.vue';
import Setup from '@/components/frontpages/AboutUs/Setup.vue';
import Counter from '@/components/frontpages/AboutUs/Counter.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <!-- Aboutpage Contents -->
        <Herotext />
        <Setup />
        <Counter />
        <OurLeaders />
        <ContactBar />
        <div class="space-p-96">
            <UserReview />
        </div>
        <Packages />
        <SecurePayments />
        <div class="pt-96">
            <Purchase />
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>
