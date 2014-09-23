<?php

namespace Atrapalo\Controller\TodoList;

use Atrapalo\Domain\TodoList\TodoRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Atrapalo\Domain\TodoList\Todo;

class TodoListController
{
    private $todoRepository;

    private $templateEngine;

    public function __construct(TodoRepository $todoRepository, \Twig_Environment $templateEngine)
    {
        $this->todoRepository = $todoRepository;
        $this->templateEngine = $templateEngine;
    }

    public function indexJsonAction()
    {
        return new JsonResponse($this->indexAction(TodoRepository::ARRAY_VALUES));
    }

    public function indexHtmlAction()
    {
        $todoList = $this->indexAction(TodoRepository::ENTITY);

        return $this->templateEngine->render(
            'TodoList/Twig/index.html.twig', ['todoList' => $todoList]
        );
    }

    private function indexAction($responseType)
    {
        return $this->todoRepository->findAll($responseType);
    }

    public function editJsonAction($id)
    {
        return new JsonResponse($this->editAction($id, TodoRepository::ARRAY_VALUES));
    }

    public function editHtmlAction($id)
    {
        $todo = $this->editAction($id, TodoRepository::ENTITY);

        return $this->templateEngine->render(
            'TodoList/Twig/edit.html.twig', ['todo' => $todo]
        );
    }

    private function editAction($id, $responseType)
    {
        return $this->todoRepository->find($id, $responseType);
    }

    public function insertJsonAction($request)
    {
        list($code, $message) = $this->persistAction($request);
        return new JsonResponse(['code' => $code, 'message' => $message]);
    }

    public function insertHtmlAction(Request $request)
    {
        list($code, $message) = $this->persistAction($request);
        $todoList = $this->indexAction(TodoRepository::ENTITY);

        return $this->templateEngine->render(
            'TodoList/Twig/index.html.twig',
            ['todoList' => $todoList, 'code' => $code, 'message' => $message]
        );
    }

    public function updateJsonAction(Request $request)
    {
        list($code, $message) = $this->persistAction($request);
        return new JsonResponse(['code' => $code, 'message' => $message]);
    }

    public function updateHtmlAction(Request $request)
    {
        list($code, $message) = $this->persistAction($request);
        $todo = $this->
            editAction($request->request->get('id'), TodoRepository::ENTITY);

        return $this->templateEngine->render(
            'TodoList/Twig/edit.html.twig', ['todo' => $todo, 'code' => $code, 'message' => $message]
        );
    }

    private function persistAction(Request $request)
    {
        $returnCode = 0;
        $message = 'Todo Created';
        try {
            $todo = $this->requestToTodoEntity($request);
            $this->todoRepository->persist($todo);
        } catch (Exception $e) {
            $returnCode = -1;
            $message = 'Error!';
        }

        return [$returnCode, $message];
    }

    private function requestToTodoEntity(Request $request)
    {
        $todo = new Todo();
        $todo->setId($request->get('id'));
        $todo->setTitle($request->get('title'));
        $todo->setDescription($request->get('description'));
        $todo->setDone($request->get('done', 0));

        return $todo;
    }

    public function deleteJsonAction(Request $request)
    {
        return new JsonResponse(['code' => $this->deleteAction($request)]);
    }

    public function deleteHtmlAction(Request $request)
    {
        list($code, $message) = $this->deleteAction($request);
        $todoList = $this->indexAction(TodoRepository::ENTITY);

        return $this->templateEngine->render(
            'TodoList/Twig/index.html.twig',
            ['todoList' => $todoList, 'code' => $code, 'message' => $message]
        );
    }

    private function deleteAction(Request $request) {
        $returnCode = 0;
        $message = 'Todo Deleted';
        try {
            $todo = $this->requestToTodoEntity($request);
            $this->todoRepository->delete($todo);

        } catch (Exception $e) {
            $returnCode = -1;
            $message = 'Error!';
        }

        return [$returnCode, $message];
    }
}
