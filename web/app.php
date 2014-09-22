<?php

require_once __DIR__.'/../vendor/autoload.php';

use Silex\Application;
use Atrapalo\Infrastructure\Persistence\TodoList\Doctrine\TodoRepository;
use Atrapalo\Controller\TodoList\TodoListController;
use Symfony\Component\HttpFoundation\Request;

$app = new Application();
$app['debug'] = true;

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

// Providers
$app->register(new Silex\Provider\ServiceControllerServiceProvider());
$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_sqlite',
        'path'     => __DIR__.'/../database/app.db',
    ),
));
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../src/Atrapalo/Infrastructure/Template',
));

// Services
$app['todo.repository'] = $app->share(function() use ($app) {
    return new TodoRepository($app['db']);
});
$app['todolist.controller'] = $app->share(function() use ($app) {
    return new TodoListController($app['todo.repository'], $app['twig']);
});

$app->get('api/todolist', "todolist.controller:indexJsonAction");
$app->get('/todolist', "todolist.controller:indexHtmlAction");

$app->get('api/todolist/{id}', "todolist.controller:editJsonAction");
$app->get('/todolist/{id}', "todolist.controller:editHtmlAction");

$app->post('api/todolist', "todolist.controller:insertJsonAction");
$app->post('/todolist', "todolist.controller:insertHtmlAction");

$app->put('api/todolist/{id}', "todolist.controller:updateJsonAction");
$app->put('/todolist/{id}', "todolist.controller:updateHtmlAction");


Request::enableHttpMethodParameterOverride();

return $app;

