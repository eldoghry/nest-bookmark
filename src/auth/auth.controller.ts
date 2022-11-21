import { Controller, HttpCode, Post } from "@nestjs/common";
import AuthService from './auth.service';


// auth is global endpoint route
@Controller('auth') 

// this responsible for service request and response
export class AuthController{
    // authService: AuthService;
    // constructor(authService:AuthService){
    //     this.authService = authService;
    // }


    constructor(private authService:AuthService){}

    // this how to create request handler
    //auth/signin
    @Post('signin')
    // @HttpCode(200)
    signIn(){
   
      return this.authService.signIn()
    }
    
    
    //auth/signup
    @Post('signUp')
    @HttpCode(200)
    signUp(){
        return this.authService.signUp()
    }

}