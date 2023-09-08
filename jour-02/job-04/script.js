document.addEventListener("DOMContentLoaded", function () {
    function myRegisterStudent() {
        const email = document.getElementById('input-email').value;
        const fullname = document.getElementById('input-fullname').value;
        const birthdate = document.getElementById('input-birthdate').value;
    }
        

    function populateGradeSelect() {
        fetch('request.php', {
            method: 'GET'
        })
        .then(response => response.text()) 
        .then(data => {
            document.getElementById('student-grade').innerHTML = data;
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
    }

    window.addEventListener('load', populateGradeSelect);
});
