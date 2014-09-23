<?php

namespace Atrapalo\Domain\TodoList;

class Todo
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /**
     * @var boolean
     */
    private $done;

    /**
     * @var string
     */
    private $description;

    /**
     * @var DateTime
     */
    private $creationDate;

    public function __construct()
    {
        $this->creationDate = new \DateTime();
        $this->done = false;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getDone()
    {
        return $this->done;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getCreationDate()
    {
        return $this->creationDate;
    }

    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    public function setDone($done)
    {
        $this->done = $done;

        return $this;
    }

    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    public function setCreationDate(\DateTime $creationDate)
    {
        $this->creationDate = $creationDate;

        return $this;
    }

}
