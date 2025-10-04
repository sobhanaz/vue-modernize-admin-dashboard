<script setup lang="ts">
import { FooterMenu1, FooterMenu2, FooterMenu3 } from '@/_mockApis/front-pages/PagesData';
</script>

<template>
    <div class="space-p-96">
        <v-container class="max-width-1218">
            <v-row>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Explore</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu1" :key="item.menu">
                            <v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Features</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu2" :key="item.menu">
                            <v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Resources</h5>
                    <div class="d-flex flex-column ga-4">
                        <div v-for="item in FooterMenu3" :key="item.menu">
                            <v-btn variant="text" :href="item.link" target="_blank" class="text-hover-primary link-btn opacity-80">
                                {{ item.menu }}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" lg="3" sm="6">
                    <h5 class="text-17 textPrimary mb-sm-7 mb-6">Follow us</h5>
                    <div class="d-flex ga-5 opacity-90 social-icon">
                        <v-btn variant="text" href="/" target="_blank" class="link-btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21817_22409)">
                                    <path
                                        d="M22 11C22 4.92422 17.0758 0 11 0C4.92422 0 0 4.92422 0 11C0 16.1562 3.55352 20.4875 8.34453 21.6777V14.3602H6.07578V11H8.34453V9.55195C8.34453 5.80938 10.0375 4.07344 13.7156 4.07344C14.4117 4.07344 15.6148 4.21094 16.109 4.34844V7.39062C15.8512 7.36484 15.4 7.34766 14.8371 7.34766C13.0324 7.34766 12.3363 8.03086 12.3363 9.80547V11H15.9285L15.3098 14.3602H12.332V21.9184C17.7805 21.2609 22 16.6246 22 11Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21817_22409">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <v-tooltip activator="parent" location="top">Facebook</v-tooltip>
                        </v-btn>
                        <v-btn variant="text" href="/" target="_blank" class="link-btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21817_22411)">
                                    <path
                                        d="M19.7398 6.51836C19.7527 6.71172 19.7527 6.90938 19.7527 7.10273C19.7527 13.0625 15.2152 19.9332 6.92227 19.9332C4.36563 19.9332 1.99375 19.1941 0 17.9094C0.360937 17.9523 0.713281 17.9652 1.08711 17.9652C3.19687 17.9652 5.13477 17.252 6.68594 16.0402C4.70508 15.9973 3.04219 14.6996 2.4707 12.9121C2.75 12.9551 3.0293 12.9809 3.32148 12.9809C3.72539 12.9809 4.1293 12.925 4.50742 12.8262C2.44063 12.4094 0.89375 10.5918 0.89375 8.40039V8.34453C1.49531 8.67969 2.19141 8.89023 2.93047 8.91602C1.71445 8.1082 0.919531 6.72461 0.919531 5.16055C0.919531 4.32266 1.14297 3.55352 1.53398 2.8832C3.75547 5.62031 7.08984 7.40781 10.8324 7.60117C10.7637 7.26602 10.7207 6.91797 10.7207 6.56992C10.7207 4.08633 12.7316 2.0625 15.2281 2.0625C16.5258 2.0625 17.6988 2.6082 18.5238 3.48477C19.5422 3.29141 20.5219 2.91328 21.3855 2.39766C21.0504 3.44609 20.3371 4.32266 19.4047 4.88125C20.3113 4.78242 21.1922 4.5332 22 4.18516C21.3855 5.07891 20.6164 5.87383 19.7398 6.51836Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21817_22411">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <v-tooltip activator="parent" location="top">Twitter</v-tooltip>
                        </v-btn>
                        <v-btn variant="text" href="/" target="_blank" class="link-btn">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21817_22413)">
                                    <path
                                        d="M9.62959 6.0583C6.89678 6.0583 4.69248 8.2626 4.69248 10.9954C4.69248 13.7282 6.89678 15.9325 9.62959 15.9325C12.3624 15.9325 14.5667 13.7282 14.5667 10.9954C14.5667 8.2626 12.3624 6.0583 9.62959 6.0583ZM9.62959 14.2052C7.86357 14.2052 6.41982 12.7657 6.41982 10.9954C6.41982 9.2251 7.85928 7.78564 9.62959 7.78564C11.3999 7.78564 12.8394 9.2251 12.8394 10.9954C12.8394 12.7657 11.3956 14.2052 9.62959 14.2052ZM15.9202 5.85635C15.9202 6.49658 15.4046 7.00791 14.7687 7.00791C14.1284 7.00791 13.6171 6.49229 13.6171 5.85635C13.6171 5.22041 14.1327 4.70478 14.7687 4.70478C15.4046 4.70478 15.9202 5.22041 15.9202 5.85635ZM19.1901 7.0251C19.1171 5.48252 18.7647 4.11611 17.6347 2.99033C16.5089 1.86455 15.1425 1.51221 13.5999 1.43486C12.0101 1.34463 7.24482 1.34463 5.65498 1.43486C4.1167 1.50791 2.75029 1.86025 1.62024 2.98604C0.490137 4.11182 0.14209 5.47822 0.0647461 7.0208C-0.0254883 8.61064 -0.0254883 13.3759 0.0647461 14.9657C0.137793 16.5083 0.490137 17.8747 1.62024 19.0005C2.75029 20.1263 4.1124 20.4786 5.65498 20.556C7.24482 20.6462 12.0101 20.6462 13.5999 20.556C15.1425 20.4829 16.5089 20.1306 17.6347 19.0005C18.7605 17.8747 19.1128 16.5083 19.1901 14.9657C19.2804 13.3759 19.2804 8.61494 19.1901 7.0251ZM17.1362 16.6716C16.8011 17.5138 16.1522 18.1626 15.3058 18.5021C14.0382 19.0048 11.0304 18.8888 9.62959 18.8888C8.22881 18.8888 5.2167 19.0005 3.95342 18.5021C3.11123 18.1669 2.4624 17.5181 2.12295 16.6716C1.62024 15.404 1.73623 12.3962 1.73623 10.9954C1.73623 9.59463 1.62451 6.58252 2.12295 5.31924C2.45811 4.47705 3.10693 3.82822 3.95342 3.48877C5.221 2.98603 8.22881 3.10205 9.62959 3.10205C11.0304 3.10205 14.0425 2.99033 15.3058 3.48877C16.148 3.82393 16.7968 4.47275 17.1362 5.31924C17.639 6.58682 17.5229 9.59463 17.5229 10.9954C17.5229 12.3962 17.639 15.4083 17.1362 16.6716Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21817_22413">
                                        <rect width="19.25" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <v-tooltip activator="parent" location="top">Instagram</v-tooltip>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <v-container class="max-width-1218 px-md-0 px-3 py-0">
        <div class="py-sm-10 py-6 border-t">
            <div class="d-sm-flex justify-space-between">
                <div class="d-flex ga-2 text-15 opacity-80 justify-sm-start justify-center">
                    <img src="@/assets/images/logos/logo-icon.svg" height="24" class="mx-2" alt="logo" />
                    All rights reserved by Modernize.
                </div>
                <p class="text-15 opacity-80 d-flex align-center justify-sm-end justify-center pt-sm-0 pt-2">
                    Produced by
                    <v-btn
                        variant="text"
                        color="primary"
                        href="https://adminmart.com/"
                        target="_blank"
                        class="text-hover-primary link-btn text-15 ms-1"
                    >
                        AdminMart.</v-btn
                    >
                </p>
            </div>
        </div>
    </v-container>
</template>
