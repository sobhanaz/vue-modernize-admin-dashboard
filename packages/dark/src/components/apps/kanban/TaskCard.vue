<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import TaskColumn from './TaskColumn.vue'
import { useTaskStore } from '@/stores/apps/kanban/task';


const store = useTaskStore();

onMounted(() => {
    store.fetchTasks();
});

const getTasks = computed(() => {
    return store.tasks;
});

const columns = getTasks;

// theme breadcrumb
const page = ref({ title: 'Kanban Application' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Kanban Application',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" md="3" sm="6" class="d-flex" v-for="column in columns" :key="column.id">
            <TaskColumn :column="column"/>
        </v-col>
    </v-row>
</template>
