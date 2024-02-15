import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './exercises.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}
  createExercise(exercise: CreateExerciseDto) {
    const newExercise = this.exercisesRepository.create(exercise);
    return this.exercisesRepository.save(newExercise);
  }
}
