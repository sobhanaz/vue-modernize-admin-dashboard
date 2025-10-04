<script setup lang="ts">
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import Header from '@/components/frontpages/layout/Header.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import TextBannerCard from '@/components/frontpages/Shared/TextBannerCard.vue';
import Packages from '@/components/frontpages/Homepage/Packages.vue';
import SecurePayments from '@/components/frontpages/Homepage/SecurePayments.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <TextBannerCard caption="Pricing Page" title="Choose Your Plan" />
        <div class="pt-96">
            <Packages />
        </div>
        <SecurePayments />
        <div class="pt-96">
            <Purchase />
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>
