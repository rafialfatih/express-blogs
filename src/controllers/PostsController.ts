import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const PostsController = {
  index: async (res: Response): Promise<void> => {
    const posts = await prisma.posts.findMany({
      select: {
        title: true,
        content: true,
        createdAt: true,
        users: {
          select: {
            name: true,
          },
        },
      },
    });
    res.json(posts);
  },

  create: async (req: Request, res: Response): Promise<void> => {
    const { title, content, userId }: Prisma.PostsCreateManyInput = req.body;
    const post = await prisma.posts.create({
      data: {
        title,
        content,
        userId,
      },
    });
    res.status(201).json(post);
  },

  find: async (req: Request, res: Response): Promise<void> => {
    const { id }: Prisma.PostsWhereUniqueInput = req.params;
    const post = await prisma.posts.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        title: true,
        content: true,
        createdAt: true,
        users: {
          select: {
            name: true,
          },
        },
      },
    });
    res.json(post);
  },

  update: async (req: Request, res: Response): Promise<void> => {
    const { id }: Prisma.PostsWhereUniqueInput = req.params;
    const { title, content }: Prisma.PostsCreateInput = req.body;

    const post = await prisma.posts.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
      },
    });
    res.json(post);
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const { id }: Prisma.PostsWhereUniqueInput = req.params;
    await prisma.posts.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: "Post deleted" });
  },

  getPostsByUser: async (req: Request, res: Response): Promise<void> => {
    const { userId }: Prisma.PostsWhereInput = req.params;
    const posts = await prisma.posts.findMany({
      where: {
        userId: Number(userId),
      },
    });
    res.json(posts);
  },
};
