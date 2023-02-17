import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class KeywordDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    keyword: string;
}