<?php

namespace Atrapalo\Domain\TodoList;

interface TodoRepository
{
    const ENTITY = 1;
    const ARRAY_VALUES = 2;

    public function findAll($responseType = self::ENTITY);

    public function find($id, $responseType = self::ENTITY);

    public function persist($todo);

    public function delete($todo);
}
