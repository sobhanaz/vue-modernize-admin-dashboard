<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '@/stores/apps/kanban/task';
import TaskItemCard from './TaskItemCard.vue'

const props = defineProps({
    column: Object,

});

// common components
const dialog = ref(false);
const store = useTaskStore();
const title = ref('');
const subtitle = ref('');
const category = ref('Mobile');
const categorybg = ref('primary')
const columnId = ref(props.column?.id)

function addItemAndClear() {
    
    title.value = '',
    subtitle.value = '',
    category.value = 'Mobile',
    categorybg.value = 'primary'
}

</script>

<template>
    <v-card elevation="10" :class="'bg-' + column?.cardbg">
        <div class="pa-5">
            <div class="d-flex align-center justify-space-between">
                <h6 class="text-h6 font-weight-semibold">{{ column?.title }}</h6>

                <v-avatar size="22" elevation="10" class="bg-surface d-flex align-center cursor-pointer" @click="dialog = true">
                    <v-tooltip activator="parent" location="top">Add Task </v-tooltip>
                    <PlusIcon size="13" stroke-width="2" />
                </v-avatar>

            </div>
            <draggable class="dragArea list-group mt-6" :list="column?.tasks" :animation="200" ghost-class="ghost-card"
                group="tasks">
                <transition-group>
                    <div v-for="task in column?.tasks" :key="task.id" :task="task" class="mt-3 cursor-move">
                        <TaskItemCard :task="task" />
                    </div>
                </transition-group>
            </draggable>
        </div>
        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-text class="mb-4">
                    <h4 class="text-h6 mb-5">Add Task </h4>
                    <form @submit.prevent=" store.addTask(columnId, title, subtitle, category, categorybg), addItemAndClear()">
                        <v-text-field outlined name="Task" v-model="title" label="Title"></v-text-field>
                        <v-textarea outlined name="Task-subtitle" v-model="subtitle" label="Subtitle"></v-textarea>
                        <v-select label="Select" v-model="category" variant="outlined"
                            :items="['Mobile', 'Design', 'Development']"></v-select>
                        <v-select label="Select" v-model="categorybg" variant="outlined"
                            :items="['primary', 'warning', 'success', 'error']"></v-select>
                        <v-btn color="primary" variant="flat" type="submit" :disabled="title==''" @click="dialog = false">Save</v-btn>
                    </form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>
