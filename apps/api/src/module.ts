import { Module, Injectable, Controller, Get, Query, UnauthorizedException, BadRequestException, UseGuards, ExecutionContext, CanActivate, Req } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import type { Request } from 'express';

@Injectable()
class Database extends PrismaClient {}
@Injectable()
class AuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request & { user?: { sub: string; organizationId: string; branchId?: string; role: string } }>();
    const token = request.headers.authorization?.replace(/^Bearer /, '');
    if (!token) throw new UnauthorizedException('Oturum gerekli');
    try {
      const payload = await this.jwt.verifyAsync<{ sub: string; organizationId: string; branchId?: string; role: string }>(token);
      if (!payload.sub || !payload.organizationId) throw new Error('Invalid token');
      request.user = payload;
      return true;
    } catch { throw new UnauthorizedException('Geçersiz oturum'); }
  }
}
@Controller()
class AppController {
  constructor(private readonly db: Database) {}
  @Get('health') health() { return { status: 'ok', service: 'otoservistakip-api' }; }
  @Get('vehicles/by-plate')
  @UseGuards(AuthGuard)
  async byPlate(@Query('plate') plate: string, @Req() req: Request & { user: { organizationId: string } }) {
    const normalized = (plate || '').toLocaleUpperCase('tr-TR').replace(/[^A-Z0-9]/g, '');
    if (!/^([0-7][0-9]|8[01])[A-Z]{1,3}[0-9]{2,5}$/.test(normalized)) throw new BadRequestException('Geçersiz plaka');
    const vehicle = await this.db.vehicle.findFirst({
      where: { organizationId: req.user.organizationId, plates: { some: { normalizedPlate: normalized, validTo: null } } },
      include: { plates: true, ownerships: { where: { endAt: null }, include: { customer: true } }, orders: { orderBy: { createdAt: 'desc' }, take: 10, include: { items: true } }, mileageLogs: { orderBy: { recordedAt: 'desc' }, take: 1 } }
    });
    return { found: !!vehicle, vehicle };
  }
}
@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), JwtModule.register({ secret: process.env.JWT_SECRET || 'UNCONFIGURED_DO_NOT_USE', signOptions: { expiresIn: '8h' } })], controllers: [AppController], providers: [Database, AuthGuard] })
export class AppModule {}
