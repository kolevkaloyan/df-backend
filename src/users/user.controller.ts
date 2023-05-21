import { Controller,Post, Get, Req, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAll(@Req() request: Request): Promise<User[]> {
        return this.userService.findAll() ;
    }

    @Get('/role')
    getUserRole(@Req() request: Request): string{
        return "This returns users's role"
    }

    @Post('/register') 
    async addUser (
        @Body('fullName') fullName: string,
        @Body('email') email: string,

        
    ) {
        return this.userService.addUser(
            {
                fullName,
                email
            }
        )
    }

} 