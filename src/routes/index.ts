import { Router } from "express";
import student from "../controllers/StudentController";
const routes = Router();

routes.post('/', student.create);
routes.get('/', student.list);

export default routes;