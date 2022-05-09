import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/frameworks/database/pg/entities";
import { ResponseFormat } from "src/lib/dto/responses/format";

export class UserUpdateOutput extends ResponseFormat<any> {
    @ApiProperty()
    data: User;
};