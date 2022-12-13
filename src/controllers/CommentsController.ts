import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const CommentsController = {
  show: async (req: Request, res: Response) => {
    const { id }: Prisma.CommentsWhereUniqueInput = req.params;
    const comments = await prisma.comments.findMany({
      where: {
        posts: {
          id: Number(id),
        },
      },
      select: {
        comment: true,
        userId: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json(comments);
  },

  create: async (req: Request, res: Response) => {
    const { comment, userId, postId }: Prisma.CommentsCreateManyInput =
      req.body;
    const comments = await prisma.comments.create({
      data: {
        comment,
        userId,
        postId,
      },
    });
    res.json(comments);
  },

  update: async (req: Request, res: Response) => {
    const { id }: Prisma.CommentsWhereUniqueInput = req.params;
    const { comment }: Prisma.CommentsCreateInput = req.body;

    const comments = await prisma.comments.update({
      where: {
        id: Number(id),
      },
      data: {
        comment,
      },
    });
    res.json(comments);
  },

  delete: async (req: Request, res: Response) => {
    const { id }: Prisma.CommentsWhereUniqueInput = req.params;
    await prisma.comments.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: "Comment deleted" });
  },
};
