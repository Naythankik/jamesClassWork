<?php
function connection(){
    $dsn = "mysql:host=localhost;dbname=LIST";
    $pdo = new PDO($dsn, "root",123456);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
    return $pdo;
}

if(isset($_POST['add'])){
    $title = stripslashes($_POST['title']);
   
if(empty($title)){
    die("The input is empty");
}else{
    $sql = "INSERT INTO list(title) VALUES('$title')";
    $stmt = connection()->prepare($sql);
    $stmt->execute();
}

};

$sql = "SELECT * FROM list";
$query = connection()->prepare($sql);
$query->execute();
$results = $query->fetchAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css" type="text/css"> -->
    <title>Naythan</title>
    <style>
        caption{
            font-weight: 900;
            font-size: x-large;
            margin: 2px 0 5px 0;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        }
        table{
            color: black;
            border-collapse: collapse;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            width: 50%;
            margin: 100px auto 0 auto;
        }
        td input{
            align-items: center;
        }
        td,th{
           padding: 8px;
           border-bottom: 1px solid;
        }
        tr:nth-child(even){
            background-color: gray;
        }
        tr:hover{
            background-color: lightblue;
        }
        th{
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: cadetblue;
            color: white;
        }

       

        form input,button{
            display: block;
           margin : 0 auto 0 auto;
        }
        form label{
            color: black;
            display: block;
            text-align: center;
            line-height: 150%;
        }
        button{
            margin-top: 10px;
            background-color: green;
            border-radius: 3px;
            border: 0px;
            padding: 5px 5px 5px 5px;
        }
        del{
            color: red;
        }
        h3{
            text-align: center;
            margin-bottom: 4px;
        }
        form input::placeholder{
            padding-left: 12px;
            font-style: italic;
            font-size: smaller;
            font-weight: bold;
            color: darkorange;
        }
    </style>
</head>
<body>

<table>
    <caption>TODO LIST</caption>
    <thead>
        <tr>
            <th>N<u>o</u></th>
            <th>Action</th>
            <th>Progress</th>
        </tr>
    </thead>
    <tbody>
        <?php
        foreach($results as $id => $result){
        ?>
        <tr>
            <td><?php echo $id + 1; ?></td>
            <td class="title"><?php echo ucwords($result['title']); ?></td>
            <td><input type="checkbox" class="checks"></td>
        </tr>
        <?php
        };
        ?>
    </tbody>
</table>
    <!-- <p id="event">Welcome</p> -->
    <h3>TODO LIST FORM</h3>
    <form action="" method="POST" target="_self">
        <label for="first_name">Title</label>
        <input type="text" name="title" placeholder="Enter Title Name...">
        <button type="submit" name="add">Add</button>
    </form>

    <!-- <footer class="foot">
        this is  a Footer
    </footer> -->

    <script src="naythan.js"></script> 
</body>
</html>

