import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
  public static passwordHash = (password: string): Promise<string> =>
    hash(password, 10);

  public static passwordCompare = async (
    text: string,
    encryptedText: string
  ): Promise<boolean> => {
    const result = await compare(text, encryptedText);
    return result;
  };

  public static generateToken = (id: number): string => {
    const secretKey: string | any = process.env.JWT_SECRET_KEY;

    const token: string = jwt.sign({ id }, secretKey, {
      expiresIn: '24h',
    });

    return token;
  };
}

export default Authentication;
