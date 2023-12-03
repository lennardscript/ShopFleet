import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/signup.dto';

import * as bcrypt from 'bcryptjs';
import { SignInDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from './enums/rol.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup({ username, email, password }: SignUpDto) {
    const SALT_ROUNDS = 10;
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    try {

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      await this.usersService.create({
        username,
        email,
        password: hashedPassword,
      });
    } catch (error) {
      throw new InternalServerErrorException('An error ocurred while creating the user');
    }

    return {
      username,
      email,
    };
  }

  async signin({ email, password }: SignInDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('email is wrong');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('password is wrong');
    }

    const payload = {
      email: user.email,
      role: user.role,
    };

    const token = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    })

    await this.usersService.updateRefreshToken(user.id_user, refreshToken);

    return {
      token,
      refreshToken,
      email,
    };
  }

  async profile({ email, role }: { email: string; role: string }) {
    if(role !== Role.ADMIN && role !== 'otherAllowedRole') {
      throw new UnauthorizedException('You are not authorized to acces this resource');
    }

    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('No user not found with email');
    }
    return user
  }
}
