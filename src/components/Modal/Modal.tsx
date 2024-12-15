import { ModalProps } from "../../types";
import "./Modal.css";

export function Modal({ setIsFirstVisit }: ModalProps) {
  return (
    <div className="modal">
      <summary className="content">
        <p>
          <b>Welcome to Wordle.</b><br /><br />
          <b>Rules: </b><br /><br />
          There is a list of words and one of them is randomly chosen as the correct one. <br /><br />
          You must guess the word letter by letter. <br /><br />
          When you fill a row with letters you will get a confirmation button. <br /><br />
          If you are correct and the letters match the chosen word, you win! <br /><br />
          Otherwise you will get a highlight of letters. <br /><br />
          Green: Letter is correct and in the right index. <br /><br />
          Yellow: Letter exists in the word at another index. <br /><br />
          <b>Tips:</b> <br /><br />
          You can use TAB / SHIFT+TAB to navigate between inputs. <br /><br />
        </p> 
        <button onClick={() => setIsFirstVisit(false)}>I understand</button>
      </summary>
    </div>
  )
}
