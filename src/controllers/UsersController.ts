import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const userSelect = Prisma.validator<Prisma.UsersSelect>()({
  name: true,
  email: true,
  createdAt: true,
});

export const UsersController = {
  // Get all users
  index: async (req: Request, res: Response) => {
    const users = await prisma.users.findMany({
      select: userSelect,
    });
    res.json(users);
  },

  // Create a user
  create: async (req: Request, res: Response) => {
    const { name, email, password }: Prisma.UsersCreateInput = req.body;
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).json(user);
  },

  // Get user by id
  find: async (req: Request, res: Response) => {
    const { id }: Prisma.UsersWhereUniqueInput = req.params;
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        ...userSelect,
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
    res.json(user);
  },

  // Update user by id
  update: async (req: Request, res: Response) => {
    const { id }: Prisma.UsersWhereUniqueInput = req.params;
    const { name, email, password }: Prisma.UsersCreateInput = req.body;
    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).json(user);
  },

  // Delete user by id
  delete: async (req: Request, res: Response) => {
    const { id }: Prisma.UsersWhereUniqueInput = req.params;
    await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ status: "successfully deleted" });
  },
};
