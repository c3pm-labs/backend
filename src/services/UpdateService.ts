import { User } from 'nexus-plugin-prisma/client';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface UpdateUserParams {
  usernameBeforeUpdate?: string;
  usernameAfterUpdate?: string;
  email?: string;
  description?: string;
}

export class UpdateService extends Service {
  async updateUser({
    usernameBeforeUpdate, usernameAfterUpdate, email, description,
  }: UpdateUserParams): Promise<User> {
    if (!usernameBeforeUpdate || !usernameAfterUpdate || !email || !description) {
      throw new UserInputError('Require one argument');
    }
    return this.db.user.update({
      where: {
        username: usernameBeforeUpdate,
      },
      data: {
        email,
        username: usernameAfterUpdate,
        description,
      },
    });
  }
}
