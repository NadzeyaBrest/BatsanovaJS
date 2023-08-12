import React, { useState } from "react"
import styles from "./styles.module.css"

function App() {

  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [third, setThird] = useState("")
  const [resultFirst, setResultFirst] = useState("")
  const [resultSecond, setResultSecond] = useState("")
  const [resultThird, setResultThird] = useState("")
  const onSubmit1 = (e) => {
    e.preventDefault()
    setFirst("")
    if (isFinite(first)) {
      if (first > 7) {
        setResultFirst("Привет")
        console.log("Привет")
      } else {
        setResultFirst("Не угадали")
        console.log("Не угадали")
      }
    } else {
      setResultFirst("Необходимо ввести число")
    }

  }
  const onSubmit2 = (e) => {
    e.preventDefault()
    setSecond("")
    if (second.toLowerCase() === "вячеслав") {
      setResultSecond(`Привет, ${second}`)
      console.log(`Привет, ${second}`);
    } else {
      setResultSecond("Нет такого имени")
      console.log("Нет такого имени");
    }
  }
  const onSubmit3 = (e) => {
    e.preventDefault()
    setThird("")
    if (third === "") {
      setResultThird("Введите числа через запятую")
    } else {
      const numbers = third.split(",").filter(number => number % 3 === 0)
      console.log(numbers);
      setResultThird(numbers.join(","))
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.item}>
          <p>1 задание. Введите число</p>
          <form>
            <input value={first} placeholder="Число" onChange={(e) => {
              setFirst(e.target.value)
              setResultFirst("")
            }
            } />
            <button onClick={onSubmit1}>check</button>
          </form>
          <p className={styles.result}>{resultFirst}</p>
        </div>
        <div className={styles.item}>
          <p>2 задание.Введите Имя</p>
          <form>
            <input value={second} placeholder="Имя" onChange={(e) => {
              setSecond(e.target.value)
              setResultSecond("")
            }} />
            <button onClick={onSubmit2}>check</button>
          </form>
          <p className={styles.result}>{resultSecond}</p>
        </div>
        <div className={styles.item}>
          <p>
            3 задание.<br/>Введите числа через запятую
          </p>
          <form>
            <input placeholder="Последовательность чисел" value={third} onChange={(e) => {
              setThird(e.target.value)
              setResultThird("")
            }} />
            <button onClick={onSubmit3}>check</button>
          </form>
          <p className={styles.result} >{resultThird}</p>
        </div>
        <div className={styles.item}>
          <p>
            4 задание.<br/>Можно ли считать эту последовательность правильной?
          </p>
          <p>
          Cкобочная последовательность: [((())()(())]]
          </p>
          <p>Нет, неверные скобки, необходимо заменить предпоследнюю на круглую,<br/> чтобы выглядело[((())()(()))]</p>
        </div>
      </div>
    </div>
  );
}

export default App;
