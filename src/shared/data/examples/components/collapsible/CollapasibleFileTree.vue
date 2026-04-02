<script lang="ts" setup>
import { defineComponent, h } from "vue";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "@/shared/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/ui/collapsible";
import { ScrollArea } from "@/shared/components/ui/scroll-area";

import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-vue-next";

type FileTreeItem = {
  name: string;
  items?: FileTreeItem[];
};

const fileTree: FileTreeItem[] = [
  {
    name: "public",
    items: [
      { name: "favicon.ico" },
      { name: "index.html" },
      { name: "robots.txt" },
      { name: "manifest.json" },
    ],
  },
  {
    name: "src",
    items: [
      {
        name: "components",
        items: [
          {
            name: "ui",
            items: [
              { name: "Button.vue" },
              { name: "Card.vue" },
              { name: "Dialog.vue" },
              { name: "Input.vue" },
              { name: "Select.vue" },
              { name: "Table.vue" },
            ],
          },
          { name: "Header.vue" },
          { name: "Footer.vue" },
        ],
      },
      {
        name: "lib",
        items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
      },
      {
        name: "composables",
        items: [{ name: "UseDate.ts" }, { name: "UseDark.ts" }, { name: "UseMedia.ts" }],
      },
      { name: "App.vue" },
    ],
  },
  { name: "package.json" },
  { name: "README.md" },
  { name: "vite.config.ts" },
];

// Recursive component to render file tree items for example purposes.
const FileTreeItemComponent = defineComponent({
  name: "FileTreeItemComponent",
  props: {
    item: {
      type: Object as () => FileTreeItem,
      required: true,
    },
  },

  setup(props) {
    return () => {
      if (props.item.items) {
        return h(
          Collapsible,
          {
            "data-component-x-ray": "Collapsible",
          },
          {
            default: () => [
              h(
                CollapsibleTrigger,
                { asChild: true },
                {
                  default: () =>
                    h(
                      Button,
                      {
                        "variant": "ghost",
                        "size": "sm",
                        "class":
                          "group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground",

                        "data-component-x-ray-trigger": "Button",
                      },
                      () => [
                        h(ChevronRightIcon, {
                          class: "transition-transform group-data-[state=open]:rotate-90",
                        }),
                        h(FolderIcon),
                        props.item.name,
                      ],
                    ),
                },
              ),

              h(CollapsibleContent, { class: "mt-1 ml-5" }, () =>
                h(
                  "div",
                  { class: "flex flex-col gap-1" },
                  props.item.items!.map((child) =>
                    h(FileTreeItemComponent, {
                      key: child.name,
                      item: child,
                    }),
                  ),
                ),
              ),
            ],
          },
        );
      }

      return h(
        Button,
        {
          variant: "link",
          size: "sm",
          class: "w-full justify-start gap-2 text-foreground",
        },
        () => [h(FileIcon), h("span", props.item.name)],
      );
    };
  },
});
</script>

<template>
  <Card class="mx-auto w-full max-w-xs" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Collapsible File Tree</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        A collapsible file tree example using the Collapsible component.
      </CardDescription>
    </CardHeader>

    <CardContent data-component-x-ray="CardContent">
      <ScrollArea class="h-75">
        <FileTreeItemComponent v-for="item in fileTree" :key="item.name" :item="item" />
      </ScrollArea>
    </CardContent>
  </Card>
</template>
