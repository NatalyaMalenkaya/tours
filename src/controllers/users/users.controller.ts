import {Body, Controller, Delete, Get, Param, Post, Put, Query, HttpException,HttpStatus ,UseGuards} from '@nestjs/common';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../shemas/user";
import {UserDto} from "../../dto/user-dto";
import {AuthGuard } from '@nestjs/passport';
import RejectedValue = jest.RejectedValue;

@Controller('users')
export class UsersController {

constructor( private userService: UsersService ) {
}
// обрабатывается первый http запрос !не будет работать 2 одинаковых запроса (2 шт @Get например) .будет работать первый
    @Get()
    getAllUsers(): Promise<User[]>  {
               return this.userService.getAllUsers()
    }

    // @Get()
    // getAllUsers(@Query() param): string {
    // console.log('param' , param)
    //     return param.id
    // }

    @Get(":id")
    getUserById(@Param('id') id): Promise<User> {
        return this.userService.getUserById(id);
    }


    @Post()
    sendUser(@Body() data: UserDto): Promise<User> {

        return this.userService.checkRegUser(data.login).then((queryRes) => {
            console.log ('data  reg', queryRes)
            if (queryRes.length === 0){
                return this.userService.sendUser(data);
        } else {
                console.log ('error - user is exist')
                throw new HttpException({
                    status: HttpStatus.CONFLICT,
                    errorText: 'Пользователь уже зарегистрирован',
                },  HttpStatus.CONFLICT);
            }
        });
    }

    @UseGuards(AuthGuard('local'))
    @Post(":login")
    authUser(@Body() data: UserDto, @Param('login')login): any {
        return this.userService.login(data);
    }


    @Put(":id")
    updateUsers(@Param('id')id , @Body() data ) : Promise<User> {
        return this.userService.updateUsers(id, data);
    }

    @Delete ()
    deleteUsers(): Promise<User>  {
        return this.userService.deleteUsers()
    }

    @Delete(":id")
    deleteUserById(@Param('id') id): Promise<User> {
        return this.userService.deleteUsersById(id);
    }

}
