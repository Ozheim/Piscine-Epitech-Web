<?php
function dog_bark(int $woof_nb){
    for($i=0;$i<$woof_nb;$i++){
        echo "woof";
        if($woof_nb != 1 && $i != $woof_nb - 1){
            echo " ";
        }
    }
    echo "\n";
}


?> 