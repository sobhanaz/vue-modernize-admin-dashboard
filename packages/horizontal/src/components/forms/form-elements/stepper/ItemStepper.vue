<template>
    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']" class="border">
        <template v-slot:item.1>
            <v-card flat>
                <h5 class="text-h6">Step One</h5>
                <p class="textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </v-card>
        </template>

        <template v-slot:item.2>
            <v-card flat>
                <h5 class="text-h6">Step Two</h5>
                <p class="textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </v-card>
        </template>

        <template v-slot:item.3>
            <v-card flat>
                <h5 class="text-h6">Step Three</h5>
                <p class="textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </v-card>
        </template>
    </v-stepper>
</template>
