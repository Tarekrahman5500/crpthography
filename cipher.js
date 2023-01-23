// Encryption function
function encrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    if (char >= 65 && char <=  90) {
      result += String.fromCharCode((char - 65 + shift) % 26 + 65);
    } else if (char >= 97 && char <= 122) {
      result += String.fromCharCode((char - 97 + shift) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
}

// Decryption function
function decrypt(text, shift) {
  return encrypt(text, 26 - shift);
}

// Example usage
const plaintext = "HELLO WORLD";
const shift = 3;
const ciphertext = encrypt(plaintext, shift);
console.log("Encrypted: " + ciphertext);
console.log("Decrypted: " + decrypt(ciphertext, shift));
// This will shift each letter by the specified number of positions in the alphabet.

