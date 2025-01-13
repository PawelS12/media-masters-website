import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFormsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  socialMediaPresence: string;

  @IsString()
  socialMediaDetails: string;

  @IsString()
  @IsNotEmpty()
  industry: string;

  @IsString()
  contentIdeas: string;

  @IsString()
  goals: string;

  @IsString()
  additionalQuestions: string;
}
