import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        //url: configService.get('DATABASE_URL_2'), //! Por emergencias si se cae la base de datos
        synchronize: true,
        autoLoadEntities: true,
        ssl: true
      }),
    }),
  ],
})
export class DatabaseModule {}
