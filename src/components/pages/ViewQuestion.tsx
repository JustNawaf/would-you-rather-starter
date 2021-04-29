import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { UserInterface } from '../../actions/Auth';
import { QuestionInterface } from '../../actions/Questions';
import { handleAddAnswer } from '../../actions/Shared';
import { StoreInterface } from '../../store'

interface ViewQuestionState extends RouteComponentProps{
    dispatch:Function,
    question:QuestionInterface | undefined,
    questionUser:UserInterface | undefined,
    auth:UserInterface,
    isQuestionAnswred:boolean,
    questions:{
        [key:string]:QuestionInterface
    }
}

class ViewQuestion extends Component<ViewQuestionState> {
    state = {
        selectedOption:'',
    };


    submitQuestionAnswer = (e:React.MouseEvent) => {
        e.preventDefault();
        const { dispatch, question, auth, history } = this.props;
        if(question !== undefined){
            const data = {
                authedUser:auth.id,
                qid:question.id,
                answer:this.state.selectedOption
            };
    
            dispatch(handleAddAnswer(data));
            history.push(`/questions/${question.id}`);
        }

    };

    getQustionPresntege = () => {
        const { question } = this.props;

        if(question !== undefined){
            const total = question['optionOne'].votes.length + question['optionTwo'].votes.length;
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
        }
    };

    getTotalPresntege(option:string){
        let pres:any = this.getQustionPresntege();
        let op1 = pres[option];
        if(pres)
            return (op1.total/(pres.optionOne.total+pres.optionTwo.total))*100
        
    }

    isMyVote = (option:string) => {
        const { question,auth } = this.props;
        if(question !== undefined)
            return auth.answers[question.id] === option;
    };

    getUserName = () => {
        const { questionUser} = this.props;
        if(questionUser !== undefined && 'name' in questionUser){
            return questionUser.name;
        }
    };

    getUserAvatar = () => {
        const { questionUser} = this.props;
        if(questionUser !== undefined && 'avatarURL' in questionUser){
            return questionUser.avatarURL;
        }
    };

    render() {
        const { questions, question, questionUser, isQuestionAnswred } = this.props;
        const { selectedOption } = this.state;

        if(Object.keys(questions).length === 0){
            return '';
        }

        if(question === undefined){
            return (
                <Redirect push to="/NotFound" />
            )
        }

        if(question !== undefined || questionUser !== undefined)
        return (
            <div className="text-center">
                {
                    !isQuestionAnswred && 
                        <div>
                            <div className={`w-full my-6 lg:mt-0 px-4 py-2 border-none rounded-md shadow`} style={{ minWidth:'fit-content' }}>
                                <div className="w-full bg-gray-200 border border-gray-300 -mt-4 px-4 py-2 shadow-md">
                                    <p>{this.getUserName()} Asks</p>
                                </div>
                                <div className="w-full my-2 flex flex-row">
                                    <div className="lg:w-1/2 flex justify-center items-center border-r">
                                        <img src={this.getUserAvatar()} alt="User Avatar" className="lg:w-24 lg:h-24 "/>
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
                                    <p>{this.getUserName()} Asks</p>
                                </div>
                                <div className="w-full my-2 flex flex-row">
                                    <div className="lg:w-1/2 flex justify-center items-center border-r">
                                        <img src={this.getUserAvatar()} alt="User Avatar" className="lg:w-24 lg:h-24 "/>
                                    </div>  
                                    <div className="mx-8 w-2/3 text-left">
                                        <h1 className="w-full  my-2 text-md lg:text-xl font-mono"> Would You Rather</h1>
                                        <div className={`relative px-4 py-2  ${this.isMyVote('optionOne') ? 'bg-green-200 border border-green-400':''} rounded-md shadow my-2`}>
                                            <div className="w-full h-full relative z-10">
                                                <label htmlFor="optionOne" className={`w-full h-full`}>{question.optionOne.text}</label>
                                                <span className="absolute right-2 text-black">{this.getTotalPresntege('optionOne')}%</span>
                                            </div>
                                            {/* <span className="w-full text-center">{this.getQustionPresntege().optionOne.total} out of {this.getQustionPresntege().optionOne.total+this.getQustionPresntege().optionTwo.total}</span> */}
                                        </div>
                                        <div className={`relative px-4 py-2  ${this.isMyVote('optionTwo') ? 'bg-green-200 border border-green-400':''} rounded-md shadow my-2`}>
                                            <div className="w-full h-full relative z-10 ">
                                                <label htmlFor="optionTwo" className={`w-full h-full`}>{question.optionTwo.text}</label>
                                                <span className="absolute right-2 text-black">{this.getTotalPresntege('optionTwo')}%</span>
                                            </div>
                                            {/* <span className="w-full text-center">{this.getQustionPresntege().optionTwo.total} out of {this.getQustionPresntege().optionOne.total+this.getQustionPresntege().optionTwo.total}</span> */}
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
    const question = questions ? questions[id]:undefined;
    const questionUser = question !== undefined ? users[question.author]:undefined;
    const isQuestionAnswred = Object.keys(auth.answers).includes(id);
    return {
        questions,
        question,
        questionUser,
        auth,
        isQuestionAnswred
    }
}

export default withRouter(connect(mapStateToProps)(ViewQuestion))