import { Body, ConflictException, Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("/accounts")
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}


  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { email, password, name } = body;
    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new ConflictException("User already exists");
    }
    const account = await this.prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
  }
}
