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

        // url: configService.get('DATABASE_URL_2'), //! Por emergencias si se cae la base de datos

        /* //! Levantarlo con Docker (docker-compose up -d)
        host: 'localhost',
        port: 5432,
        username: '${POSTGRES_USER}',
        password: '${POSTGRES_PASSWORD}',
        database: '${POSTGRES_DB}',
        */
        synchronize: true,
        autoLoadEntities: true,
        entities: ["dist/**/*.entity{.ts,.js}"],
        logging: true,
        dropSchema: true,
        migrationsRun: true,
        ssl: true
      }),
    }),
  ],
})
export class DatabaseModule {}
