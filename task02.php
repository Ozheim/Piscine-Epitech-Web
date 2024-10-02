<?php
function dog_bark(int $woof_nb){
    for($i = 0; $i < $woof_nb; $i++){
       print("woof");
        if($woof_nb != 1 && $i != $woof_nb -1 ){
            print(" ");
        }
   }
   print("\n");
}
?>
