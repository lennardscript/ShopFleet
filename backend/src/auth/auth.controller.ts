import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Roles } from './decorators/roles.decorator';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body()
    signupDto: SignUpDto,
  ) {
    console.log(signupDto);
    return await this.authService.signup(signupDto);
  }

  @Post('signin')
  async signin(
    @Body()
    signinDto: SignInDto,
  ) {
    return await this.authService.signin(signinDto);
  }

  //* Sin unir decoradores
  /* @Get('profile')
  @Roles(Role.CUSTOMER)
  @UseGuards(AuthGuard, RolesGuard)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  } */

  @Get('profile')
  @Auth(Role.ADMIN)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  }
}
