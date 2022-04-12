
<?php

function groupByOwners(array $files)
{

    $result = [];
   foreach($files as $file => $name){
    // Check if the name already exist
    if (isset($result[$name])) {
        $result[$name] = array_merge($result[$name], [$file]);
    } else {
        $result[$name] = [$file];
    }
   }

   return $result;
}

$files = array
(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));
?>