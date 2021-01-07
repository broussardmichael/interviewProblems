//The height of a binary tree is the number of edges between the tree's root and its furthest leaf. Create a getHeight function for your search tree.
let Node = require ('./binarysearchtree/binarysearchtree');
let root = new Node(20);
root.add(10);
root.add(26);
root.add(19);
root.add(17);
root.add(18);
root.add(14);
root.add(8);
root.add(12);


let getHeight = function(root) {
    let left = -1, right = -1;
    if(root === null)
        return -1;

    if(root.left !== null) {
        left = getHeight(root.left);
    }

    if(root.right !== null) {
        right = getHeight(root.right);
    }

    return (left > right ? left : right) + 1
}

// Encrypt a stringWhen you encrypt a string S, you start with an initially-empty resulting string R and append characters to it as follows:
// Append the middle character of S (if S has even length, then we define the middle character as the left-most of the two central characters)
// Append the encrypted version of the substring of S that's to the left of the middle character (if non-empty)
// Append the encrypted version of the substring of S that's to the right of the middle character (if non-empty)
// For example, to encrypt the string "abc", we first take "b", and then append the encrypted version of "a" (which is just "a") and the encrypted version of "c" (which is just "c") to get "bac".
// If we encrypt "abcxcba" we'll get "xbacbca". That is, we take "x" and then append the encrypted version "abc" and then append the encrypted version of "cba".

function getMiddleCharacterIndex(str){
    let len = str.length;
    return (len % 2 === 0 ? len/2 : Math.ceil(len/2)) - 1;
}

function encryptStr(s) {
    if(s.length === 1 || s.length === 2)
        return s;
    if(s.length === 3)
        return (s[1] + s[0] + s[2]);

    let midIndex = getMiddleCharacterIndex(s);

    let encStr = s[midIndex];
    encStr += encryptStr(s.slice(0, midIndex));
    encStr += encryptStr(s.slice(midIndex + 1, s.length));

    return encStr;
}

//One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
// Given a string and a rotation factor, return an encrypted string.

//a-z 97-122
//A-Z 65-90
//0-9 48-57

//rotation of 14

function rotateLowerCaseAlpha(ascii, rotationFactor) {
    let rotatedAscii;
    if(rotationFactor === 25)
        return String.fromCharCode(ascii);

    rotationFactor = rotationFactor % 26;

    rotatedAscii = ascii + rotationFactor;
    if(rotatedAscii > 122) {
        let overRotation = rotatedAscii - 122;
        rotatedAscii = 97 + overRotation - 1;
    }

    return String.fromCharCode(rotatedAscii);
}

function rotateUpperCaseAlpha(ascii, rotationFactor) {
    let rotatedAscii;
    if(rotationFactor === 25)
        return String.fromCharCode(ascii);

    rotationFactor = rotationFactor % 26;

    rotatedAscii = ascii + rotationFactor;
    if(rotatedAscii > 90) {
        let overRotation = rotatedAscii - 90;
        rotatedAscii = 65 + overRotation - 1;
    }

    return String.fromCharCode(rotatedAscii);
}

function rotateNum(ascii, rotationFactor) {
    let rotatedAscii;
    if(rotationFactor === 10)
        return String.fromCharCode(ascii);

    rotationFactor = rotationFactor % 10;
    rotatedAscii = ascii + rotationFactor;
    if(rotatedAscii > 57) {
        let overRotation = rotatedAscii - 57;
        rotatedAscii = 48 + overRotation - 1;
    }

    return String.fromCharCode(rotatedAscii);
}

function rotationalCipher(input, rotationFactor) {
    let returnStr = "";

    for(let i = 0; i < input.length; i++) {
        let ascii = input[i].charCodeAt(0);
        if(ascii >= 97 && ascii <= 127) {
            returnStr += rotateLowerCaseAlpha(ascii, rotationFactor);
        } else if(ascii >= 65 && ascii <= 90) {
            returnStr += rotateUpperCaseAlpha(ascii, rotationFactor);
        } else if(ascii >= 48 && ascii <= 57) {
            returnStr += rotateNum(ascii, rotationFactor);
        } else {
            returnStr += input[i];
        }
    }

    return returnStr
}
