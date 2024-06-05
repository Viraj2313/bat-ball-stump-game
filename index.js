        
        let score = {
            win: 0,
            lost: 0,
            tie:0,
        }
        function computerMove(){
           
        let randomNumber = Math.random() * 3;
        
        if (randomNumber > 0 && randomNumber <= 1 ){
            return 'bat';
        } else if (randomNumber > 1 && randomNumber <= 2){
            return 'ball';
        } else {
            return 'stump';
        }
        }
        localStorage.setItem('score', JSON.stringify(score));

        function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format time
  const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

  // Display time
  const clockElement = document.getElementById('clock');
  clockElement.textContent = 'Current time: ' + formattedTime;
}

// Update time every second
setInterval(updateClock, 1000);

// Initial call to display time immediately
updateClock();