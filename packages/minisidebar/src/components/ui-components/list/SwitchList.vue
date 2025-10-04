<script setup lang="ts">
import { shallowRef } from 'vue';
import { WifiIcon,BluetoothIcon } from 'vue-tabler-icons';
// List 4 data
const swt1 = shallowRef(true);
const swt2 = shallowRef(false);
</script>
<template>

    <v-list >
        <v-card variant="outlined" class="py-2">
            <v-list-item  value="wifi" class="mb-2  "  color="primary">
                <div class="d-flex align-center">
                    <WifiIcon size="22" stroke-width="1.5" class="mr-2" />
                    <div class="ml-3">Wi-Fi</div>
                    <div class="ml-auto"><v-switch v-model="swt1" inset color="primary"  hide-details></v-switch></div>
                </div>

            </v-list-item>  
            <v-list-item  value="bluetooth" class="mb-2  "  color="primary">
                <div class="d-flex align-center">
                    <BluetoothIcon size="22" stroke-width="1.5" class="mr-2" />
                    <div class="ml-3">Bluetooth</div>
                    <div class="ml-auto"><v-switch v-model="swt2" inset color="primary"  hide-details></v-switch></div>
                </div>

            </v-list-item>  
        </v-card>
    </v-list>


    <!-- <div class="rounded-sm px-5 py-3 my-3">
        <div class="d-flex align-center">
            <WifiIcon size="20" stroke-width="1.5"/>

        </div>
        <v-switch v-model="swt1" inset label="Start DND Mode" color="primary" hide-details></v-switch>
        <v-switch v-model="swt2" inset  label="Allow Notifications" color="primary" hide-details> </v-switch>
    </div> -->
</template>
