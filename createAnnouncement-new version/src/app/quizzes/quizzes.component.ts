
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  @Input() questions:any;
  @Input() answers:any;
  @Input() questionIndex:any;  
  @Input() finished:any;
  @Output() clickAnswer: EventEmitter<object>  = new EventEmitter();
  @Input() selectedIndex:any;
  choices: Array<{question: string, answers:string[], check:boolean[]}> = [{question:'What fraction of a day is 6 hours?', answers:['6/24','6','1/3','1/6'],check:[false,false,false,false]} ]
  totalQuestions: number = this.choices.length;
  rightAnswer:string ='6/24';
  answerShow: boolean=false;
  right:string = "wrong";
  ngOnInit(): void {
  }
  clickChoice(e:any){
    // alert(e.target.id);
    
   // this.selectedIndex = parseInt(e.target.id.replace("choice",""));
   // alert(this.selectedIndex);
     this.clickAnswer.emit(e);
    
  }
  displayAnswer1(){
    let i =0;
    for (let choice of this.choices[0].check ){
      if(choice===true){
        console.log('true')
        if (this.choices[0].answers[i]===this.rightAnswer){
          this.right="Correct!";
          break;
      }
      }
      i++;
    }
    this.answerShow =true;
  }
  constructor() { }
}
