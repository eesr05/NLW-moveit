import { useState, useEffect, useContext } from 'react'
import { CountdownContext} from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

let countDownTimeout: NodeJS.Timeout;

export function Countdown(){
  // const {startNewChallenge} = useContext(ChallengesContext)

  // const [time, setTime] = useState(0.1 * 60);
  // const [isActive, setIsActive] = useState(false)
  // const[hasFinished, setHasFinished] = useState(false)

  // const minutes = Math.floor(time / 60)
  //const seconds = time % 60
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const[ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const[ secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')
 
  // function startCountdown(){
  //   setIsActive(true)
  // }

  // function resetCountdown(){
  //   clearTimeout(countDownTimeout)
  //     setIsActive(false)
  //     setTime(25 * 60)
  // }

  // useEffect(() => {
  //   if(isActive && time > 0){
  //     countDownTimeout = setTimeout(()=>{
  //       setTime(time -1)
  //     }, 1000)
  //   } else if(isActive && time === 0){
  //     setHasFinished(true);
  //     setIsActive(false);
  //     startNewChallenge();
  //   }
  // }, [isActive, time])

  return(
    <div>
        <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{ minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondsLeft}</span>
            <span>{secondsRight}</span>
          </div>
      </div>

        {hasFinished ? (
             <button 
             disabled 
             className={styles.countdownButton} 
             >
               Ciclo encerrado
             </button>
        ): (
          <>
            {isActive ? (
              <button 
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
        ) : (
            <button 
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
        )}
          </>
        )}


        

    

      
    </div>
    
  )
}