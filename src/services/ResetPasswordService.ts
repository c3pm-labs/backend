import { User } from 'nexus-plugin-prisma/client';
import { hash } from 'bcryptjs';

import { Service } from '../utils/Service';
import { UserInputError } from '../utils/errors';

export interface ResetPasswordParams {
  email?: string;
  password?: string;
}

export class ResetPasswordService extends Service {
  async resetPassword({
    email, password,
  }: ResetPasswordParams): Promise<User> {
    const hashedPassword = await hash(password, 10);
    if (!email && !password) {
      throw new UserInputError('Missing arguments');
    }
    return this.db.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
}
