import {Router,Request,Response} from 'express'
import { CreateUserController } from './Controllers/user/CreateUserController';
import { AuthUserController } from './Controllers/user/AuthUserController';
import { DetailUserController } from './Controllers/user/DetailUserController';
import { isAuthenticated } from './Middleware/isAuthenticated';
import { DeleteUserController } from './Controllers/user/DeleteUserController';
import { CreateCategoryController } from './Controllers/category/CreateCategoryController';
import { DetailCategoryControler } from './Controllers/category/DetailCategoryController';
import { ListCategoryController } from './Controllers/category/ListCategoryController';
import { DeleteCategoryController } from './Controllers/category/DeleteCategoryController';
import { CreateItemController } from './Controllers/items/CreateItemController';
import { DeleteItemController } from './Controllers/items/DeleteItemController';
import { DetailItemController } from './Controllers/items/DetailItemController';
const router = Router();
// rotas do usuário
router.post("/users", new CreateUserController().handle) // cria user
router.post("/session", new AuthUserController().handle) // autentica user
router.get("/detail",  isAuthenticated, new DetailUserController().handle)
router.delete("/deleteUser", isAuthenticated, new DeleteUserController().handle)
// rotas categoria
router.post("/category",  isAuthenticated, new CreateCategoryController().handle)
router.get("/detailCategory",  isAuthenticated, new DetailCategoryControler().handle)
router.get("/ListCategory",  isAuthenticated, new ListCategoryController().handle)
router.delete("/deleteCategory", isAuthenticated, new DeleteCategoryController().handle)
// rotas produtos
router.post("/createItem", isAuthenticated, new CreateItemController().handle)
router.delete("/deleteItem", isAuthenticated, new DeleteItemController().handle)
router.get("/detailItem" , isAuthenticated, new DetailItemController().handle)

/// export
export {router};