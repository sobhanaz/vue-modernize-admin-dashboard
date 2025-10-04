<template>
    <v-card variant="outlined">
        <v-card-item>
            <v-textarea variant="outlined" color="primary" name="input-7-4" placeholder="Share your thoughts" rows="5"></v-textarea>
            <div class="d-flex">
                <v-avatar size="32" color="primary" class="mr-2">
                    <PhotoIcon size="16" />
                </v-avatar>
                <v-btn color="inherit" type="upload" variant="plain" class="opacity-1"> Photo / Video </v-btn>
                <v-btn color="inherit" variant="plain" class="opacity-1">
                    <v-avatar size="32" color="secondary" class="mr-2">
                        <NotebookIcon size="16" />
                    </v-avatar>
                    Article
                </v-btn>
                <v-btn color="primary" variant="flat" class="ml-auto">Post</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
