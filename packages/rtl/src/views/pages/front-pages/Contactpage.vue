<script setup lang="ts">
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import Header from '@/components/frontpages/layout/Header.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import TitleBanner from '@/components/frontpages/ContactUs/TitleBanner.vue';
import ContactMap from '@/components/frontpages/ContactUs/ContactMap.vue';
import ContactForm from '@/components/frontpages/ContactUs/ContactForm.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <TitleBanner/>
        <ContactMap/>
        <ContactForm/>
        <Purchase />

        <!-- Footer -->
        <Footer />
    </div>
</template>
