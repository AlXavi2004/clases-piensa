import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { ExercisesController } from './exercises/exercises.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { Exercise } from './exercises/exercises.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@alexis2004',
      database: 'piensaPrimero',
      entities: [User, Exercise],
      synchronize: true,
    }),
    UsersModule,
    ExercisesModule,
  ],
  controllers: [AppController, ExercisesController],
  providers: [AppService],
})
export class AppModule {}
