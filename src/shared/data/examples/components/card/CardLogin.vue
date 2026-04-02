<script setup lang="ts">
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
</script>

<template>
  <Card class="w-full max-w-sm mx-auto" data-component-x-ray="Card">
    <CardHeader data-component-x-ray="CardHeader">
      <CardTitle data-component-x-ray="CardTitle">Login to your account</CardTitle>
      <CardDescription data-component-x-ray="CardDescription">
        Enter your email below to login to your account
      </CardDescription>
      <CardAction data-component-x-ray="CardAction">
        <Button variant="link"> Sign Up </Button>
      </CardAction>
    </CardHeader>
    <CardContent data-component-x-ray="CardContent">
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="email" data-component-x-ray="Label">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              data-component-x-ray="Input"
            />
          </div>
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center">
              <Label for="password" data-component-x-ray="Label">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline"> Forgot your password? </a>
            </div>
            <Input id="password" type="password" data-component-x-ray="Input" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-2" data-component-x-ray="CardFooter">
      <Button class="w-full" data-component-x-ray="Button"> Login </Button>
      <Button variant="outline" class="w-full" data-component-x-ray="Button">
        Login with Google
      </Button>
    </CardFooter>
  </Card>
</template>
