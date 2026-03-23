<script setup lang="ts">
import { ref } from "vue";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

const volume = ref([50]);
const brightness = ref([75]);
const temperature = ref([0.3, 0.7]);
const priceRange = ref([25, 75]);
const colorBalance = ref([10, 20, 70]);
</script>

<template>
  <FieldGroup data-component-x-ray="FieldGroup">
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-volume" data-component-x-ray="FieldLabel"> Volume </FieldLabel>
      <Slider
        id="slider-volume"
        v-model="volume"
        :max="100"
        :step="1"
        data-component-x-ray-trigger="Slider"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-brightness" data-component-x-ray="FieldLabel">
        Screen Brightness
      </FieldLabel>
      <Slider
        id="slider-brightness"
        v-model="brightness"
        :max="100"
        :step="5"
        data-component-x-ray-trigger="Slider"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        Current brightness: {{ brightness[0] }}%
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-quality" data-component-x-ray="FieldLabel">
        Video Quality
      </FieldLabel>
      <FieldDescription data-component-x-ray="FieldDescription">
        Higher quality uses more bandwidth.
      </FieldDescription>
      <Slider
        id="slider-quality"
        :default-value="[720]"
        :max="1080"
        :min="360"
        :step="360"
        data-component-x-ray-trigger="Slider"
      />
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-temperature" data-component-x-ray="FieldLabel">
        Temperature Range
      </FieldLabel>
      <Slider
        id="slider-temperature"
        v-model="temperature"
        :min="0"
        :max="1"
        :step="0.1"
        data-component-x-ray-trigger="Slider"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        Range: {{ temperature[0]?.toFixed(1) }} - {{ temperature[1]?.toFixed(1) }}
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-price-range" data-component-x-ray="FieldLabel">
        Price Range
      </FieldLabel>
      <Slider
        id="slider-price-range"
        v-model="priceRange"
        :max="100"
        :step="5"
        data-component-x-ray-trigger="Slider"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        ${{ priceRange[0] }} - ${{ priceRange[1] }}
      </FieldDescription>
    </Field>
    <Field data-component-x-ray="Field">
      <FieldLabel for="slider-color-balance" data-component-x-ray="FieldLabel">
        Color Balance
      </FieldLabel>
      <Slider id="slider-color-balance" v-model="colorBalance" :max="100" :step="10" />
      <FieldDescription data-component-x-ray="FieldDescription">
        Red: {{ colorBalance[0] }}%, Green: {{ colorBalance[1] }}%, Blue: {{ colorBalance[2] }}%
      </FieldDescription>
    </Field>
    <Field data-invalid data-component-x-ray="Field">
      <FieldLabel for="slider-invalid" data-component-x-ray="FieldLabeld">
        Invalid Slider
      </FieldLabel>
      <Slider
        id="slider-invalid"
        :default-value="[30]"
        :max="100"
        :aria-invalid="true"
        data-component-x-ray-trigger="Slider"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This slider has validation errors.
      </FieldDescription>
    </Field>
    <Field data-disabled data-component-x-ray="Field">
      <FieldLabel for="slider-disabled-field" data-component-x-ray="FieldLabel">
        Disabled Slider
      </FieldLabel>
      <Slider
        id="slider-disabled-field"
        :default-value="[50]"
        :max="100"
        disabled
        data-component-x-ray-trigger="Slider"
      />
      <FieldDescription data-component-x-ray="FieldDescription">
        This slider is currently disabled.
      </FieldDescription>
    </Field>
  </FieldGroup>
</template>
