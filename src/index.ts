import { createBuilder, z } from "@litpack/typebuilder";

const personSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  age: z.number().min(0, { message: "Age cannot be negative." }).max(150, { message: "Age seems unrealistic." }),
  email: z.string().email({ message: "Invalid email format." }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." })
    .optional(),
});

const person = createBuilder(personSchema)
  .setName("Alice")
  .setAge(22)
  .setEmail('swdsd@gmail.com').build

console.log("Person created:", person);
