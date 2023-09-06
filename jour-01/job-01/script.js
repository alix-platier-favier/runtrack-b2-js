function myUpperCase(string) {
    const map = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
    
    var result = "";

    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        var isLowercase = false;

        for (var j = 0; j < map.lowercase.length; j++) {
            if (char === map.lowercase[j]) {
                char = map.uppercase[j];
                isLowercase = true;
                break;
            }
        }

        result += char;
    }

    return result;
}

console.log(myUpperCase("Hello World"));
