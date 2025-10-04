<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns"; // Import date-fns for formatting dates
import type { CalendarOptions } from "@fullcalendar/core";

let eventGuid = 0;
const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Twice event For two Days",
    allDay: true,
    start: new Date(y, m, 3),
    end: new Date(y, m, 5),
    color: "#635BFF",
  },
  {
    id: createEventId(),
    title: "Learn ReactJs",
    start: new Date(y, m, d + 3, 10, 30),
    end: new Date(y, m, d + 3, 11, 30),
    allDay: true,
    color: "#13DEB9",
  },
  {
    id: createEventId(),
    title: "Launching MaterialArt Angular",
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: true,
    color: "#ff6692",
  },
  {
    id: createEventId(),
    title: "Lunch with Mr.Raw",
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: "#16CDC7",
  },
  {
    id: createEventId(),
    title: "Going For Party of Sahs",
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: true,
    color: "#1a97f5",
  },
  {
    id: createEventId(),
    title: "Learn Ionic",
    start: new Date(y, m, 23),
    end: new Date(y, m, 25),
    color: "#ffd648",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      menu1: false, // For Start Date
      menu2: false, // For End Date
      updateModalShow: false,
      addModalShow: false,
      selectedEvent: {
        id: "",
        title: "",
        color: "",
        start: "",
        end: "",
        allDay: true,
      },
      newEvent: { title: "", color: "", start: "", end: "", allDay: true },
      updatedTitle: "",
      updatedColor: "",

      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        initialEvents: INITIAL_EVENTS,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      } as CalendarOptions,
    
      activeColor: {
        newEvent: "", // Store the active color for the new event
        updateEvent: "", // Store the active color for the update event
      },
      currentEvents: [],
      colorOptions: [
        { id: 1, label: "Primary", value: "#615dff" },
        { id: 2, label: "Success", value: "#39b69a" },
        { id: 3, label: "Error", value: "#fc4b6c" },
        { id: 4, label: "Secondary", value: "#1a97f5" },
        { id: 5, label: "Warning", value: "#fdd43f" },
      ],
    };
  },
  methods: {
    handleDateSelect(selectInfo: any) {
      this.addModalShow = true;
      this.newEvent.start = selectInfo.startStr;
      this.newEvent.end = selectInfo.endStr;
      this.newEvent.allDay = selectInfo.allDay;
    },
    handleEventClick(clickInfo: any) {
      this.updateModalShow = true;

      const eventStart = clickInfo.event.start ? clickInfo.event.start : null;
      const eventEnd = clickInfo.event.end ? clickInfo.event.end : null;

      // Safely format the start and end dates if they exist
      this.selectedEvent = {
        id: clickInfo.event.id,
        title: clickInfo.event.title,
        color: clickInfo.event.backgroundColor,
        start: eventStart ? format(eventStart, "yyyy-MM-dd") : "", // If the date exists, format it, otherwise use an empty string
        end: eventEnd ? format(eventEnd, "yyyy-MM-dd") : "", // Handle no end date case
        allDay: clickInfo.event.allDay,
      };

      // Set updated values for the modal fields
      this.updatedTitle = this.selectedEvent.title;
      this.updatedColor = this.selectedEvent.color;
      this.activeColor.updateEvent = this.selectedEvent.color;
    },
    addEvent() {
      const calendarApi = (this.$refs.fullCalendar as InstanceType<typeof FullCalendar>).getApi();
      calendarApi.addEvent({
        id: createEventId(),
        title: this.newEvent.title,
        start: this.newEvent.start,
        end: this.newEvent.end,
        allDay: this.newEvent.allDay,
        backgroundColor: this.newEvent.color,
      });

      this.addModalShow = false;
      this.newEvent = {
        title: "",
        color: "",
        start: "",
        end: "",
        allDay: true,
      };
    },
    updateEvent() {
  const calendarApi = (this.$refs.fullCalendar as InstanceType<typeof FullCalendar>).getApi();
  const event = calendarApi.getEventById(this.selectedEvent.id);

  if (event) {
    // Ensure updatedStart and updatedEnd are not null before calling getTime()
    const updatedStart = this.selectedEvent.start ? new Date(this.selectedEvent.start) : null;
    const updatedEnd = this.selectedEvent.end ? new Date(this.selectedEvent.end) : null;

    if (!updatedStart || isNaN(updatedStart.getTime()) || (updatedEnd && isNaN(updatedEnd.getTime()))) {
      console.error("Invalid start or end date.");
      return;
    }

    event.setProp("title", this.updatedTitle);
    event.setProp("backgroundColor", this.updatedColor);
    event.setStart(updatedStart);
    event.setEnd(updatedEnd);

    this.updateModalShow = false;
    this.updatedTitle = "";
    this.updatedColor = "";
    this.selectedEvent = {
      id: "",
      title: "",
      color: "",
      start: "",
      end: "",
      allDay: true,
    };
  }
},



    deleteEvent() {
      const calendarApi = (this.$refs.fullCalendar as InstanceType<typeof FullCalendar>).getApi();
      const event = calendarApi.getEventById(this.selectedEvent.id);
      if (event) {
        event.remove();
        this.updateModalShow = false;
      }
    },
    selectColor(color: string, isAddModal: boolean) {
      if (isAddModal) {
        this.newEvent.color = color;
        this.activeColor.newEvent = color; // Set the active color for add modal
      } else {
        this.updatedColor = color;
        this.activeColor.updateEvent = color; // Set the active color for update modal
      }
    },
  },
});
</script>

<template>
  <div class="demo-app">
    <div class="demo-app-main">
      <FullCalendar
        ref="fullCalendar"
        class="demo-app-calendar rounded-md"
        :options="calendarOptions"
      />

      <!-- Add Event Modal -->
      <v-dialog v-model="addModalShow" max-width="500px">
        <v-card>
          <v-card-text>
            <div class="mb-6 d-flex justify-space-between">
              <div>
                <h4 class="text-h4 mb-2">Add Event</h4>
                <p class="textSecondary text-14">
                  Fill in the title, choose the event color, and select the
                  start and end dates to add an event.
                </p>
              </div>
              <v-btn
                icon="mdi-close"
                variant="text"
                class="mt-n2 me-n3"
                @click="addModalShow = false"
              ></v-btn>
            </div>

            <!-- Event Title -->
            <v-label class="mb-2 font-weight-medium">Event Title</v-label>
            <v-text-field v-model="newEvent.title" outlined required />

            <!-- Start Date -->
            <v-label class="mb-2 font-weight-medium">Start Date</v-label>
            <v-text-field
              v-model="newEvent.start"
              variant="outlined"
              hide-details
              type="date"
              class="mb-5"
              required
            />

            <!-- End Date -->
            <v-label class="mb-2 font-weight-medium">End Date</v-label>
            <v-text-field
              v-model="newEvent.end"
              variant="outlined"
              hide-details
              type="date"
              class="mb-5"
              required
            />

            <!-- Event Color -->
            <v-label class="mb-2 font-weight-medium">Event Color</v-label>
            <v-list class="d-flex ga-3 pa-0">
              <v-list-item
                class="px-0 py-0"
                :ripple="false"
                v-for="option in colorOptions"
                :key="option.id"
                @click="selectColor(option.value, true)"
              >
                <div
                  class="round-30 rounded-circle d-flex justify-center align-center"
                  :style="{
                    backgroundColor: option.value,
                  }"
                >
                  <CheckIcon
                    size="18"
                    color="#fff"
                    v-if="activeColor.newEvent === option.value"
                  />
                </div>
              </v-list-item>
            </v-list>
            <!-- Add Event Button -->
            <v-btn @click="addEvent" color="primary" class="mt-6"
              >Add Event</v-btn
            >
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Update Event Modal -->
      <!-- Update Event Modal -->
      <v-dialog v-model="updateModalShow" max-width="500px">
        <v-card>
          <v-card-text>
            <div class="mb-6 d-flex justify-space-between">
              <div>
                <h4 class="text-h4 mb-2">Update Event</h4>
                <p class="textSecondary text-14">
                  To add Event kindly fill up the title and choose the event
                  color and press the add button
                </p>
              </div>
              <v-btn
                icon="mdi-close"
                variant="text"
                class="mt-n2 me-n3"
                @click="updateModalShow = false"
              ></v-btn>
            </div>
            <v-label class="mb-2 font-weight-medium">Event Title </v-label>
            <v-text-field v-model="updatedTitle" outlined required />

            <!-- Start Date -->
            <v-label class="mb-2 font-weight-medium">Start Date</v-label>
            <v-text-field
              v-model="selectedEvent.start"
              variant="outlined"
              hide-details
              type="date"
              required
              class="mb-5"
            />

            <!-- End Date -->
            <v-label class="mb-2 font-weight-medium">End Date</v-label>
            <v-text-field
              v-model="selectedEvent.end"
              variant="outlined"
              hide-details
              type="date"
              class="mb-5"
              required
            />

            <v-label class="mb-2 font-weight-medium">Event Color </v-label>
            <v-list class="d-flex ga-3 pa-0">
              <v-list-item
                class="px-0 py-0"
                :ripple="false"
                v-for="option in colorOptions"
                :key="option.id"
                @click="selectColor(option.value, false)"
              >
                <div
                  class="round-30 rounded-circle d-flex justify-center align-center"
                  :style="{ backgroundColor: option.value }"
                >
                  <CheckIcon
                    size="18"
                    color="#fff"
                    v-if="activeColor.updateEvent === option.value"
                  />
                </div>
              </v-list-item>
            </v-list>
            <v-btn @click="updateEvent" color="primary" class="mt-6">
              Update Event
            </v-btn>

            <v-btn @click="deleteEvent" color="error" class="mt-6 ms-4">
              Delete Event
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
