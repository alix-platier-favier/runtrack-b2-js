<?php

function populateGradeSelect() {
    $host = "localhost";
    $dbname = "lp_official";
    $username = "root";
    $password = "phpcdlamerde159753!";

    try {
        $bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $bdd->query("SELECT id, name FROM grades");
        $grades = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($grades as $grade) {
            echo "<option value='{$grade['id']}'>{$grade['name']}</option>";
        }
    } catch (PDOException $e) {
        echo "<option value=''>Database Error</option>";
    }
}

function my_insert_student(string $email, string $fullname, string $gender, int $grade_id, DateTime $birthdate): bool {
    $host = "localhost";
    $dbname = "lp_official";
    $username = "root";
    $password = "phpcdlamerde159753!";
    
    try {
        $bdd = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $bdd->prepare("INSERT INTO student (email, fullname, gender, birthdate, grade_id) VALUES (:email, :fullname, :gender, :birthdate, :grade_id)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':gender', $gender);
        $birthdateStr = $birthdate->format('Y-m-d');
        $stmt->bindParam(':birthdate', $birthdateStr);
        $stmt->bindParam(':grade_id', $grade_id);
        $stmt->execute();

        return true;
    } catch (PDOException $e) {
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['input-email'];
    $fullname = $_POST['input-fullname'];
    $gender = $_POST['input-gender'];
    $birthdateStr = $_POST['input-birthdate'];
    $birthdate = DateTime::createFromFormat('Y-m-d', $birthdateStr);
    $grade_id = $_POST['input-grade_id'];

    $success = my_insert_student($email, $fullname, $gender, $birthdate, $grade_id);

    if ($success) {
        echo 'Student inserted successfully';
    } else {
        echo 'Failed to insert student';
    }
}
?>
