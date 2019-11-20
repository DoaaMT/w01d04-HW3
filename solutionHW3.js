# JS Arrays and Loops Week1 Homework3


#### Exercise 1:
Create a function that will get the sum of the numbers between 1 and n and return the answer

```
var summ=0;
function summation(num){
for(var i = 1;i<=num;i++){
 summ+=i  ;
}
  return summ ;
}


console.log(summation(5)) ;
// should return 15 because 1+2+3+4+5=15




```

#### Exercise 2:
Create a program to get the sum of all the even numbers in a group

```

var summ=0;
function summationEven(num){


for(var i = 1;i<=num;i++){
  if (i%2===0)
 summ+=i  ;
}
  return summ ;
}


console.log(summationEven(5)) ;
 // should return 6 because 2+4=6





 ```




#### Exercise 3:
Write a function that will tell you all of the words in an array that contain the letter `a`

```




function wordsWithA (arr) {

for(var i = 0; i < arr.length; i++)
{
    if(arr[i].indexOf('a') != -1)
    {
        console.log(arr[i]);
    }
}

}

wordsWithA(['cat', 'rabbit', 'dog', 'frog']); // should return ['cat', 'rabbit']



```



#### Exercise 4:
Create a function to reverse the letters in a word

```


function reverse (str) {

   var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"

}

console.log(reverse("caterpillar")) ;// should return "rallipretac"

```



#### Exercise 5:
 Create a function that takes an array of words and combines them with a dash

  ```

  function addDashes (str) {

   console.log( str.join(" _ "))

  }

  addDashes(['test1', 'test2', 'test3']) ;
     // should return "test1-test2-test3"



  ```
 ## Extra Practice Optional 6,7,8,9,10,11
#### Exercise 6:
Function that will count up to a number and back down and return a string of the climb

```
 countUpAndDown(3) // should return "1 2 3 2 1"
```

#### Exercise 7:
Create a function to get the average of a group of numbers

```
  avg([8, 2, 2, 4]) // should return 4
 ```

#### Exercise 8:
Write a function that will tell you all of the words in an array that contain a specified letter

```
 wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
```

#### Exercise 9:
Function that returns the longest word in sentence

 ```
longestWord("The cat in the house") // should return "house"
```
#### Exercise 10:
Function that returns the largest even number

```
 largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
```

## BONUS

Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

```js
// start of the game
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];

// playing the game
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('T'); // "You Win, G O A T"
```
**How To: Make it like Hangman:**
- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

### Deliverable
1. When finished, `git add .`, `git commit -m " "`, `git push origin master` to your fork and submit a pull request.
2. Please fill up the following questions when you pull request:
- on a scale from 1 to 5, how comfortable were you with this assignment? (1 is very difficult)
- How long did it take?
- What was a challenge you had with this assignment?
- Is there anything that you'd like some further information on?
- Do you have any suggestions to improve this assignment?