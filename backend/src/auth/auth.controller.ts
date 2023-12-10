import { Body, Controller, Get, Patch, Post, Req, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { Request } from 'express';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { RequestPasswordResetDto } from './dto/request-reset-password.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

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

  @Post('refresh')
  async refresh(@Req() request: Request) {
    const newToken = request['new_token'];

    if (!newToken) {
      throw new UnauthorizedException();
    }

    return {
      accesToken: newToken,
    };
  }

  @Patch('reset-password')
  async resetPassword(@Body() requestPasswordResetDto: RequestPasswordResetDto) {
    return await this.authService.resetPassword(requestPasswordResetDto);
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
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.authService.profile(user);
  }
}
