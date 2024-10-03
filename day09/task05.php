<?php

function form_is_submitted()
{
    return $_POST['submit'];
}


function whoami()
{
    $name = $_POST['name'];
    $age = $_POST['age'];
    $curriculum = $_POST['curriculum'];

    if ($name && $age) {
        echo "Hi, my name is $name and I'm $age years old.";
    } elseif ($name) {
        echo "Hi, my name is $name.";
    } elseif ($age) {
        echo "Hi, I have no name and I'm $age years old.";
    } else {
        echo "Hi, I have no name.";
    }

    if ($curriculum) {
        echo " I'm a student of $curriculum.";
    }
}
