<script setup lang="ts">
import Header from '@/components/frontpages/layout/Header.vue';
import Features from '@/components/frontpages/Homepage/Features.vue';
import FeatureTabs from '@/components/frontpages/Homepage/FeatureTabs.vue';
import OurLeaders from '@/components/frontpages/Homepage/OurLeaders.vue';
import ContactBar from '@/components/frontpages/Homepage/ContactBar.vue';
import OurTemplates from '@/components/frontpages/Homepage/OurTemplates.vue';
import UserReview from '@/components/frontpages/Homepage/UserReview.vue';
import OurFeatures from '@/components/frontpages/Homepage/OurFeatures.vue';
import Packages from '@/components/frontpages/Homepage/Packages.vue';
import SecurePayments from '@/components/frontpages/Homepage/SecurePayments.vue';
import FAQ from '@/components/frontpages/Homepage/FAQ.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import MainBanner from '@/components/frontpages/Homepage/mainBanner.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <!-- Content -->
        <MainBanner />
        <Features />
        <FeatureTabs />
        <OurLeaders />
        <ContactBar />
        <OurTemplates />
        <UserReview />
        <OurFeatures />
        <Packages />
        <SecurePayments />
        <FAQ />
        <Purchase />

        <!-- Footer -->
        <Footer />
    </div>
</template>
