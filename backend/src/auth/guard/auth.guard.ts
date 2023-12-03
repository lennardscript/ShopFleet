import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { jwtConstants } from '../constants/jwt.constant';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);
    const refreshToken = this.extractRefreshToken(request);

    if (!token || !refreshToken) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    //* Validar el refresh token

    try {
      const refreshPayload = await this.jwtService.verifyAsync(refreshToken, {
        secret: jwtConstants.secret,
      });

      //* Si el token de actualización es válido, genere un nuevo token de acceso
      const newToken = await this.jwtService.signAsync(refreshPayload);

      //* Agregar un nuevo token de acceso a la respuesta
      request['new_token'] = newToken;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractRefreshToken(request: Request): string | undefined {
    return request.cookies['refresh-token'];
  }
}
