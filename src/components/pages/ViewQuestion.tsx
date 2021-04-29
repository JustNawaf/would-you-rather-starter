import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { UserInterface } from '../../actions/Auth';
import { QuestionInterface } from '../../actions/Questions';
import { handleAddAnswer } from '../../actions/Shared';
import { StoreInterface } from '../../store'

interface ViewQuestionState extends RouteComponentProps{
    dispatch:Function,
    question:QuestionInterface,
    questionUser:UserInterface,
    auth:UserInterface,
    isQuestionAnswred:boolean,
}

class ViewQuestion extends Component<ViewQuestionState> {
    state = {
        selectedOption:'',
    };


    submitQuestionAnswer = (e:React.MouseEvent) => {
        e.preventDefault();
        const { dispatch, question, auth, history } = this.props;
        const data = {
            authedUser:auth.id,
            qid:question.id,
            answer:this.state.selectedOption
        };

        dispatch(handleAddAnswer(data));
        history.push(`/view/${question.id}`);
    };

    getQustionPresntege = () => {
        const { question } = this.props;

        const total = question['optionOne'].votes.length + question['optionTwo'].votes.length;
        console.log({
            total,
            optionOne:(question['optionOne'].votes.length / total) * 100,
            optionTwo:(question['optionTwo'].votes.length / total) * 100
        })
        return {
            optionOne:{
                total:question['optionOne'].votes.length,
                value:(question['optionOne'].votes.length / total) * 100
            },
            optionTwo:{
                total:question['optionTwo'].votes.length,
                value:(question['optionTwo'].votes.length / total) * 100
            },
        }
    };

    isMyVote = (option:string) => {
        const { question,auth } = this.props;
        return auth.answers[question.id] === option;
    };

    render() {
        const { question, questionUser, isQuestionAnswred } = this.props;
        const { selectedOption } = this.state;


        return (
            <div className="text-center">
                {
                    !isQuestionAnswred && 
                        <div>
                            <div className={`w-full my-6 lg:mt-0 px-4 py-2 border-none rounded-md shadow`} style={{ minWidth:'fit-content' }}>
                                <div className="w-full bg-gray-200 border border-gray-300 -mt-4 px-4 py-2 shadow-md">
                                    <p>{questionUser.name} Asks</p>
                                </div>
                                <div className="w-full my-2 flex flex-row">
                                    <div className="lg:w-1/2 flex justify-center items-center border-r">
                                        <img src={questionUser.avatarURL} alt="User Avatar" className="lg:w-24 lg:h-24 "/>
                                    </div>  
                                    <div className="mx-8 w-2/3 text-left">
                                        <h1 className="w-full  my-2 text-md lg:text-xl font-mono"> Would You Rather</h1>
                                        <div className={`my-2 ${selectedOption === 'optionOne' ? 'bg-gray-200':'bg-gray-100'}  px-4 py-2 border rounded-md flex flex-row justify-between items-center`}>
                                            <label htmlFor="optionOne" className="w-full h-full">{question.optionOne.text}</label>
                                            <input type="radio" id="optionOne" className="my-2 text-sm text-gray-400 "
                                            name="option" value={question.optionOne.text} onChange={() => this.setState({selectedOption:'optionOne'})}/>
                                        </div>
                                        <div className={`my-2 ${selectedOption === 'optionTwo' ? 'bg-gray-200':'bg-gray-100'}  px-4 py-2 border rounded-md flex flex-row justify-between items-center`}>
                                            <label htmlFor="optionTwo" className="w-full h-full">{question.optionTwo.text}</label>
                                            <input type="radio" id="optionTwo" className="my-2 text-sm text-gray-400 "
                                            name="option" value={question.optionTwo.text} onChange={() => this.setState({selectedOption:'optionTwo'})}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-gray-400 py-2 text-white border rounded-lg" onClick={this.submitQuestionAnswer}>
                                Submit
                            </button>  
                        </div>
                }
                {
                    isQuestionAnswred && 
                        <div>
                            <div className={`w-full my-6 lg:mt-0 px-4 py-2 border-none rounded-md shadow`} style={{ minWidth:'fit-content' }}>
                                <div className="w-full bg-gray-200 border border-gray-300 -mt-4 px-4 py-2 shadow-md">
                                    <p>{questionUser.name} Asks</p>
                                </div>
                                <div className="w-full my-2 flex flex-row">
                                    <div className="lg:w-1/2 flex justify-center items-center border-r">
                                        <img src={questionUser.avatarURL} alt="User Avatar" className="lg:w-24 lg:h-24 "/>
                                    </div>  
                                    <div className="mx-8 w-2/3 text-left">
                                        <h1 className="w-full  my-2 text-md lg:text-xl font-mono"> Would You Rather</h1>
                                        <div className={`relative px-4 py-2  ${this.isMyVote('optionOne') ? 'bg-green-200 border border-green-400':''} rounded-md shadow my-2`}>
                                            <div className="w-full h-full relative z-10">
                                                <label htmlFor="optionOne" className={`w-full h-full`}>{question.optionOne.text}</label>
                                                
                                                <span className="absolute right-2 text-black">{this.getQustionPresntege().optionOne.total}</span>
                                            </div>
                                        </div>
                                        <div className={`relative px-4 py-2  ${this.isMyVote('optionTwo') ? 'bg-green-200 border border-green-400':''} rounded-md shadow my-2`}>
                                            <div className="w-full h-full relative z-10 ">
                                                <label htmlFor="optionTwo" className={`w-full h-full`}>{question.optionTwo.text}</label>
                                                <span className="absolute right-2 text-black">{this.getQustionPresntege().optionTwo.total}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}


function mapStateToProps(store:StoreInterface,props:any){
    const { id } = props.match.params;
    const { questions, users, auth } = store;
    const question = questions[id];
    const questionUser = users[question.author];
    const isQuestionAnswred = Object.keys(auth.answers).includes(id);
    return {
        question,
        questionUser,
        auth,
        isQuestionAnswred
    }
}

export default withRouter(connect(mapStateToProps)(ViewQuestion))