import { Request, Response } from 'express';
export declare const getUsuarios: (req: Request, res: Response) => Promise<void>;
export declare const getUsuario: (req: Request, res: Response) => Promise<void>;
export declare const postUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const putUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
