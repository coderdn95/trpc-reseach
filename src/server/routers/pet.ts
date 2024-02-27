import { z } from "zod";
import { t } from "../trpc";

export const petRouter = t.router({
  petById: t.procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const pet = await fetch(
        `https://petstore.swagger.io/v2/pet/${input.id}`
      ).then((response) => response.json());
      console.log(pet);
      return {
        pet: pet as PetType,
      };
    }),
  createPet: t.procedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        status: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const post = await fetch("https://petstore.swagger.io/v2/pet", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
      console.log(post);
      return {
        response: post as PetType,
      };
    }),
});

// CODE BELOW IS NOT PART OF tRPC SETUP

type PetType = {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: [string];
  tags: [
    {
      id: number;
      name: string;
    }
  ];
  status: string;
};
