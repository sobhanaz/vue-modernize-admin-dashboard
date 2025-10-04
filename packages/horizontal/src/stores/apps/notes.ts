import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import { map } from 'lodash';

interface NotesType {
    id?: number | any;
    color?: string;
    title?: string;
    datef?: Date | any;
    deleted?: boolean;
}

interface noteType {
    notes: NotesType[];
    notesContent: number;
    noteSearch: string;
}

export const useNoteStore = defineStore({
    id: 'notes',
    state: (): noteType => ({
        notes: [],
        notesContent: 1,
        noteSearch: ''
    }),
    actions: {
        // Fetch notes
        async fetchNotes() {
            try {
                const data = await axios.get('/api/data/notes/NotesData');
                this.notes = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        //select chat
        SelectNote(itemID: number) {
            this.notesContent = itemID;
        },

        deleteNote(itemID: number) {
            const index = this.notes.findIndex((p) => p.id == itemID);
            this.notes.splice(index, 1);
        },
        updateNote(itemID: number, itemColor: any) {
            this.notes = map(this.notes, (note: any) => {
                if (note.id === itemID) {
                    return {
                        ...note,
                        color: itemColor
                    };
                }
                return note;
            });
        }
    }
});
