<?php

function get_shortest(array $arr1) {
    
    $shortest = $arr1[0];


    foreach ($arr1 as $str) {
        if (strlen($str) < strlen($shortest)) {
            $shortest = $str; 
        }
    }

    return $shortest; 

}
?>
