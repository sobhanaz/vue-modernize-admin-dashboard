import mock from '../../mockAdapter';
import image1 from '@/assets/images/kanban/task-img1.png';
import image2 from '@/assets/images/kanban/task-img2.png';
import image3 from '@/assets/images/blog/blog-img4.jpg';
import { uniqueId } from 'lodash';
import { sub } from 'date-fns';

interface TaskType {
    id?: number | any;
    title?: string;
    subtitle?: string;
    cardbg?: string;
    datef?: Date | any;
    taskimg?: string;
    date?: Date | any;
    category?: string;
    tasks?: TaskType[];
    categorybg?: string;
}

const TaskData: TaskType[] = [
    {
        id: uniqueId('#m_'),
        title: 'Todo',
        cardbg: 'grey100',
        tasks: [
            {
                id: uniqueId('#task_'), 
                title: 'This is first task',
                taskimg: image1,
                date:sub(new Date(), { months: 1 }),
                category: 'Design',
                categorybg: 'success'
            },
            {
                id: uniqueId('#task_'),
                title: 'Lets do some task on pd',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.',
                date:sub(new Date(), { days: 2 }),
                category: 'Development',
                categorybg: 'warning'
            },
            {
                id: uniqueId('#task_'),
                title: 'Do some projects on React Native with Flutter',
                date:sub(new Date(), { days: 4 }),
                category: 'Mobile',
                categorybg: 'primary'
            }
        ]
    },
    {
        id: uniqueId('#m_'),
        title: 'In Progress',
        cardbg: 'lightsecondary',
        tasks: [
            {
                id: uniqueId('#task_'),
                title: 'Work on Dashboard Designing',
                date:sub(new Date(), { seconds: 1 }),
                category: 'Mobile',
                categorybg: 'primary'
            },
            {
                id: uniqueId('#task_'),
                title: 'Battle with fire',
                taskimg: image2,
                date:sub(new Date(), { seconds: 1 }),
                category: 'Design',
                categorybg: 'success'
            },
            {
                id: uniqueId('#task_'),
                title: 'Do some projects on Reactjs with tailwind ',
                date:sub(new Date(), { seconds: 1 }),
                category: 'Mobile',
                categorybg: 'primary'
            }
        ]
    },
    {
        id: uniqueId('#m_'),
        title: 'Pending',
        cardbg: 'lightinfo',
        tasks: [
            {
                id: uniqueId('#task_'),
                title: 'Create a Nextjs Dashboard',
                date:sub(new Date(), { seconds: 1 }),
                category: 'Design',
                categorybg: 'success'
            },
            {
                id: uniqueId('#task_'),
                title: 'Solve Vuejs Project errors',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, o eiusmod tempor incid.',
                date:sub(new Date(), { seconds: 1 }),
                category: 'Development',
                categorybg: 'primary'
            },

        ]
    },
    {
        id: uniqueId('#m_'),
        title: 'Done',
        cardbg: 'lightsuccess',
        tasks: [
            {
                id: uniqueId('#task_'), 
                title: 'Develop React app',
                taskimg: image3,
                date:sub(new Date(), { months: 1 }),
                category: 'Mobile',
                categorybg: 'warning'
            },
            {
                id: uniqueId('#task_'),
                title: 'Do some task on Nuxtjs',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                date:sub(new Date(), { seconds: 1 }),
                category: 'Design',
                categorybg: 'error'
            },
        ]
    }
];

mock.onGet('/api/data/task/TaskData').reply(() => {
    return [200, TaskData];
});
export default TaskData;
