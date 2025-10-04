import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import { map } from 'lodash';
import { uniqueId } from 'lodash';
import { sub } from 'date-fns';
import type { Ref } from 'vue';


interface TaskType {
    id?: string | any;
    title?: string;
    subtitle?: string;
    datef?: Date | any;
    cardbg?: string;
    deleted?: boolean;
    taskimg?: string;
    date?: Date | any;
    category?: string;
    categorybg?: string;
    tasks?: TaskType[];
}

interface taskType {
    tasks: TaskType[];
    taskContent: string;
}

export const useTaskStore = defineStore({
    id: 'tasks',
    state: (): taskType => ({
        tasks: [],
        taskContent: '1'
    }),
    actions: {
        // Fetch tasks
        async fetchTasks() {
            try {
                const data = await axios.get('/api/data/task/TaskData');
                this.tasks = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        //select chat
        SelectTask(itemID: string) {
            this.taskContent = itemID;
        },

        deleteTask(itemID: string) {
            const taskObj = this.tasks.map((task) => {
                const tasks = task.tasks?.filter((t) => t.id !== itemID);
                return {
                    ...task,
                    tasks
                };
            });
            this.tasks = taskObj;
        },
        addTask(columnId:string, title:string, subtitle:string, category:string, categorybg:string) {
            const newTask = {
                id: uniqueId('#task_'),
                title: title,
                subtitle: subtitle,
                category:category,
                date: sub(new Date(), { seconds: 1 }),
                categorybg:categorybg
            };
            this.tasks = map(this.tasks, (task: any) => {
                if (task.id === columnId) {
                    return {
                        ...task,
                        ...task.tasks.push(newTask)
                    };
                }
                return task;
            });
        }
    }
});
