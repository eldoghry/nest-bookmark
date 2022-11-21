import { Injectable } from '@nestjs/common';

@Injectable({})

// hold business logic
export default class AuthService {
  signIn() {
    return { msg: 'sign in' };
  }
  signUp() {
    return 'sign up';
  }
}
