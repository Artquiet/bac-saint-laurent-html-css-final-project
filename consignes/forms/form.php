<?php
// $_GET['login']
// $_GET['password']

// $_POST['login'] = '\ or 1 = 1'

// $_POST['sexe'] // Autre

// if($_POST['sexe'] == 'Autre')
// {
//     // 
// }

// selection de l'utilisateur dans le DB
if($_GET['login'] == $result['login']
    && $_GET['password'] == $result['password'])
{
    echo 'utilisateur identifié';
}
else
{
    echo 'utilisateur mauvais';
}
?>