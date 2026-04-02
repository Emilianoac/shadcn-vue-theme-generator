<script setup lang="ts">
import { ref } from "vue";
import { CreditCardIcon, WalletIcon, Building2Icon } from "lucide-vue-next";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

const paymentMethod = ref("card");
</script>

<template>
  <DropdownMenu data-component-x-ray="DropdownMenu">
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline" data-component-x-ray-trigger="Button"> Payment Method </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-56" data-component-x-ray="DropdownMenuContent">
      <DropdownMenuGroup data-component-x-ray="DropdownMenuGroup">
        <DropdownMenuLabel data-component-x-ray="DropdownMenuLabel"
          >Select Payment Method</DropdownMenuLabel
        >
        <DropdownMenuRadioGroup
          v-model="paymentMethod"
          data-component-x-ray="DropdownMenuRadioGroup"
        >
          <DropdownMenuRadioItem value="card" data-component-x-ray-trigger="DropdownMenuRadioItem">
            <CreditCardIcon />
            Credit Card
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="paypal"
            data-component-x-ray-trigger="DropdownMenuRadioItem"
          >
            <WalletIcon />
            PayPal
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bank" data-component-x-ray-trigger="DropdownMenuRadioItem">
            <Building2Icon />
            Bank Transfer
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
