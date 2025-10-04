<script setup lang="ts">
import AnnounceBar from '@/components/frontpages/layout/AnnounceBar.vue';
import Header from '@/components/frontpages/layout/Header.vue';
import Footer from '@/components/frontpages/layout/Footer.vue';
import Purchase from '@/components/frontpages/Homepage/Purchase.vue';
import TextBannerCard from '@/components/frontpages/Shared/TextBannerCard.vue';
import BlogPagesPosts from '@/components/frontpages/Blog/BlogPagesPosts.vue';
</script>

<template>
    <div class="front-wraper">
        <!-- Header -->
        <AnnounceBar />
        <Header />

        <TextBannerCard caption="Blog Page" title="Latest blog & news" />

        <BlogPagesPosts/>

        <div class="pt-96">
            <Purchase />
        </div>

        <!-- Footer -->
        <Footer />
    </div>
</template>
