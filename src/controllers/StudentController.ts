import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import Student from '../entities/Student';

class StudentController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, age } = req.body;
        const student = new Student();
        student.name = name;
        student.age = age;
        const response: any = await AppDataSource.manager.save(Student, student);
        return res.json(response);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const response: any = await AppDataSource.getRepository(Student).find({
            order: {
                name: 'asc'
            }
        });
        return res.json(response);
    }

}

export default new StudentController();