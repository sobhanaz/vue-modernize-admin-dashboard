<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useTaskStore } from '@/stores/apps/kanban/task';
import { uniqueId } from 'lodash';

// common components
const dialog = ref(false);
const title = ref('');
const subtitle = ref('');
const store = useTaskStore();

onMounted(() => {
    store.fetchTasks();
});

const getTask = computed(() => {
    return store.tasks;
});

const getId = getTask.value.length;
function addTask() {
    return getTask.value.push({ id: getId + 1, title: title.value, subtitle: subtitle.value, datef: new Date() }), (dialog.value = false), (title.value = ''),  (subtitle.value = '');
   
}
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Table Basic -->
    <!-- ---------------------------------------------------- -->

    <v-sheet>
        <v-btn color="primary" @click="dialog = true">Add Task</v-btn>

        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-text>
                    <h4 class="text-h6 mb-4">Add Task</h4>
                    <v-textarea outlined name="Task" v-model="title"></v-textarea>
                    <v-textarea outlined name="Task-subtitle" v-model="subtitle"></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="addTask">Save</v-btn>
                    <v-btn color="primary" @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-sheet>
</template>
