import {Router,Request,Response} from 'express'
import { CreateUserController } from './Controllers/user/CreateUserController';
import { AuthUserController } from './Controllers/user/AuthUserController';
import { DetailUserController } from './Controllers/user/DetailUserController';
import { isAuthenticated } from './Middleware/isAuthenticated';
import { DeleteUserController } from './Controllers/user/DeleteUserController';
import { CreateCategoryController } from './Controllers/category/CreateCategoryController';
import { DetailCategoryControler } from './Controllers/category/DetailCategoryController';
import { ListCategoryController } from './Controllers/category/ListCategoryController';
const router = Router();
// rotas do usuário
router.post("/users", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/detail",  isAuthenticated, new DetailUserController().handle)
router.delete("/deleteUser", isAuthenticated, new DeleteUserController().handle)
// rotas categoria
router.post("/category",  isAuthenticated, new CreateCategoryController().handle)
router.get("/detailCategory",  isAuthenticated, new DetailCategoryControler().handle)
router.get("/ListCategory",  isAuthenticated, new ListCategoryController().handle)




/// export
export {router};