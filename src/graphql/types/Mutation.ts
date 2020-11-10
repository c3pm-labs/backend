import { mutationType, stringArg } from '@nexus/schema';

import { AuthService } from '../../services/AuthService';
import { UpdateService } from '../../services/UpdateService';
import { ResetPasswordService } from '../../services/ResetPasswordService';

import { Viewer } from './Viewer';
import { User } from './User';

export const Mutation = mutationType({
  definition(t) {
    t.field('register', {
      type: Viewer,
      args: {
        username: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
      },
      resolve: async (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.register(args);
      },
    });
    t.field('login', {
      type: Viewer,
      args: {
        login: stringArg({ required: true }),
        password: stringArg({ required: true }),
      },
      resolve: async (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.login(args);
      },
    });
    t.field('logout', {
      type: Viewer,
      resolve: (parent, args, ctx) => {
        const authService = new AuthService(ctx);
        return authService.logout();
      },
    });
    t.field('resetPassword', {
      type: User,
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: (parent, args, ctx) => {
        const resetPasswordService = new ResetPasswordService(ctx);
        return resetPasswordService.resetPassword(args);
      },
    });
    t.field('update', {
      type: User,
      nullable: true,
      args: {
        id: stringArg(),
        username: stringArg(),
        email: stringArg(),
        description: stringArg(),
      },
      resolve: async (parent, args, ctx) => {
        const updateService = new UpdateService(ctx);
        return updateService.updateUser(args);
      },
    });
  },
});
