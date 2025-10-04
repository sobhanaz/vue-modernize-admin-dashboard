<template>
    <v-card elevation="10" class=" mt-6">
        <v-card-item class="text-center">
            <h5 class="text-h5 mb-6">Mutual Friend Revealed</h5>
                <v-badge content="1" color="error"  
                    offset-x="18"
                    offset-y="18"
                >
                    <v-avatar size="140">
                        <img src="@/assets/images/profile/user-1.jpg" height="140" alt="image" />    
                    </v-avatar>
                </v-badge>
            
                <h5 class="text-h5 pt-3 mt-3">Tommoie Henderson</h5>
            <h6 class="text-subtitle-1 text-13 my-4 textSecondary">
              Accept the request and<br> type a message
            </h6>
            <v-btn flat color="primary">accept</v-btn>
            <v-btn flat variant="outlined" class="ml-4" color="error">remove</v-btn>
        </v-card-item>
    </v-card>
</template>
