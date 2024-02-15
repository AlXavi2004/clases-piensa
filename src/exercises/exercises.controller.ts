import { Controller, Post } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Body } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller('Exercise')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}
  @Post()
  createExercise(@Body() newExercise: CreateExerciseDto) {
    return this.exercisesService.createExercise(newExercise);
  }
}
