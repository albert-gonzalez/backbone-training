<?php

namespace Atrapalo\Infrastructure\Persistence\TodoList\Doctrine;

use Atrapalo\Domain\TodoList\TodoRepository as BaseRepository;
use Atrapalo\Domain\TodoList\Todo;
use Doctrine\DBAL\Connection;

class TodoRepository implements BaseRepository
{
    private $db;

    public function __construct(Connection $db)
    {
        $this->db = $db;
    }

    public function findAll($responseType = self::ENTITY)
    {
        $todoList = $this->db->fetchAll('SELECT * FROM todo');
        if ($responseType === self::ENTITY) {
            $todoList = $this->transformToEntityArray($todoList);
        }

        return $todoList;
    }

    private function transformToEntityArray($todoList)
    {
        $todoEntityList = [];
        foreach ($todoList as $todo) {
            $todoEntityList[] = $this->createEntity($todo);
        }

        return $todoList;
    }

    public function find($id, $responseType = self::ENTITY)
    {
        $todoList =
            $this->db->fetchAll('SELECT * FROM todo WHERE id = ?', [$id]);

        if (count($todoList) === 0) {
            return null;
        }

        $todo = $todoList[0];

        if ($responseType === self::ENTITY) {
            $todo = $this->createEntity($todo);
        }

        return $todo;
    }

    public function persist($todo)
    {
        if ($todo->getId()) {
            $this->update($todo);
        } else {
            $this->insert($todo);
        }
    }

    private function insert($todo)
    {
        $this->db->insert('todo', $this->getDataArray($todo));
    }

    private function update($todo)
    {
        $this->db->update(
            'todo',
            $this->getDataArray($todo),
            ['id' => $todo->getId()]
        );
    }

    private function getDataArray($todo)
    {
        return [
            'title' => $todo->getTitle(),
            'description' => $todo->getDescription(),
            'done' => $todo->getDone(),
            'creationDate' => $todo->getCreationDate()->format('c')
        ];
    }

    private function createEntity($todo)
    {
        $todoEntity = new Todo();
        $todoEntity->setId($todo['id']);
        $todoEntity->setTitle($todo['title']);
        $todoEntity->setDescription($todo['description']);
        $todoEntity->setDone($todo['done']);
        $todoEntity->setCreationDate(new \DateTime($todo['creationDate']));

        return $todoEntity;
    }

    public function delete($todo)
    {
        $this->db->delete('todo', ['id' => $todo->getId()]);
    }
}
