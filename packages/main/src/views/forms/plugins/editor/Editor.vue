<script setup>
import { ref } from 'vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import EditorMenubar from '@/components/forms/plugins/editor/EditorMenubar.vue';

const editor = useEditor({
    extensions: [StarterKit],
    content: `
  <h2>Hi there,</h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there
        are all kind of basic text styles you’d probably expect from a text
        editor. But wait until you see the lists:
      </p>
      <ul>
        <li>That’s a bullet list with one …</li>
        <li>… or two list items.</li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more.
        Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg
        though. Give it a try and click a little bit around. Don’t forget to
        check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
      `
});
// theme breadcrumb
const page = ref({ title: 'Editor' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Editor',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <UiParentCard title="Editor">
        <div v-if="editor">
            <EditorMenubar :editor="editor" />
        </div>
        <editor-content :editor="editor" />
    </UiParentCard>
</template>

<style lang="scss"></style>
