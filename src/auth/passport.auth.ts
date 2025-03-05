import { ExtractJwt } from 'passport-jwt';

export class PassportAuth {
  constructor() {

    // @ts-ignore
    const opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    };
  }
}
