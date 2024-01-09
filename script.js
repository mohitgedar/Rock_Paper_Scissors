let Choice = ['Rock', 'Paper', 'Scissors'];
        
        
        
        function ResetTheScore(){
          
            document.getElementById('result-full').style.display='none';
            document.getElementById('whatresult').innerHTML='Result';
            localStorage.setItem('Lose',0);
            localStorage.setItem('Win',0);
            localStorage.setItem('Tie',0);
            updateScore();
        }

        function updateScore() {
            if(localStorage.getItem('Tie')===null){
                localStorage.setItem('Tie',0);
                localStorage.setItem('Win',0);
                localStorage.setItem('Lose',0);
            }
            document.getElementById('lose').innerHTML =localStorage.getItem('Lose');
            document.getElementById('tie').innerHTML = localStorage.getItem('Tie');
            document.getElementById('win').innerHTML = localStorage.getItem('Win');
        }

        function playGame(userChoice) {
            let pcChoice = Math.floor(Math.random() * Choice.length);
            let pcChose = Choice[pcChoice];

            document.getElementById('result-full').style.display='block';

            if (userChoice === 'Rock') {
                document.getElementById('your-img').src='images/rock-emoji.png';
                document.getElementById('your-img').alt='rock';


                if (pcChose === 'Rock') {
                    document.getElementById('pc-img').src='images/rock-emoji.png';
                    document.getElementById('pc-img').alt='rock'; 
                    //isNaN is builtin function which gives true or false if a result is NaN or not
                    //       (isNaN(parseInt(localStorage.getItem('Tie')))) ? 0:  (parseInt(localStorage.getItem('Tie')))+1  
                    // above line would have been required if updateScore was not called at very start because
                    // localStorage.getItem('Tie') will give null and parseInting it gives NaN and any math operation with NaN is NaN , so incrementing would not have worked , 
                    localStorage.setItem(    'Tie' , ((parseInt)(localStorage.getItem('Tie'))+1) );
                    document.getElementById('whatresult').innerHTML='Tie.';
                   
                } else if (pcChose === 'Paper') {
                    document.getElementById('pc-img').src='images/paper-emoji.png';
                    document.getElementById('pc-img').alt='paper';
                    localStorage.setItem('Lose',((parseInt)(localStorage.getItem('Lose'))+1));
                    document.getElementById('whatresult').innerHTML=' You Lose.';
                } else {
                    document.getElementById('pc-img').src='images/scissors-emoji.png';
                    document.getElementById('pc-img').alt='scissors';
                    localStorage.setItem('Win',((parseInt)(localStorage.getItem('Win'))+1));
                    document.getElementById('whatresult').innerHTML='You Win.';
                }
            } else if (userChoice === 'Paper') {

                document.getElementById('your-img').src='images/paper-emoji.png';
                document.getElementById('your-img').alt='paper';

                if (pcChose === 'Rock') {
                    document.getElementById('pc-img').src='images/rock-emoji.png';
                    document.getElementById('pc-img').alt='rock';
                    localStorage.setItem('Win',((parseInt)(localStorage.getItem('Win'))+1));
                    document.getElementById('whatresult').innerHTML='You Win.';
                } else if (pcChose === 'Paper') {
                    document.getElementById('pc-img').src='images/paper-emoji.png';
                    document.getElementById('pc-img').alt='paper';
                    localStorage.setItem('Tie',((parseInt)(localStorage.getItem('Tie'))+1));
                    document.getElementById('whatresult').innerHTML='Tie.';
                } else {
                    document.getElementById('pc-img').src='images/scissors-emoji.png';
                    document.getElementById('pc-img').alt='scissors';
                    localStorage.setItem('Lose',((parseInt)(localStorage.getItem('Lose'))+1));
                    document.getElementById('whatresult').innerHTML='You Lose.';
                }
            } else if (userChoice === 'Scissors') {

                document.getElementById('your-img').src='images/scissors-emoji.png';
                document.getElementById('your-img').alt='scissors';

                if (pcChose === 'Rock') {
                    document.getElementById('pc-img').src='images/rock-emoji.png';
                    document.getElementById('pc-img').alt='rock';
                    localStorage.setItem('Lose',((parseInt)(localStorage.getItem('Lose'))+1));
                    document.getElementById('whatresult').innerHTML='You Lose.';
                } else if (pcChose === 'Paper') {
                    document.getElementById('pc-img').src='images/paper-emoji.png';
                    document.getElementById('pc-img').alt='paper';
                    localStorage.setItem('Win',((parseInt)(localStorage.getItem('Win'))+1));
                    document.getElementById('whatresult').innerHTML='You Win.';
                } else {
                    document.getElementById('pc-img').src='images/scissors-emoji.png';
                    document.getElementById('pc-img').alt='scissors';
                    localStorage.setItem('Tie',((parseInt)(localStorage.getItem('Tie'))+1));
                    document.getElementById('whatresult').innerHTML='Tie.';
                }
            }

             
            updateScore(); // Update the scores after each game
        }

        // this is what is setting up the local storage score on refresh
        /*
        Initialization of Scores: The updateScore() function is called, which retrieves the values for 'Lose', 'Win', and 'Tie' from localStorage and updates the corresponding elements on the page to display these scores. 
        If these values are not present in localStorage, it sets them to 0. // this is the key that you don't have NaN problem
        */
        handleResize(); //calling the method initially so that it get applied on first load
        
        /*this function below is called whenever window resize , so that we can adjust css accordingly , without having to do it manaully in css file*/
        function handleResize(){
            let element=document.getElementById('rock-button');
            element=getComputedStyle(element).width;//here by using getComputerStyle(elementreference ) we got the css value for defined property .
            document.getElementById('rock-button').style.height=element;
            document.getElementById('rock-button').style.borderRadius=element;
            document.getElementById('paper-button').style.borderRadius=element;
            document.getElementById('scissors-button').style.borderRadius=element;

        }
        window.addEventListener('resize', handleResize); //this is a event listener that gets active everytime the window gets a resize , here we passed handleResize function as parameter so we didnot use the brackets becuase we don't want to call in immediately , but the event listener should call it 
        updateScore(); // Initialize the scores on page load