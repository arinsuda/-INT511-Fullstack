/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '../app/controller/posts_controller.js'
import router from '@adonisjs/core/services/router'

router.on('/').redirect('/posts')
router.get('/posts', [PostsController, 'index']).as('posts.index')
router.get('/posts/post', [PostsController, 'create']).as('posts.create')
router.get('/posts/:id',[PostsController,'show']).as('posts.show')
router.get('/posts/:id/delete', [PostsController, 'destroy']).as('posts.destroy')
router.get('/posts/:id/post', [PostsController, 'edit']).as('posts.edit')
router.post('/posts', [PostsController, 'store']).as('posts.store')
router.post('/posts/:id', [PostsController, 'update']).as('posts.update')


