import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class DatumDto {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsEmail()
    email: string;
    @IsString()
    username: string
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}
