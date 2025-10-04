<script setup lang="ts">
import { ref, onMounted } from "vue";
import { AlertCircleIcon, FlagIcon, FolderIcon, MailIcon, NoteIcon, SendIcon, StarIcon, TrashIcon } from "vue-tabler-icons";

interface FilterType {
  id?: number;
  filterbyTitle?: string;
  icon?: any;
  name: string;
  divider?: boolean;
  color?: string;
}

const filterData1: FilterType[] = [
  { id: 2, name: "inbox", icon: MailIcon },
  { id: 3, name: "sent", icon: SendIcon },
  { id: 4, name: "draft", icon: NoteIcon },
  { id: 5, name: "spam", icon: FlagIcon },
  { id: 6, name: "trash", icon: TrashIcon },
  {
    id: 7,
    name: "starred",
    icon: StarIcon,
  },
  {
    id: 8,
    name: "important",
    icon: AlertCircleIcon,
  },
  {
    id: 10,
    name: "promotional",
    icon: FolderIcon,
    color: "primary",
  },
  {
    id: 11,
    name: "social",
    icon: FolderIcon,
    color: "error",
  },
  {
    id: 12,
    name: "health",
    icon: FolderIcon,
    color: "success",
  },
];

const selectedFilter = ref<string | null>("inbox");

const emit = defineEmits(["filter-change"]);
const handleFilterClick = (filterName: string) => {
  selectedFilter.value = filterName;
  emit("filter-change", filterName);
};

onMounted(() => {
  handleFilterClick("inbox");
});

const showComposeEmail = ref(false);

</script>

<template>
  <div>
    <v-btn color="primary" class="w-100"  @click="showComposeEmail = true">compose</v-btn>
    <!-- Sidebar Filter Lists -->
    <v-list class="my-4 theme-list">
     
      <v-list-item
        v-for="item in filterData1.slice(0, 5)" 
        :key="item.id"
        :value="item"
        color="primary"
        rounded="md"
        class="mail-items"
        :class="{
          'active bg-hoverColor text-primary': selectedFilter === item.name,
        }"
        @click="handleFilterClick(item.name)"
      >
        <template v-slot:prepend>
          <component :is="item.icon" size="18" />
        </template>
        <v-list-item-title class="ms-3 text-capitalize">{{
          item.name
        }}</v-list-item-title>
      </v-list-item>

      
      <v-list-item-title class="mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold">Sort By</v-list-item-title>

      
      <v-list-item
        v-for="item in filterData1.slice(5,7)" 
        :key="item.id"
        :value="item"
        color="primary"
        rounded="md"
        class="mail-items"
        :class="{
          'active bg-hoverColor text-primary': selectedFilter === item.name,
        }"
        @click="handleFilterClick(item.name)"
      >
        <template v-slot:prepend>
          <component :is="item.icon" size="18" />
         
        </template>
        <v-list-item-title class="ms-3 text-capitalize">{{
          item.name
        }}</v-list-item-title>
      </v-list-item>


      
      <v-list-item-title class="mt-4 mb-2 border-t pt-5 text-uppercase text-12 font-weight-semibold">Labels</v-list-item-title>

      <v-list-item
        v-for="item in filterData1.slice(7)" 
        :key="item.id"
        :value="item"
        color="primary"
        rounded="md"
        class="mail-items"
        :class="{
          'active bg-hoverColor text-primary': selectedFilter === item.name,
        }"
        @click="handleFilterClick(item.name)"
      >
        <template v-slot:prepend>
          <component :is="item.icon" size="18" :class="'text-' + item.color" />
         
        </template>
        <v-list-item-title class="ms-3 text-capitalize">{{
          item.name
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>



  <v-dialog v-model="showComposeEmail" max-width="500px">
    <v-card>
      <v-card-title class="pa-4 bg-primary">Compose Mail</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="To"
            required
          ></v-text-field>
          <v-text-field
            label="Subject"
            required
          ></v-text-field>
          <v-textarea
            label="Message"
            rows="4"
            required
          ></v-textarea>
          <v-file-input prepend-icon="null" 
          append-icon="null" label="Attachment" variant="outlined" hide-details class="w-100 mx-0 no-icon" > </v-file-input>
        </v-form>
      </v-card-text>
      <v-card-actions class="ga-3">
        <v-btn
          color="error"
          variant="flat"
          @click="showComposeEmail = false"
          >Cancel</v-btn
        >
        <v-btn color="primary" variant="flat"
          >Send</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
