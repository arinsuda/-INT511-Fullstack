/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('/posts')
router.get('/posts',[PostsController,'index'])
router.get('/posts/create',[PostsController, 'create'])
router.post('/posts', [PostsController, 'store'])
router.get('/posts/:id',[PostsController,'show'])
router.get('posts/:id/edit',[PostsController, 'edit'])
router.post('posts/:id/update', [PostsController, 'update'])
router.get('/posts/:id/delete', [PostsController, 'destroy'])
