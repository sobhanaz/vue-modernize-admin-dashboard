<script setup lang="ts">
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import Header from '@/components/frontpages/layout/Header.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import TextBannerCard from '@/components/frontpages/Shared/TextBannerCard.vue';
import GalleryBox from '@/components/frontpages/Portfolio/GalleryBox.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <TextBannerCard caption="Portfolio" title="Explore Our Latest Works" />
        <GalleryBox />
        <Purchase />

        <!-- Footer -->
        <Footer />
    </div>
</template>
